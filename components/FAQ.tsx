'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is Tomodachi Life?',
    a: 'Tomodachi Life is a life simulation game developed by Nintendo for the Nintendo 3DS. In Tomodachi Life, you populate an island apartment building with Mii characters, watch them interact, build relationships, and live out quirky daily lives. It was originally released in Japan in 2013 and worldwide in 2014.',
  },
  {
    q: 'What is Tomodachi Life: Living the Dream?',
    a: 'Tomodachi Life: Living the Dream is the enhanced sequel released for Nintendo Switch in 2026. It includes all the original Tomodachi Life gameplay with new features, improved graphics, online connectivity, and expanded relationship mechanics. You can also play it via emulator on PC using ROM or NSP files.',
  },
  {
    q: 'How many personality types are in Tomodachi Life?',
    a: 'Tomodachi Life features 16 unique personality types, divided into Easy-going, Independent, Outgoing, and Confident categories. Each Tomodachi Life personality type affects how your Mii behaves, their speech patterns, hobbies, and how they relate to other islanders. See our full Tomodachi Life personality chart for details.',
  },
  {
    q: 'How do Mii QR codes work in Tomodachi Life?',
    a: 'Tomodachi Life QR codes let you scan and import pre-made Mii characters directly into your island. Open the Mii Maker app, select "QR Code/Image Options," then scan any Tomodachi Life Mii QR code. You can find thousands of community Mii QR codes — celebrities, anime characters, and more — in our QR codes collection.',
  },
  {
    q: 'Is Tomodachi Life available on Nintendo Switch?',
    a: 'The original Tomodachi Life is a Nintendo 3DS exclusive and is not available on Switch. However, Tomodachi Life: Living the Dream was released for Nintendo Switch in 2026. You can also play the original Tomodachi Life on Switch using a 3DS emulator, or via the Living the Dream NSP format.',
  },
  {
    q: 'How do I play Tomodachi Life on PC?',
    a: 'To play Tomodachi Life on PC, you need a 3DS emulator such as Citra and a Tomodachi Life ROM file. For Tomodachi Life: Living the Dream, use Ryujinx or Yuzu with the NSP or ROM file. See our dedicated Tomodachi Life PC guide and Living the Dream emulator guide for full step-by-step setup instructions.',
  },
  {
    q: 'What is Tomodachi Life 2?',
    a: 'Tomodachi Life 2 is the rumored next installment in the Tomodachi Life series. While Nintendo has not officially confirmed Tomodachi Life 2, community speculation points to a Switch 2 release. Visit our Tomodachi Life 2 page for the latest confirmed news and rumors.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '4rem', alignItems: 'start' }} className="faq-grid">

          {/* Left sticky */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="section-label">Got Questions?</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Tomodachi Life{' '}
              <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                FAQ
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              Everything you need to know about Tomodachi Life — personalities, QR codes, platforms, and the Living the Dream guide.
            </p>

            {/* Quick links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <Link href="/tomodachi-life-personalities" className="pill pill-purple" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Personality Chart
              </Link>
              <Link href="/tomodachi-life-living-the-dream" className="pill pill-pink" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Living the Dream Guide
              </Link>
              <Link href="/tomodachi-life-qr-codes" className="pill pill-blue" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Mii QR Codes
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: openIndex === i ? '#FFF0F8' : 'white',
                  border: `1.5px solid ${openIndex === i ? 'var(--color-pink-light)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all 250ms ease',
                  boxShadow: openIndex === i ? '0 4px 20px rgba(255,113,206,0.12)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.1rem 1.4rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                  aria-expanded={openIndex === i}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: openIndex === i ? 'var(--color-pink-dark)' : 'var(--color-text)',
                    lineHeight: 1.4,
                    transition: 'color 200ms ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: openIndex === i ? 'var(--color-pink)' : 'var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 250ms ease',
                  }}>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={openIndex === i ? 'white' : 'var(--color-text-muted)'}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 250ms ease' }}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>
                <div style={{
                  maxHeight: openIndex === i ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 300ms ease',
                }}>
                  <p style={{
                    padding: '0 1.4rem 1.25rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.85,
                    fontSize: '0.92rem',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
