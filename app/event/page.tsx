'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function EventRedirect() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const id = searchParams.get('e');
    window.location.replace('/' + (id ? '#event=' + encodeURIComponent(id) : ''));
  }, [searchParams]);
  return <a href="/">DōM Collective</a>;
}

export default function EventPage() {
  return (
    <Suspense fallback={<a href="/">DōM Collective</a>}>
      <EventRedirect />
    </Suspense>
  );
}
