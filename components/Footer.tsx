'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  Guides: [
    { label: 'Beginner Guide', href: '#guides' },
    { label: 'Rod Tier List', href: '#guides' },
    { label: 'Skill Book Guide', href: '#guides' },
    { label: 'Money Farming', href: '#guides' },
  ],
  Resources: [
    { label: 'Titan Fishing Codes', href: '#codes' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Play on Roblox', href: 'https://www.roblox.com', external: true },
    { label: 'Discord Community', href: '#', external: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Disclaimer', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(10,10,22,0.9)',
        borderTop: '1px solid rgba(124,58,237,0.2)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* Top Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                marginBottom: '1rem',
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Titan Fishing"
                width={36}
                height={36}
                style={{ borderRadius: '8px' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #00FFFF, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                TITAN FISHING
              </span>
            </Link>
            <p
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.8,
                marginBottom: '1.25rem',
              }}
            >
              The #1 unofficial fan site for Titan Fishing Roblox. Get daily codes, expert guides, and tier lists.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['Discord', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-display)',
                    textDecoration: 'none',
                    transition: 'all 200ms ease',
                  }}
                  title={social}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-accent)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                  }}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-text)',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      style={{
                        color: 'var(--color-text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 200ms ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>↗</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'rgba(148,163,184,0.5)', fontSize: '0.8rem' }}>
            © 2026 titanfishing.art — Unofficial Fan Site. Not affiliated with Roblox Corporation or game developers.
          </p>
          <p style={{ color: 'rgba(148,163,184,0.4)', fontSize: '0.75rem' }}>
            Made with ❤️ for the Titan Fishing community
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
