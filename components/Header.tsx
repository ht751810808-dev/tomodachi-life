'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/tomodachi-life-personalities', label: 'Personalities' },
  { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream' },
  { href: '/tomodachi-life-qr-codes', label: 'QR Codes' },
  { href: '/tomodachi-life-switch', label: 'Switch' },
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
    <header style={{
      position: 'fixed',
      top: '12px',
      left: '16px',
      right: '16px',
      zIndex: 100,
      borderRadius: '20px',
      border: scrolled ? '1.5px solid var(--color-pink-light)' : '1.5px solid rgba(255,179,227,0.5)',
      background: scrolled ? 'rgba(255,254,250,0.97)' : 'rgba(255,254,250,0.82)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transition: 'all 300ms ease',
      boxShadow: scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="38" height="38" rx="11" fill="#FF71CE"/>
            <rect width="38" height="38" rx="11" fill="url(#logoGrad)"/>
            {/* Island */}
            <ellipse cx="19" cy="27" rx="10" ry="4" fill="#6BCB77"/>
            <ellipse cx="19" cy="26.5" rx="10" ry="3.5" fill="#7DD97F"/>
            {/* Building */}
            <rect x="13" y="14" width="12" height="13" rx="2" fill="#FFF5FB"/>
            <rect x="13" y="14" width="12" height="13" rx="2" fill="white" opacity="0.9"/>
            {/* Windows */}
            <rect x="15" y="17" width="3" height="3" rx="1" fill="#7DD8E8"/>
            <rect x="20" y="17" width="3" height="3" rx="1" fill="#FFD93D"/>
            <rect x="15" y="22" width="3" height="3" rx="1" fill="#FF71CE"/>
            <rect x="20" y="22" width="3" height="3" rx="1" fill="#6BCB77"/>
            {/* Roof */}
            <path d="M12 15L19 10L26 15H12Z" fill="#FF71CE"/>
            {/* Sun */}
            <circle cx="30" cy="11" r="4" fill="#FFD93D"/>
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="38" y2="38">
                <stop offset="0%" stopColor="#FF71CE"/>
                <stop offset="100%" stopColor="#C77DFF"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Tomodachi Life
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                transition: 'all 200ms ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-pink-dark)';
                e.currentTarget.style.background = '#FFE8F7';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/tomodachi-life-2" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Tomodachi Life 2
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1.5px solid var(--color-border)',
              borderRadius: '10px',
              color: 'var(--color-text)',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '4px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--color-pink)', borderRadius: '2px', transition: 'all 200ms' }} />
            <span style={{ display: 'block', width: '14px', height: '2px', background: 'var(--color-purple)', borderRadius: '2px', transition: 'all 200ms' }} />
            <span style={{ display: 'block', width: '18px', height: '2px', background: 'var(--color-blue)', borderRadius: '2px', transition: 'all 200ms' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          padding: '1rem 1.25rem 1.25rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text)',
                textDecoration: 'none',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '1rem',
                fontWeight: 500,
                transition: 'background 200ms',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = '#FFE8F7'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/tomodachi-life-2"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '0.5rem', justifyContent: 'center', fontSize: '0.95rem' }}
          >
            Tomodachi Life 2
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
