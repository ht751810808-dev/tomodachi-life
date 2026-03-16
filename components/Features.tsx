'use client';

import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'Epic Battle System',
    desc: 'Tap rapidly to battle massive titan fish. The bigger the fish, the more legendary the rewards.',
    color: '#F43F5E',
  },
  {
    icon: '🎣',
    title: 'Legendary Rods',
    desc: 'Unlock tier S, SS, and SSS rods. Each rod offers unique bonuses and catch multipliers.',
    color: '#00FFFF',
  },
  {
    icon: '📚',
    title: 'Skill Book System',
    desc: 'Upgrade your skills with Skill Book Gacha. Customize your playstyle with unique passive abilities.',
    color: '#A78BFA',
  },
  {
    icon: '🌊',
    title: 'Deep Sea Zones',
    desc: 'Explore different ocean zones, each with exclusive titan fish, rare drops, and hidden secrets.',
    color: '#7C3AED',
  },
  {
    icon: '💰',
    title: 'Money Farming',
    desc: 'Master the best money-making spots. Buy premium rods and dominate the leaderboards.',
    color: '#F43F5E',
  },
  {
    icon: '🏆',
    title: 'Leaderboards',
    desc: 'Compete globally for the biggest catch. Rise to the top of the Titan Fishing leaderboard.',
    color: '#00FFFF',
  },
];

const guides = [
  {
    title: 'Beginner Guide: How to Start Titan Fishing',
    desc: 'Everything a new player needs to know — from first rod to first legendary catch.',
    tag: 'Beginner',
    tagColor: '#00FFFF',
    time: '5 min read',
  },
  {
    title: 'Rod Tier List 2026: Best Rods Ranked',
    desc: 'Complete ranking of every rod in Titan Fishing from F to SSS tier.',
    tag: 'Tier List',
    tagColor: '#F43F5E',
    time: '8 min read',
  },
  {
    title: 'Skill Book Guide: Best Builds & Strategies',
    desc: 'How to use the Gacha system and which skills are worth grinding for.',
    tag: 'Advanced',
    tagColor: '#A78BFA',
    time: '6 min read',
  },
];

export default function Features() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
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
        style={{ padding: '6rem 0', borderTop: '1px solid rgba(124,58,237,0.15)' }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
              }}
            >
              Game Features
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
              Why Titan Fishing Stands Out
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto' }}>
              Battle legendary sea monsters, unlock epic rods, and master skill systems in this unique Roblox fishing RPG.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 500ms ease ${i * 80}ms`,
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: `${f.color}22`,
                    border: `1px solid ${f.color}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.1rem',
                    color: 'var(--color-text)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section
        id="guides"
        style={{ padding: '6rem 0', borderTop: '1px solid rgba(124,58,237,0.15)' }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.2em',
                  color: 'var(--color-primary-light)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                Expert Strategies
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  background: 'linear-gradient(135deg, #fff 30%, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Titan Fishing Guides
              </h2>
            </div>
            <a href="#" className="btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              View All Guides →
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {guides.map((g, i) => (
              <article
                key={i}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.7rem',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '50px',
                      background: `${g.tagColor}22`,
                      border: `1px solid ${g.tagColor}55`,
                      color: g.tagColor,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {g.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    ⏱ {g.time}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    color: 'var(--color-text)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.3,
                  }}
                >
                  {g.title}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {g.desc}
                </p>
                <div
                  style={{
                    marginTop: '1.25rem',
                    color: 'var(--color-accent)',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Read Guide →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
