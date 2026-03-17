'use client';

import { useState, useEffect } from 'react';

interface Skill {
  id: string;
  name: string;
  tier: string;
  category: string;
  description: string;
  stats: {
    Power: number;
    Luck: number;
    Speed: number;
  };
  icon: string;
}

export default function SkillsSection() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/skills.json')
      .then((res) => res.json())
      .then((data) => {
        setSkills(data.skills);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load skills:', err);
        setLoading(false);
      });
  }, []);

  const tiers = ['S', 'A', 'B', 'C'];
  const categories = ['All', 'Active', 'Passive', 'Ultimate'];

  const filteredSkills = skills.filter(
    (s) => filter === 'All' || s.category === filter
  );

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S': return '#EF4444'; // Red
      case 'A': return '#F59E0B'; // Gold
      case 'B': return '#8B5CF6'; // Purple
      case 'C': return '#10B981'; // Green
      default: return 'var(--color-text-muted)';
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section id="skills" style={{ padding: '6rem 0', background: 'rgba(10,10,22,0.3)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'var(--color-accent)',
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              background: 'rgba(167,139,250,0.1)',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: '1px solid rgba(167,139,250,0.2)',
            }}
          >
            Last Updated: {currentDate}
          </div>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              background: 'linear-gradient(135deg, #fff 40%, #00FFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1rem',
              fontWeight: 800,
            }}
          >
            Skill Tier List
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Dominate the ocean with the best skills in Titan Fishing. Our experts rank every ability based on power, luck, and speed.
          </p>
        </div>

        {/* Filters */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.75rem', 
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                background: filter === cat ? 'rgba(167,139,250,0.15)' : 'rgba(255,255,255,0.03)',
                color: filter === cat ? 'var(--color-accent)' : 'var(--color-text-muted)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
              }}
              onMouseOver={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = 'rgba(167,139,250,0.4)';
                  e.currentTarget.style.color = 'var(--color-text)';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== cat) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'var(--color-text-muted)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tiers Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {tiers.map((tier) => {
            const tierSkills = filteredSkills.filter((s) => s.tier === tier);
            if (tierSkills.length === 0) return null;

            return (
              <div key={tier} style={{ position: 'relative' }}>
                {/* Tier Indicator */}
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    marginBottom: '2rem' 
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: '3rem', 
                      fontWeight: 900, 
                      color: getTierColor(tier),
                      fontFamily: 'var(--font-display)',
                      textShadow: `0 0 20px ${getTierColor(tier)}44`,
                      lineHeight: 1
                    }}
                  >
                    {tier}
                  </div>
                  <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, ${getTierColor(tier)}88, transparent)` }} />
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {tier === 'S' ? 'Legendary / God Tier' : tier === 'A' ? 'Extremely Strong' : tier === 'B' ? 'Good / Balanced' : 'Basic / Situational'}
                  </div>
                </div>

                {/* Skills Cards */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                    gap: '1.5rem' 
                  }}
                >
                  {tierSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="glass-card"
                      style={{
                        padding: '1.5rem',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      {/* Skill Header */}
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                        <div 
                          style={{ 
                            fontSize: '2rem', 
                            width: '56px', 
                            height: '56px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.1)'
                          }}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>{skill.name}</h4>
                          <span style={{ 
                            fontSize: '0.7rem', 
                            padding: '0.2rem 0.6rem', 
                            background: 'rgba(124,58,237,0.1)', 
                            borderRadius: '4px',
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-display)',
                            textTransform: 'uppercase'
                          }}>
                            {skill.category}
                          </span>
                        </div>
                      </div>

                      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem', height: '3rem', overflow: 'hidden' }}>
                        {skill.description}
                      </p>

                      {/* Stats */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {Object.entries(skill.stats).map(([stat, value]) => (
                          <div key={stat}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.25rem', color: 'var(--color-text-muted)' }}>
                              <span>{stat}</span>
                              <span style={{ color: 'var(--color-text)' }}>{value}/100</span>
                            </div>
                            <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                              <div 
                                style={{ 
                                  height: '100%', 
                                  width: `${value}%`, 
                                  background: `linear-gradient(to right, var(--color-primary), ${getTierColor(tier)})`,
                                  boxShadow: `0 0 10px ${getTierColor(tier)}33`
                                }} 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
