'use client';

import Link from 'next/link';

const footerSections = {
  'Living the Dream': [
    { label: 'LtD – Full Guide', href: '/tomodachi-life-living-the-dream' },
    { label: 'Play on PC', href: '/tomodachi-life-living-the-dream/pc' },
    { label: 'Emulator Setup', href: '/tomodachi-life-living-the-dream/emulator' },
    { label: 'ROM Download', href: '/tomodachi-life-living-the-dream/rom' },
    { label: 'NSP for Switch', href: '/tomodachi-life-living-the-dream/nsp' },
    { label: 'Personality Guide', href: '/tomodachi-life-living-the-dream/personality-guide' },
  ],
  'Guides': [
    { label: 'Personalities Guide', href: '/tomodachi-life-personalities' },
    { label: 'Mii QR Codes', href: '/tomodachi-life-qr-codes' },
    { label: 'Save Editor', href: '/tomodachi-life-save-editor' },
    { label: 'Release Dates', href: '/tomodachi-life-release-date' },
  ],
  'Platforms': [
    { label: 'Tomodachi Life Switch', href: '/tomodachi-life-switch' },
    { label: 'Tomodachi Life 3DS', href: '/tomodachi-life-3ds' },
    { label: 'Play on PC', href: '/tomodachi-life-pc' },
    { label: 'ROM Guide', href: '/tomodachi-life-rom' },
    { label: 'Tomodachi Life HK', href: '/tomodachi-life-hk' },
  ],
  'More': [
    { label: 'Tomodachi Life 2', href: '/tomodachi-life-2' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-bg) 0%, #FFF0F9 100%)',
      borderTop: '2px solid var(--color-border)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative blobs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,113,206,0.12) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,216,232,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Top: brand + links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 0.8fr',
          gap: '2.5rem',
          marginBottom: '3rem',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="38" height="38" rx="11" fill="url(#footerLogoGrad)"/>
                <ellipse cx="19" cy="27" rx="10" ry="4" fill="#7DD97F"/>
                <rect x="13" y="14" width="12" height="13" rx="2" fill="white" opacity="0.9"/>
                <rect x="15" y="17" width="3" height="3" rx="1" fill="#7DD8E8"/>
                <rect x="20" y="17" width="3" height="3" rx="1" fill="#FFD93D"/>
                <rect x="15" y="22" width="3" height="3" rx="1" fill="#FF71CE"/>
                <rect x="20" y="22" width="3" height="3" rx="1" fill="#6BCB77"/>
                <path d="M12 15L19 10L26 15H12Z" fill="#FF71CE"/>
                <circle cx="30" cy="11" r="4" fill="#FFD93D"/>
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="38" y2="38">
                    <stop offset="0%" stopColor="#FF71CE"/>
                    <stop offset="100%" stopColor="#C77DFF"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Tomodachi Life
              </span>
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Your #1 fan resource for Tomodachi Life. Personalities guide, Mii QR codes, Living the Dream walkthrough, and much more.
            </p>
            {/* Mini nav pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link href="/tomodachi-life-2" className="pill pill-pink" style={{ cursor: 'pointer' }}>TL 2 News</Link>
              <Link href="/tomodachi-life-personalities" className="pill pill-purple" style={{ cursor: 'pointer' }}>Personalities</Link>
              <Link href="/tomodachi-life-qr-codes" className="pill pill-blue" style={{ cursor: 'pointer' }}>QR Codes</Link>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--color-text)',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.875rem',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-pink-dark)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '0.5rem',
        }}>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.8rem' }}>
            © 2026 tomodachi-life.org — Unofficial fan site. Not affiliated with Nintendo Co., Ltd.
          </p>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.78rem' }}>
            Made with love for Tomodachi Life fans everywhere
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
