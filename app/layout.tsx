import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'DōM - Breathe • Be • Collaborate',
  description: 'Find your perfect creative collaborator. Connect with talented creatives, showcase your work, and collaborate on your next project.',
  openGraph: {
    title: 'DōM - Breathe • Be • Collaborate',
    description: 'Find your perfect creative collaborator. Connect with talented creatives, showcase your work, and collaborate on your next project.',
    images: ['/z.domlogov1.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/z.domlogov1.png'],
  },
  icons: {
    icon: '/z.domlogov1.png',
    apple: '/z.domlogov1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.8"
          strategy="afterInteractive"
        />
        <Script
          src="https://js.stripe.com/v3/"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.paypal.com/sdk/js?client-id=Abz5_fSTKVE07Lh1f8-Hcduc3VYG15t_bu786-7RM27vCCoQUsoLBcn5evz3lPrdK7JtIT3XVeVRh93g&currency=USD"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
