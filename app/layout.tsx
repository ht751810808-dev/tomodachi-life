import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Titan Fishing Codes 2026 – Roblox Guide, Wiki & All Codes | titanfishing.art',
  description:
    'Get the latest Titan Fishing Roblox codes 2026. Redeem free cash, rod skins & boosts. Complete guide, rod tier list, skill book strategies, and wiki updated daily.',
  keywords: [
    'titan fishing codes',
    'titan fishing roblox codes',
    'titan fishing codes 2026',
    'titan fishing roblox',
    'titan fishing wiki',
    'titan fishing guide',
    'titan fishing skill book',
    'titan fishing rod tier list',
    'roblox titan fishing',
  ],
  metadataBase: new URL('https://www.titanfishing.art'),
  openGraph: {
    title: 'Titan Fishing Codes 2026 – Roblox Guide & Wiki',
    description:
      'Latest Titan Fishing codes, rod tier lists, skill book guides, and community wiki. Updated daily!',
    url: 'https://www.titanfishing.art',
    siteName: 'Titan Fishing Fan Site',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Titan Fishing Roblox Fan Site',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Fishing Codes 2026 – Roblox Guide & Wiki',
    description: 'Latest Titan Fishing codes, rod tier lists, and guides. Updated daily!',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1NFDZXRD9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1NFDZXRD9X');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
