'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteIcon, { type SiteIconName } from '@/components/SiteIcons';

interface ChecklistItem {
  id: string;
  title: string;
  detail: string;
  icon: SiteIconName;
}

interface ChecklistGroup {
  title: string;
  color: string;
  bg: string;
  items: ChecklistItem[];
}

const storageKey = 'tomodachi-island-checklist';

const groups: ChecklistGroup[] = [
  {
    title: 'Start the Island',
    color: '#FF71CE',
    bg: '#FFF0F8',
    items: [
      { id: 'create-first-mii', title: 'Create your first Mii', detail: 'Pick a personality, voice, and room style before adding more residents.', icon: 'user' },
      { id: 'add-ten-miis', title: 'Add 10 residents', detail: 'A fuller apartment creates more relationships, drama, and daily moments.', icon: 'users' },
      { id: 'set-personalities', title: 'Balance personality types', detail: 'Mix Easy-going, Independent, Outgoing, and Confident Miis.', icon: 'chart' },
    ],
  },
  {
    title: 'Make It Active',
    color: '#4BBFD6',
    bg: '#EFF9FF',
    items: [
      { id: 'scan-qr', title: 'Scan or save QR ideas', detail: 'Collect character ideas before you open the game so setup is faster.', icon: 'qr' },
      { id: 'take-photo', title: 'Take a Foto-Tomo style shot', detail: 'Capture one funny island moment and use it as a memory prompt.', icon: 'camera' },
      { id: 'decorate-room', title: 'Redecorate one room', detail: 'A small visual change gives you a reason to revisit the apartment.', icon: 'home' },
    ],
  },
  {
    title: 'Keep Returning',
    color: '#6BCB77',
    bg: '#EDFFF0',
    items: [
      { id: 'check-relationships', title: 'Check relationships', detail: 'Look for friendship changes, conflicts, and new pairings.', icon: 'heart' },
      { id: 'try-local-play', title: 'Prepare a local play share', detail: 'Choose a Mii or creation you would want to exchange nearby.', icon: 'wifi' },
      { id: 'plan-next-mii', title: 'Plan your next Mii', detail: 'Use a new personality result or QR category to pick the next resident.', icon: 'sparkle' },
    ],
  },
];

const dailyIdeas = [
  'Create one Mii based on a friend, then give them the opposite personality you expected.',
  'Pick two residents who rarely interact and give them similar room styles.',
  'Build a mini theme: one musician, one troublemaker, one calm neighbor, one wildcard.',
  'Choose a QR category and save three character ideas for your next island session.',
  'Take one screenshot-worthy moment and write down what made it funny.',
  'Review your residents and change one personality to create a new social dynamic.',
];

function getTodayIndex() {
  const day = Math.floor(Date.now() / 86400000);
  return day % dailyIdeas.length;
}

export default function IslandChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      setChecked({});
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked, ready]);

  const allItems = groups.flatMap((group) => group.items);
  const doneCount = allItems.filter((item) => checked[item.id]).length;
  const progress = Math.round((doneCount / allItems.length) * 100);
  const dailyIdea = useMemo(() => dailyIdeas[getTodayIndex()], []);

  const toggleItem = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reset = () => setChecked({});

  return (
    <section id="island-checklist" style={{ padding: '4.5rem 0', background: 'white', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: '620px' }}>
            <div className="section-label">Return Visit Tool</div>
            <h2 style={{ fontSize: 'clamp(1.55rem, 3vw, 2.35rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
              Island Setup Checklist
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Save a simple progress list in this browser and come back when your island needs its next small upgrade.
            </p>
          </div>
          <div style={{ minWidth: '220px', background: '#FFFEF5', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>Progress</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-pink-dark)' }}>{doneCount}/{allItems.length}</span>
            </div>
            <div style={{ height: '9px', background: '#F5EEFF', borderRadius: '999px', overflow: 'hidden' }}>
              <div style={{ width: `${progress}%`, height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg, #FF71CE, #6BCB77)', transition: 'width 250ms ease' }} />
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '1.25rem', alignItems: 'start' }} className="checklist-layout">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="checklist-grid">
            {groups.map((group) => (
              <div key={group.title} style={{ background: group.bg, border: `1.5px solid ${group.color}44`, borderRadius: 'var(--radius-lg)', padding: '1rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: group.color, fontSize: '1rem', marginBottom: '0.75rem' }}>
                  {group.title}
                </h3>
                <div style={{ display: 'grid', gap: '0.55rem' }}>
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        gap: '0.7rem',
                        padding: '0.8rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1.5px solid ${checked[item.id] ? group.color : 'rgba(255,255,255,0.8)'}`,
                        background: checked[item.id] ? 'white' : 'rgba(255,255,255,0.7)',
                        color: 'var(--color-text)',
                        cursor: 'pointer',
                        transition: 'border-color 180ms ease, background 180ms ease, transform 180ms ease',
                        fontFamily: 'inherit',
                      }}
                    >
                      <span style={{ width: '30px', height: '30px', borderRadius: '10px', background: checked[item.id] ? group.color : 'white', color: checked[item.id] ? 'white' : group.color, border: `1px solid ${group.color}44`, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <SiteIcon name={checked[item.id] ? 'check' : item.icon} size={16} strokeWidth={2.4} />
                      </span>
                      <span>
                        <span style={{ display: 'block', fontWeight: 800, fontSize: '0.86rem', marginBottom: '0.18rem', textDecoration: checked[item.id] ? 'line-through' : 'none' }}>{item.title}</span>
                        <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.76rem', lineHeight: 1.45 }}>{item.detail}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside style={{ background: 'linear-gradient(135deg, #FFF0F8, #EFF9FF)', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.3rem', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '16px', background: 'white', color: '#FF5AA5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid var(--color-pink-light)' }}>
              <SiteIcon name="sparkle" size={22} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.55rem' }}>
              Today on the Island
            </h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.9rem', marginBottom: '1rem' }}>
              {dailyIdea}
            </p>
            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-qr-codes" className="btn-primary" style={{ fontSize: '0.86rem', padding: '0.65rem 1rem' }}>
                Find Mii Ideas
              </Link>
              <button type="button" onClick={reset} className="btn-secondary" style={{ fontSize: '0.86rem', padding: '0.65rem 1rem' }}>
                Reset List
              </button>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 1020px) {
          .checklist-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 820px) {
          .checklist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
