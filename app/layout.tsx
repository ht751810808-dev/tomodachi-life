import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tomodachi Life – Complete Guide, Personalities, QR Codes & More',
  description:
    'Everything about Tomodachi Life: personalities guide, Mii QR codes, Living the Dream walkthrough, 3DS & Switch info. Your #1 Tomodachi Life fan resource updated 2026.',
  keywords: [
    'tomodachi life',
    'tomodachi life personalities',
    'tomodachi life personality chart',
    'tomodachi life living the dream',
    'tomodachi life qr codes',
    'tomodachi life mii',
    'tomodachi life switch',
    'tomodachi life 3ds',
    'nintendo tomodachi life',
    'tomodachi life guide',
  ],
  metadataBase: new URL('https://www.tomodachi-life.org'),
  openGraph: {
    title: 'Tomodachi Life – Complete Guide, Personalities & QR Codes',
    description:
      'The #1 Tomodachi Life fan resource. Personality chart, Mii QR codes, Living the Dream guide, ROM info, and more.',
    url: 'https://www.tomodachi-life.org',
    siteName: 'Tomodachi Life Guide',
    images: [
      {
        url: '/images/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Tomodachi Life Fan Guide',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tomodachi Life – Complete Guide & Personalities',
    description: 'Personalities, QR codes, Living the Dream guide, and more. Updated 2026.',
  },
  robots: { index: true, follow: true },
  other: {
    'google-adsense-account': 'ca-pub-4159784234426326',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9TRS67EPZK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9TRS67EPZK');
        `}</Script>
        {/* Google AdSense Auto Ads */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4159784234426326"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://pl28931065.effectivegatecpm.com/3e/89/e4/3e89e4cccaa743051cb61f3d59225c0f.js"
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
