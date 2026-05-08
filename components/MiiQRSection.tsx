'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// Inline SVG QR code patterns (stylized, not real scannable codes — decorative)
function QRCard({ name, type, color, bg }: { name: string; type: string; color: string; bg: string }) {
  // Generate a deterministic dot pattern from the name
  const seed = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const cells: boolean[][] = Array.from({ length: 7 }, (_, row) =>
    Array.from({ length: 7 }, (_, col) => {
      // Keep corner finder patterns always filled
      if ((row < 2 && col < 2) || (row < 2 && col > 4) || (row > 4 && col < 2)) return true;
      return ((seed * (row + 1) * (col + 1) * 31) % 17) > 7;
    })
  );

  return (
    <div style={{
      background: bg,
      border: `1.5px solid ${color}44`,
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem',
      textAlign: 'center',
      transition: 'all 250ms var(--bounce)',
      cursor: 'pointer',
    }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 24px ${color}25`;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
      }}
    >
      {/* Stylized QR Code SVG */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label={`Mii QR code for ${name}`}>
          <rect width="80" height="80" rx="10" fill="white"/>
          <rect x="4" y="4" width="72" height="72" rx="8" fill="white" stroke={`${color}22`} strokeWidth="1"/>
          {/* QR dots grid */}
          {cells.map((row, r) =>
            row.map((filled, c) =>
              filled ? (
                <rect
                  key={`${r}-${c}`}
                  x={8 + c * 10}
                  y={8 + r * 10}
                  width="8"
                  height="8"
                  rx="2"
                  fill={r < 2 && c < 2 ? color : r < 2 && c > 4 ? color : r > 4 && c < 2 ? color : `${color}BB`}
                />
              ) : null
            )
          )}
          {/* Center Mii face */}
          <circle cx="40" cy="40" r="14" fill="white" stroke={`${color}33`} strokeWidth="1"/>
          <circle cx="40" cy="40" r="12" fill={`${color}15`}/>
          <circle cx="40" cy="39" r="8" fill="#FFECD2"/>
          <path d={`M33 36 Q40 30 47 36`} fill={color}/>
          <circle cx="37" cy="39" r="2" fill="#3A2A1E"/>
          <circle cx="43" cy="39" r="2" fill="#3A2A1E"/>
          <path d="M37 43 Q40 46 43 43" stroke="#D4907A" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: color, marginBottom: '0.2rem' }}>
        {name}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{type}</div>
    </div>
  );
}

const qrCards = [
  { name: 'Mario', type: 'Nintendo Character', color: '#F43F5E', bg: '#FFF5F5' },
  { name: 'Link', type: 'Nintendo Character', color: '#6BCB77', bg: '#EDFFF0' },
  { name: 'Samus', type: 'Nintendo Character', color: '#FF9F51', bg: '#FFF5EE' },
  { name: 'Custom Mii', type: 'Community Made', color: '#C77DFF', bg: '#F5EEFF' },
  { name: 'Pikachu', type: 'Pokémon Character', color: '#FFD93D', bg: '#FFFBEE' },
  { name: 'Kirby', type: 'Nintendo Character', color: '#FF71CE', bg: '#FFF0F8' },
];

export default function MiiQRSection() {
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
    <section ref={ref} id="qr-codes" style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'center' }} className="qr-grid">

          {/* Left: text */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-24px)', transition: 'all 600ms ease' }}>
            <div className="section-label">Mii QR Codes</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Tomodachi Life{' '}
              <span style={{ background: 'linear-gradient(135deg, #7DD8E8, #6BCB77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                QR Codes
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Import your favorite characters directly into Tomodachi Life using <strong style={{ color: 'var(--color-text)' }}>Mii QR codes</strong>. Scan any QR code through the Mii Maker app to add celebrities, game characters, and community Miis to your island instantly.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Our collection includes Nintendo characters, celebrity lookalikes, anime Miis, and hundreds of fan-made Tomodachi Life QR codes — all free to scan.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                { icon: '📱', text: 'Open Mii Maker on your 3DS or Switch' },
                { icon: '📷', text: 'Select QR Code / Image Options' },
                { icon: '✅', text: 'Scan any Tomodachi Life Mii QR code' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#F0FAFF', border: '1px solid #B8EDF5', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: '1.2rem' }}>{step.icon}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 500 }}>{step.text}</span>
                </div>
              ))}
            </div>

            <Link href="/tomodachi-life-qr-codes" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3"/></svg>
              Browse All Mii QR Codes
            </Link>
          </div>

          {/* Right: QR grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(24px)',
            transition: 'all 600ms ease 200ms',
          }}>
            {qrCards.map((card, i) => (
              <QRCard key={i} {...card} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .qr-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
