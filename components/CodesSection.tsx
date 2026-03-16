'use client';

import { useState, useEffect } from 'react';

const redeemSteps = [
  { step: '1', text: 'Launch Titan Fishing on Roblox' },
  { step: '2', text: 'Click the Twitter/Codes icon on the left side' },
  { step: '3', text: 'Enter the code and press Redeem' },
];

interface CodeItem {
  code: string;
  reward: string;
  status: 'active' | 'expired';
  added: string;
}

export default function CodesSection() {
  const [codes, setCodes] = useState<CodeItem[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('active');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/codes.json')
      .then((res) => res.json())
      .then((data) => {
        setCodes(data.codes);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load codes:', err);
        setLoading(false);
      });
  }, []);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch {
      // fallback
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  const filteredCodes = codes.filter((c) =>
    filter === 'all' ? true : c.status === filter
  );

  return (
    <section id="codes" style={{ padding: '6rem 0', position: 'relative' }}>
      {/* 背景装饰 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--color-cta)',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
            }}
          >
            Updated Daily
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              background: 'linear-gradient(135deg, #fff 30%, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
            }}
          >
            Titan Fishing Codes 2026
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto', fontSize: '1.05rem' }}>
            All active Roblox Titan Fishing redeem codes. Click any code to copy instantly!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Codes List */}
          <div>
            {/* Filter Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                background: 'rgba(124,58,237,0.08)',
                borderRadius: '50px',
                padding: '4px',
                border: '1px solid rgba(124,58,237,0.2)',
                width: 'fit-content',
              }}
            >
              {(['active', 'expired', 'all'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.8rem',
                    padding: '0.4rem 1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    textTransform: 'capitalize',
                    background: filter === f ? 'var(--color-primary)' : 'transparent',
                    color: filter === f ? 'white' : 'var(--color-text-muted)',
                    transition: 'all 200ms ease',
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Codes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredCodes.map((item) => (
                <div
                  key={item.code}
                  className="glass-card"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    opacity: item.status === 'expired' ? 0.5 : 1,
                    cursor: item.status === 'active' ? 'pointer' : 'default',
                  }}
                  onClick={() => item.status === 'active' && handleCopy(item.code)}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        color: item.status === 'active' ? 'var(--color-accent)' : 'var(--color-text-muted)',
                        letterSpacing: '0.1em',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.code}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      🎁 {item.reward}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
                    {item.status === 'active' ? (
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(item.code); }}
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.75rem',
                          padding: '0.35rem 0.9rem',
                          background: copiedCode === item.code ? 'var(--color-primary)' : 'transparent',
                          border: `1px solid ${copiedCode === item.code ? 'var(--color-primary)' : 'var(--color-accent)'}`,
                          color: copiedCode === item.code ? 'white' : 'var(--color-accent)',
                          borderRadius: '50px',
                          cursor: 'pointer',
                          transition: 'all 200ms ease',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {copiedCode === item.code ? '✓ Copied!' : 'Copy'}
                      </button>
                    ) : (
                      <span style={{ fontSize: '0.7rem', color: 'var(--color-cta)', fontFamily: 'var(--font-display)' }}>
                        EXPIRED
                      </span>
                    )}
                    <span style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.5)' }}>
                      {item.added}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: How to Redeem */}
          <div>
            <div
              className="glass-card"
              style={{ padding: '2rem', marginBottom: '1.5rem' }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  color: 'var(--color-text)',
                  marginBottom: '1.5rem',
                }}
              >
                🎮 How to Redeem Codes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {redeemSteps.map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        minWidth: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        color: 'white',
                        boxShadow: '0 0 15px rgba(124,58,237,0.5)',
                      }}
                    >
                      {s.step}
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, paddingTop: '0.4rem' }}>
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips box */}
            <div
              style={{
                background: 'rgba(244,63,94,0.08)',
                border: '1px solid rgba(244,63,94,0.3)',
                borderRadius: '12px',
                padding: '1.25rem',
              }}
            >
              <p style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cta)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                💡 PRO TIPS
              </p>
              <ul style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', paddingLeft: '1rem', lineHeight: 1.9 }}>
                <li>Codes are case-sensitive — copy exactly</li>
                <li>Each code can only be used once per account</li>
                <li>Bookmark this page for daily updates!</li>
                <li>Join our Discord for code alerts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #codes .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
