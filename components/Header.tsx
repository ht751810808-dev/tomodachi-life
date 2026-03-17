'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ROBLOX_GAME_URL = 'https://www.roblox.com/games/115893378298440/Titan-Fishing';

const navLinks = [
  { href: '#codes', label: 'Codes' },
  { href: '#skills', label: 'Skills' },
  { href: '#features', label: 'Features' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: '12px',
        left: '16px',
        right: '16px',
        zIndex: 100,
        borderRadius: '16px',
        border: '1px solid rgba(124,58,237,0.3)',
        background: scrolled
          ? 'rgba(15,15,35,0.95)'
          : 'rgba(15,15,35,0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        transition: 'all 300ms ease',
        boxShadow: scrolled
          ? '0 4px 30px rgba(124,58,237,0.2)'
          : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <Image
            src="/images/logo.png"
            alt="Titan Fishing Logo"
            width={40}
            height={40}
            style={{ borderRadius: '8px', objectFit: 'cover' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #00FFFF, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            TITAN FISHING
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                transition: 'color 200ms ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="play-nav-btn"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem',
              padding: '0.45rem 1rem',
              borderRadius: '50px',
              border: '1px solid rgba(0,255,255,0.4)',
              color: '#00FFFF',
              textDecoration: 'none',
              transition: 'all 200ms ease',
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            ▶ Play Now
          </a>
          <a
            href="#codes"
            className="btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            🎁 Get Codes
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text)',
              cursor: 'pointer',
              fontSize: '1.5rem',
              display: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            padding: '1rem 1.25rem',
            borderTop: '1px solid rgba(124,58,237,0.2)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                fontSize: '1rem',
                borderBottom: '1px solid rgba(124,58,237,0.1)',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
