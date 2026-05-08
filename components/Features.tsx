'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Mii Characters',
    desc: 'Create and customize Mii characters that live in your Tomodachi Life island apartment building, each with their own personality, hobbies, and relationships.',
    color: '#FF71CE',
    bg: '#FFF0F8',
    border: '#FFB3E3',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Relationships & Drama',
    desc: 'Watch your Tomodachi Life islanders form friendships, fall in love, fight, and make up. Every Mii has their own social story that evolves over time.',
    color: '#F43F5E',
    bg: '#FFF5F5',
    border: '#FFC0C0',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: '16 Personality Types',
    desc: 'Each Tomodachi Life Mii is assigned one of 16 unique personality types — from Easy-going to Outgoing — which shapes how they interact with other islanders.',
    color: '#C77DFF',
    bg: '#F5EEFF',
    border: '#E0C0FF',
    link: '/tomodachi-life-personalities',
    linkLabel: 'See all personalities →',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Mini-Games & Events',
    desc: 'Tomodachi Life is packed with quirky mini-games, news broadcasts, concerts, and random island events that keep everyday life fresh and unpredictable.',
    color: '#FFD93D',
    bg: '#FFFBEE',
    border: '#FFE88A',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"/>
      </svg>
    ),
    title: 'QR Code Sharing',
    desc: 'Scan Mii QR codes in Tomodachi Life to invite celebrity lookalikes, friends, or famous Miis to your island. Share your island\'s Miis with the community.',
    color: '#7DD8E8',
    bg: '#F0FAFF',
    border: '#B8EDF5',
    link: '/tomodachi-life-qr-codes',
    linkLabel: 'Browse QR codes →',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Multi-Platform',
    desc: 'Play Tomodachi Life on Nintendo 3DS or experience Tomodachi Life: Living the Dream on Switch. Emulator options also available for PC play.',
    color: '#6BCB77',
    bg: '#F0FFF4',
    border: '#AEEAB6',
    link: '/tomodachi-life-switch',
    linkLabel: 'Platform guide →',
  },
];

const guides = [
  {
    title: 'Complete Personality Guide',
    desc: 'Master all 16 Tomodachi Life personality types with our full chart and in-depth trait breakdowns.',
    tag: 'Personalities',
    tagColor: '#C77DFF',
    tagBg: '#F5EEFF',
    href: '/tomodachi-life-personalities',
  },
  {
    title: 'Living the Dream Full Walkthrough',
    desc: 'Everything you need to know about Tomodachi Life: Living the Dream — setup, emulators, NSP & ROM.',
    tag: 'Living the Dream',
    tagColor: '#FF5AA5',
    tagBg: '#FFE8F7',
    href: '/tomodachi-life-living-the-dream',
  },
  {
    title: 'Mii QR Codes Collection',
    desc: 'Hundreds of Tomodachi Life Mii QR codes — celebrities, anime characters, and fan favorites ready to scan.',
    tag: 'QR Codes',
    tagColor: '#4BBFD6',
    tagBg: '#E8F8FF',
    href: '/tomodachi-life-qr-codes',
  },
];

export default function Features() {
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
    <>
      {/* Features Section */}
      <section
        ref={ref}
        id="features"
        style={{ padding: '5rem 0', background: 'linear-gradient(180deg, var(--color-bg) 0%, #FFF5FB 100%)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label">What Makes Tomodachi Life Special</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
              <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Life on Your Island
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.8 }}>
              Tomodachi Life is Nintendo's quirky life simulation game where your Mii characters live, love, and laugh on a colorful island.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }} className="features-grid">
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: f.bg,
                  border: `1.5px solid ${f.border}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 500ms ease ${i * 80}ms, transform 500ms var(--bounce) ${i * 80}ms`,
                  cursor: f.link ? 'pointer' : 'default',
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'white',
                  border: `1.5px solid ${f.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: f.color,
                  marginBottom: '1.1rem',
                  boxShadow: `0 2px 12px ${f.color}22`,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.6rem' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: f.link ? '1rem' : 0 }}>
                  {f.desc}
                </p>
                {f.link && (
                  <Link
                    href={f.link}
                    style={{ color: f.color, fontSize: '0.875rem', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    onMouseOver={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                    onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
                  >
                    {f.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" style={{ padding: '5rem 0', background: '#FFF5FB' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label">Top Resources</div>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700 }}>
                Popular Tomodachi Life Guides
              </h2>
            </div>
            <Link href="/tomodachi-life-personalities" className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              View All Guides →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="guides-grid">
            {guides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  className="card"
                  style={{
                    padding: '1.75rem',
                    height: '100%',
                    cursor: 'pointer',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 500ms ease ${300 + i * 100}ms, transform 500ms var(--bounce) ${300 + i * 100}ms`,
                  }}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <span className="pill" style={{ background: g.tagBg, color: g.tagColor, border: 'none' }}>
                      {g.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {g.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                    {g.desc}
                  </p>
                  <div style={{ marginTop: '1.25rem', color: g.tagColor, fontSize: '0.875rem', fontFamily: 'var(--font-display)', fontWeight: 600 }}>
                    Read Guide →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .guides-grid   { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .guides-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
