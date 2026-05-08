'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const personalities = [
  { name: 'Easygoing', desc: 'Laid-back & happy-go-lucky', color: '#6BCB77', bg: '#EDFFF0', emoji: '😌' },
  { name: 'Outgoing', desc: 'Energetic & social butterfly', color: '#FF71CE', bg: '#FFF0F8', emoji: '🌟' },
  { name: 'Confident', desc: 'Bold & self-assured', color: '#FF9F51', bg: '#FFF5EE', emoji: '😎' },
  { name: 'Independent', desc: 'Self-reliant & private', color: '#7DD8E8', bg: '#F0FAFF', emoji: '🎯' },
  { name: 'Gentle', desc: 'Kind & soft-hearted', color: '#C77DFF', bg: '#F5EEFF', emoji: '💜' },
  { name: 'Lively', desc: 'Full of life & spirited', color: '#FFD93D', bg: '#FFFBEE', emoji: '✨' },
  { name: 'Sassy', desc: 'Witty & sharp-tongued', color: '#F43F5E', bg: '#FFF5F5', emoji: '💅' },
  { name: 'Airheaded', desc: 'Dreamy & free-spirited', color: '#B8EDF5', bg: '#F0FAFF', emoji: '☁️' },
];

// Mini Mii SVG face with different hair/eye colors per personality
function MiiFace({ color, emoji }: { color: string; emoji: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Face */}
      <circle cx="32" cy="34" r="22" fill="#FFECD2" stroke="#F5D5BA" strokeWidth="1.5"/>
      {/* Hair */}
      <path d={`M12 28 Q32 10 52 28 Q48 16 32 12 Q16 16 12 28Z`} fill={color}/>
      {/* Eyes */}
      <circle cx="24" cy="32" r="5" fill="white"/>
      <circle cx="40" cy="32" r="5" fill="white"/>
      <circle cx="25" cy="33" r="2.5" fill="#3A2A1E"/>
      <circle cx="41" cy="33" r="2.5" fill="#3A2A1E"/>
      <circle cx="26" cy="31.5" r="1" fill="white"/>
      <circle cx="42" cy="31.5" r="1" fill="white"/>
      {/* Smile */}
      <path d="M26 40 Q32 45 38 40" stroke="#D4907A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="19" cy="38" rx="5" ry="3" fill="#FFB3C8" opacity="0.5"/>
      <ellipse cx="45" cy="38" rx="5" ry="3" fill="#FFB3C8" opacity="0.5"/>
      {/* Emoji label */}
      <text x="32" y="60" textAnchor="middle" fontSize="10">{emoji}</text>
    </svg>
  );
}

export default function PersonalityPreview() {
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
    <section ref={ref} id="personalities" style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #FFF5FB 0%, #F5EEFF 100%)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Personality System</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Tomodachi Life{' '}
            <span style={{ background: 'linear-gradient(135deg, #C77DFF, #FF5AA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Personalities
            </span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8 }}>
            Every Mii in Tomodachi Life has one of <strong style={{ color: 'var(--color-text)' }}>16 unique personality types</strong> that shape their behavior, speech, and relationships on the island.
          </p>
        </div>

        {/* Personality Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2.5rem',
        }} className="personality-grid">
          {personalities.map((p, i) => (
            <div
              key={i}
              style={{
                background: p.bg,
                border: `1.5px solid ${p.color}44`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem 1rem',
                textAlign: 'center',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: `opacity 450ms ease ${i * 60}ms, transform 450ms var(--bounce) ${i * 60}ms`,
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-5px) scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 28px ${p.color}33`;
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <MiiFace color={p.color} emoji={p.emoji} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: p.color, marginBottom: '0.3rem' }}>
                {p.name}
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>
            Showing 8 of 16 Tomodachi Life personality types
          </p>
          <Link href="/tomodachi-life-personalities" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            View All 16 Tomodachi Life Personalities
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .personality-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .personality-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
