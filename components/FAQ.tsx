'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What are the latest Titan Fishing codes?',
    a: 'The latest active codes are: TITANLAUNCH (1,000 Cash + Rod Skin), FREECASH2026 (500 Cash), NEONFISH (Rod Skin), and CYBERLURE (750 Cash). Check our codes section above — we update daily!',
  },
  {
    q: 'How do I redeem codes in Titan Fishing?',
    a: 'Launch the game on Roblox, click the Twitter/Codes icon on the left side of the screen, type your code in the input box, and press Redeem. Codes are case-sensitive, so copy them carefully.',
  },
  {
    q: 'What is the best rod in Titan Fishing?',
    a: 'The top-tier rods are in the SSS category. As a beginner, focus on S-tier rods first. Use the in-game money (Cash) to upgrade and aim for the Titan Rod for maximum catch rates on legendary fish.',
  },
  {
    q: 'How do Skill Books work in Titan Fishing?',
    a: 'Skill Books are obtained through a Gacha system purchasable with in-game Cash. Each book grants a passive skill that enhances your fishing power, catch speed, or money earnings. Roll for rare skills to build strong loadouts.',
  },
  {
    q: 'How do I catch legendary fish?',
    a: 'Navigate to high-level deep-sea zones and use higher-tier rods. When a titan fish appears, tap/click rapidly to drain its HP bar before the timer runs out. Skill Books that increase damage significantly help.',
  },
  {
    q: 'Is Titan Fishing free to play?',
    a: 'Yes! Titan Fishing is completely free to play on Roblox. Robux (premium currency) can unlock cosmetics but is not required to progress. Using our codes gives you a head start for free.',
  },
  {
    q: 'Where is the best spot to farm money?',
    a: 'High-level zones spawn bigger fish with better Cash rewards. Once you unlock mid-tier rods, farm the deep-sea zones repeatedly. Using Skill Books with money-boost passives can triple your earnings.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        padding: '6rem 0',
        borderTop: '1px solid rgba(124,58,237,0.15)',
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left sticky */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-cta)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              Got Questions?
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                background: 'linear-gradient(135deg, #fff 30%, #A78BFA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem',
                lineHeight: 1.2,
              }}
            >
              Titan Fishing FAQ
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Everything you need to know about codes, gameplay, and progression in Titan Fishing Roblox.
            </p>
            <a href="#codes" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
              🎁 Get Free Codes
            </a>
          </div>

          {/* Right: FAQ accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '0',
                  overflow: 'hidden',
                  borderColor: openIndex === i ? 'rgba(124,58,237,0.6)' : 'rgba(124,58,237,0.2)',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      color: openIndex === i ? 'var(--color-accent)' : 'var(--color-text)',
                      lineHeight: 1.4,
                      transition: 'color 200ms ease',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: 'var(--color-primary-light)',
                      fontSize: '1.2rem',
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 300ms ease',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                  }}
                >
                  <p
                    style={{
                      padding: '0 1.5rem 1.25rem',
                      color: 'var(--color-text-muted)',
                      lineHeight: 1.8,
                      fontSize: '0.95rem',
                    }}
                  >
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
          #faq .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
