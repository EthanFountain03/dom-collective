import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const CALENDAR_ID = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID!;
const TIMEZONE = 'America/New_York';

function b64url(data: Buffer | string): string {
    const buf = typeof data === 'string' ? Buffer.from(data) : data;
    return buf.toString('base64url');
}

async function getGoogleToken(sa: { client_email: string; private_key: string }): Promise<string | null> {
    const now = Math.floor(Date.now() / 1000);
    const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
    const payload = b64url(JSON.stringify({
        iss: sa.client_email,
        scope: 'https://www.googleapis.com/auth/calendar.events',
        aud: 'https://oauth2.googleapis.com/token',
        iat: now,
        exp: now + 3600,
    }));

    const toSign = `${header}.${payload}`;
    const sign = crypto.createSign('RSA-SHA256');
    sign.update(toSign);
    const sig = sign.sign(sa.private_key);
    const jwt = `${toSign}.${b64url(sig)}`;

    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: jwt,
        }).toString(),
    });

    const data = await res.json();
    return data.access_token ?? null;
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}

export async function POST(req: NextRequest) {
    const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_JSON;
    if (!keyJson) {
        return NextResponse.json({ error: 'Google service account key not configured' }, { status: 500 });
    }

    // Verify admin via Supabase JWT
    const authHeader = req.headers.get('Authorization') ?? '';
    const token = authHeader.replace(/^Bearer\s+/i, '').trim();
    if (!token) {
        return NextResponse.json({ error: 'Missing auth token' }, { status: 401 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
    const { data: { user }, error: userErr } = await supabase.auth.getUser(token);
    if (userErr || !user) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select('user_status')
        .eq('id', user.id)
        .single();

    if (profile?.user_status !== 'admin') {
        return NextResponse.json({ error: 'Admins only' }, { status: 403 });
    }

    // Parse event payload
    const body = await req.json();
    const { title, description, date, start_time, end_time, location, type } = body;

    if (!title || !date) {
        return NextResponse.json({ error: 'title and date required' }, { status: 400 });
    }

    const desc = type ? `${type}${description ? ': ' + description : ''}` : (description ?? '');

    let start: Record<string, string>;
    let end: Record<string, string>;

    if (start_time) {
        const startStr = `${date}T${start_time}:00`;
        const endStr = end_time
            ? `${date}T${end_time}:00`
            : new Date(new Date(startStr).getTime() + 7200000).toISOString().slice(0, 19);
        start = { dateTime: startStr, timeZone: TIMEZONE };
        end   = { dateTime: endStr,   timeZone: TIMEZONE };
    } else {
        const nextDay = new Date(date);
        nextDay.setDate(nextDay.getDate() + 1);
        start = { date };
        end   = { date: nextDay.toISOString().slice(0, 10) };
    }

    // Get Google access token via service account JWT
    let sa: { client_email: string; private_key: string };
    try {
        sa = JSON.parse(keyJson);
    } catch {
        return NextResponse.json({ error: 'GOOGLE_SERVICE_ACCOUNT_KEY_JSON is not valid JSON' }, { status: 500 });
    }
    if (!sa.client_email || !sa.private_key) {
        return NextResponse.json({ error: 'Service account key missing client_email or private_key' }, { status: 500 });
    }

    const accessToken = await getGoogleToken(sa);
    if (!accessToken) {
        return NextResponse.json({ error: 'Failed to get Google access token' }, { status: 500 });
    }

    // Create event in Google Calendar
    const calUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`;
    const calRes = await fetch(calUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ summary: title, description: desc, location: location ?? '', start, end }),
    });

    const created = await calRes.json();

    if (created.id) {
        return NextResponse.json({ success: true, eventId: created.id, htmlLink: created.htmlLink ?? '' });
    } else {
        return NextResponse.json(
            { error: 'Google Calendar rejected the event', details: created },
            { status: 500 }
        );
    }
}
