'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const features = [
  { icon: '🎮', label: 'Nintendo Switch' },
  { icon: '💻', label: 'Play on PC' },
  { icon: '🌐', label: 'Online Features' },
  { icon: '📱', label: 'Emulator Ready' },
];

export default function LivingTheDreamBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="living-the-dream"
      style={{
        padding: '5rem 0',
        background: 'linear-gradient(135deg, #FFF0F8 0%, #F5EEFF 50%, #EFF8FF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(199,125,255,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,216,232,0.15) 0%, transparent 70%)' }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center' }} className="ltd-grid">

          {/* Left: Content */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(24px)', transition: 'all 600ms ease' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #FF71CE22, #C77DFF22)',
              border: '1.5px solid #C77DFF44',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 1rem',
              marginBottom: '1.25rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: '#8B3FC5',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C77DFF', display: 'inline-block' }} />
              New in 2026
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Tomodachi Life:{' '}
              <span style={{ display: 'block', background: 'linear-gradient(135deg, #FF5AA5 0%, #C77DFF 60%, #7DD8E8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Living the Dream
              </span>
            </h2>

            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream</strong> is the 2026 Nintendo Switch sequel that brings your island to life with online features, new relationship mechanics, and stunning visuals. Play natively on Switch or via emulator on PC.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem', marginBottom: '2rem' }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1rem',
                  background: 'white',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}>
                  <span style={{ fontSize: '1.1rem' }}>{f.icon}</span>
                  {f.label}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-living-the-dream" className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Full LtD Guide
              </Link>
              <Link href="/tomodachi-life-living-the-dream/pc" className="btn-secondary">
                Play on PC →
              </Link>
            </div>
          </div>

          {/* Right: Illustrated Switch Card */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotate(0deg)' : 'translateY(30px) rotate(2deg)',
            transition: 'all 700ms var(--bounce) 200ms',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              {/* Main card */}
              <div style={{
                background: 'white',
                border: '2px solid var(--color-border)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 20px 60px rgba(199,125,255,0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Card bg gradient */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,113,206,0.06) 0%, rgba(199,125,255,0.08) 100%)', borderRadius: '24px' }} />

                {/* Switch console SVG illustration */}
                <svg width="100%" viewBox="0 0 280 190" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nintendo Switch console with Tomodachi Life: Living the Dream">
                  {/* Switch body */}
                  <rect x="10" y="30" width="260" height="130" rx="16" fill="#2D2844"/>
                  {/* Screen */}
                  <rect x="65" y="38" width="150" height="114" rx="8" fill="#1A1A2E"/>
                  <rect x="68" y="41" width="144" height="108" rx="6" fill="url(#screenGrad)"/>

                  {/* Screen content - island scene */}
                  <rect x="68" y="41" width="144" height="108" rx="6" fill="#C8EEFF"/>
                  {/* Sky gradient */}
                  <rect x="68" y="41" width="144" height="60" rx="6" fill="#B0E4FF"/>
                  {/* Sun */}
                  <circle cx="185" cy="60" r="16" fill="#FFD93D" opacity="0.9"/>
                  {/* Clouds */}
                  <ellipse cx="95" cy="60" rx="20" ry="10" fill="white" opacity="0.8"/>
                  <ellipse cx="110" cy="55" rx="15" ry="8" fill="white" opacity="0.8"/>
                  {/* Island */}
                  <ellipse cx="140" cy="125" rx="70" ry="28" fill="#6BCB77"/>
                  <ellipse cx="140" cy="120" rx="70" ry="24" fill="#7DD97F"/>
                  {/* Building */}
                  <rect x="115" y="85" width="50" height="40" rx="5" fill="white" opacity="0.95"/>
                  <path d="M110 90 L140 72 L170 90Z" fill="#FF71CE"/>
                  {/* Windows */}
                  <rect x="121" y="92" width="10" height="10" rx="2" fill="#7DD8E8" opacity="0.7"/>
                  <rect x="135" y="92" width="10" height="10" rx="2" fill="#FFD93D" opacity="0.7"/>
                  <rect x="149" y="92" width="10" height="10" rx="2" fill="#FF71CE" opacity="0.7"/>
                  {/* Mini Mii characters */}
                  <circle cx="105" cy="118" r="7" fill="#FFECD2"/>
                  <path d="M99 113 Q105 108 111 113" fill="#FF71CE"/>
                  <circle cx="175" cy="116" r="7" fill="#FFECD2"/>
                  <path d="M169 111 Q175 106 181 111" fill="#7DD8E8"/>

                  {/* Text on screen */}
                  <rect x="75" y="45" width="70" height="10" rx="3" fill="white" opacity="0.9"/>
                  <text x="77" y="53" fontFamily="Fredoka, sans-serif" fontSize="7" fill="#FF5AA5" fontWeight="700">Living the Dream</text>

                  {/* Left Joy-Con */}
                  <rect x="0" y="40" width="52" height="110" rx="14" fill="#FF71CE"/>
                  <rect x="8" y="60" width="20" height="20" rx="10" fill="rgba(255,255,255,0.3)"/>
                  <circle cx="18" cy="70" r="7" fill="rgba(255,255,255,0.5)"/>
                  <rect x="8" y="90" width="12" height="12" rx="3" fill="rgba(255,255,255,0.25)"/>
                  <rect x="22" y="90" width="12" height="12" rx="3" fill="rgba(255,255,255,0.25)"/>
                  <rect x="8" y="108" width="12" height="12" rx="3" fill="rgba(255,255,255,0.25)"/>
                  <rect x="22" y="108" width="12" height="12" rx="3" fill="rgba(255,255,255,0.25)"/>

                  {/* Right Joy-Con */}
                  <rect x="228" y="40" width="52" height="110" rx="14" fill="#7DD8E8"/>
                  <circle cx="262" cy="68" r="12" fill="rgba(255,255,255,0.25)"/>
                  <circle cx="262" cy="68" r="7" fill="rgba(255,255,255,0.35)"/>
                  <circle cx="244" cy="90" r="5" fill="#FF71CE" opacity="0.7"/>
                  <circle cx="256" cy="84" r="5" fill="#FFD93D" opacity="0.7"/>
                  <circle cx="256" cy="96" r="5" fill="#6BCB77" opacity="0.7"/>
                  <circle cx="268" cy="90" r="5" fill="#7DD8E8" opacity="0.7"/>

                  <defs>
                    <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C8EEFF"/>
                      <stop offset="100%" stopColor="#A8E4C8"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/* Card footer */}
                <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-text)' }}>Living the Dream</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Nintendo Switch · 2026</div>
                  </div>
                  <span className="pill pill-pink">New!</span>
                </div>
              </div>

              {/* Floating badges */}
              <div style={{ position: 'absolute', top: '-16px', right: '-16px', background: '#6BCB77', color: 'white', borderRadius: 'var(--radius-full)', padding: '0.4rem 0.85rem', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, boxShadow: '0 4px 16px rgba(107,203,119,0.4)', animation: 'float 3s ease-in-out infinite' }}>
                Switch Ready
              </div>
              <div style={{ position: 'absolute', bottom: '-12px', left: '-12px', background: '#C77DFF', color: 'white', borderRadius: 'var(--radius-full)', padding: '0.4rem 0.85rem', fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700, boxShadow: '0 4px 16px rgba(199,125,255,0.4)', animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}>
                PC via Emulator
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ltd-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
