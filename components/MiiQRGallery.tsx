'use client';

import { useEffect, useMemo, useState } from 'react';
import SiteIcon from '@/components/SiteIcons';

type Filter = 'All' | 'Nintendo' | 'Anime' | 'Celebrity' | 'Community' | 'Game';

interface MiiIdea {
  id: string;
  name: string;
  category: Exclude<Filter, 'All'>;
  platform: '3DS QR' | 'Living the Dream' | 'Both';
  personality: string;
  tags: string[];
  color: string;
  bg: string;
}

const favoriteKey = 'tomodachi-favorite-mii-ideas';

const filters: Filter[] = ['All', 'Nintendo', 'Anime', 'Celebrity', 'Community', 'Game'];

const ideas: MiiIdea[] = [
  { id: 'mario', name: 'Mario-style Hero', category: 'Nintendo', platform: 'Both', personality: 'Outgoing Go-Getter', tags: ['classic', 'friendly', 'red outfit'], color: '#F43F5E', bg: '#FFF5F5' },
  { id: 'link', name: 'Quiet Green Adventurer', category: 'Nintendo', platform: 'Both', personality: 'Independent Lone Ranger', tags: ['fantasy', 'calm', 'green outfit'], color: '#6BCB77', bg: '#EDFFF0' },
  { id: 'kirby', name: 'Pink Food Fan', category: 'Nintendo', platform: '3DS QR', personality: 'Easygoing Dreamer', tags: ['cute', 'food', 'soft voice'], color: '#FF71CE', bg: '#FFF0F8' },
  { id: 'detective', name: 'Famous Detective', category: 'Anime', platform: '3DS QR', personality: 'Independent Thinker', tags: ['smart', 'serious', 'mystery'], color: '#4BBFD6', bg: '#EFF9FF' },
  { id: 'idol', name: 'Stage Idol', category: 'Anime', platform: 'Living the Dream', personality: 'Outgoing Entertainer', tags: ['music', 'stage', 'bright room'], color: '#C77DFF', bg: '#F5EEFF' },
  { id: 'actor', name: 'Movie Star Neighbor', category: 'Celebrity', platform: 'Both', personality: 'Confident Leader', tags: ['famous', 'polished', 'dramatic'], color: '#FF9F51', bg: '#FFF5EE' },
  { id: 'chef', name: 'Island Chef', category: 'Community', platform: 'Living the Dream', personality: 'Easygoing Flatterer', tags: ['food', 'kind', 'cozy room'], color: '#FFD93D', bg: '#FFFBEE' },
  { id: 'racer', name: 'Arcade Racer', category: 'Game', platform: '3DS QR', personality: 'Confident Sassy', tags: ['fast', 'bold', 'sporty'], color: '#F43F5E', bg: '#FFF5F5' },
  { id: 'wizard', name: 'Tiny Wizard', category: 'Game', platform: 'Both', personality: 'Easygoing Dreamer', tags: ['magic', 'weird', 'purple room'], color: '#8B3FC5', bg: '#F5EEFF' },
];

function PatternCard({ idea, saved, onToggle }: { idea: MiiIdea; saved: boolean; onToggle: () => void }) {
  const seed = idea.name.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
  const cells = Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 6 }, (_, col) => ((seed + row * 7 + col * 11) % 5) > 1)
  );

  return (
    <article style={{ background: idea.bg, border: `1.5px solid ${idea.color}44`, borderRadius: 'var(--radius-lg)', padding: '1rem', display: 'flex', flexDirection: 'column', minHeight: '100%', transition: 'transform 180ms ease, box-shadow 180ms ease' }} className="mii-idea-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.9rem' }}>
        <div style={{ width: '82px', height: '82px', borderRadius: '18px', background: 'white', border: `1.5px solid ${idea.color}33`, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" aria-label={`${idea.name} idea pattern`} role="img">
            <rect width="62" height="62" rx="12" fill="white" />
            {cells.map((row, r) =>
              row.map((filled, c) =>
                filled ? <rect key={`${r}-${c}`} x={7 + c * 8} y={7 + r * 8} width="6" height="6" rx="1.5" fill={idea.color} opacity={r < 2 && c < 2 ? 1 : 0.65} /> : null
              )
            )}
            <circle cx="31" cy="31" r="11" fill={`${idea.color}22`} stroke={`${idea.color}55`} />
            <circle cx="28" cy="30" r="1.6" fill="#2D2844" />
            <circle cx="34" cy="30" r="1.6" fill="#2D2844" />
            <path d="M27 35c2.4 2 5.6 2 8 0" stroke="#2D2844" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
        <button
          type="button"
          onClick={onToggle}
          aria-label={saved ? `Remove ${idea.name} from favorites` : `Save ${idea.name} to favorites`}
          style={{ width: '38px', height: '38px', borderRadius: '50%', border: `1.5px solid ${saved ? idea.color : 'var(--color-border)'}`, background: saved ? 'white' : 'rgba(255,255,255,0.75)', color: saved ? idea.color : 'var(--color-text-muted)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
        >
          <SiteIcon name="star" size={18} fill={saved ? idea.color : 'none'} />
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.65rem' }}>
        <span className="pill" style={{ background: 'white', color: idea.color, border: `1px solid ${idea.color}44`, fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>{idea.category}</span>
        <span className="pill" style={{ background: 'white', color: 'var(--color-text-muted)', border: '1px solid var(--color-border)', fontSize: '0.7rem', padding: '0.2rem 0.55rem' }}>{idea.platform}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '0.4rem' }}>{idea.name}</h3>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '0.8rem' }}>
        Personality idea: <strong style={{ color: idea.color }}>{idea.personality}</strong>
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto' }}>
        {idea.tags.map((tag) => (
          <span key={tag} style={{ background: 'rgba(255,255,255,0.78)', color: 'var(--color-text-muted)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '999px', padding: '0.16rem 0.5rem', fontSize: '0.7rem', fontWeight: 700 }}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function MiiQRGallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(favoriteKey);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      setFavorites({});
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(favoriteKey, JSON.stringify(favorites));
  }, [favorites, ready]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ideas.filter((idea) => {
      const matchesFilter = activeFilter === 'All' || idea.category === activeFilter;
      const matchesQuery =
        !normalizedQuery ||
        idea.name.toLowerCase().includes(normalizedQuery) ||
        idea.personality.toLowerCase().includes(normalizedQuery) ||
        idea.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  const savedCount = Object.values(favorites).filter(Boolean).length;

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="mii-idea-gallery" style={{ padding: '4rem 0', background: '#FFFEF5', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div style={{ maxWidth: '620px' }}>
            <div className="section-label">Interactive Browser</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 700, marginBottom: '0.65rem' }}>
              Browse Mii Ideas Before You Scan
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.93rem' }}>
              Filter character ideas, save favorites in this browser, then use the guide below to find or recreate the right Mii.
            </p>
          </div>
          <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '0.85rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-text-muted)', fontWeight: 700 }}>
            <SiteIcon name="star" size={18} style={{ color: '#FF9F51' }} />
            Saved: {savedCount}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem' }} className="gallery-toolbar">
          <label style={{ position: 'relative', display: 'block' }}>
            <SiteIcon name="search" size={18} style={{ position: 'absolute', left: '0.95rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-light)' }} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by character idea, personality, or tag"
              style={{ width: '100%', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '0.8rem 1rem 0.8rem 2.65rem', fontFamily: 'inherit', fontSize: '0.92rem', outline: 'none', background: 'white' }}
            />
          </label>
          <button type="button" onClick={() => { setQuery(''); setActiveFilter('All'); }} className="btn-secondary" style={{ fontSize: '0.85rem', padding: '0.72rem 1rem' }}>
            Clear
          </button>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.4rem' }}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              style={{
                border: `1.5px solid ${activeFilter === filter ? 'var(--color-pink-light)' : 'var(--color-border)'}`,
                background: activeFilter === filter ? '#FFE8F7' : 'white',
                color: activeFilter === filter ? 'var(--color-pink-dark)' : 'var(--color-text-muted)',
                borderRadius: 'var(--radius-full)',
                padding: '0.48rem 0.85rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="mii-gallery-grid">
          {filtered.map((idea) => (
            <PatternCard key={idea.id} idea={idea} saved={Boolean(favorites[idea.id])} onToggle={() => toggleFavorite(idea.id)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2.5rem', background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', color: 'var(--color-text-muted)' }}>
            No matching Mii ideas yet. Try a different category or shorter search.
          </div>
        )}

        <p style={{ marginTop: '1rem', color: 'var(--color-text-light)', fontSize: '0.78rem', lineHeight: 1.6 }}>
          These are browsing and planning cards, not official QR code files. Use them to decide what to scan, search for, or recreate in Mii Maker.
        </p>
      </div>

      <style>{`
        .mii-idea-card:hover { transform: translateY(-3px); box-shadow: 0 8px 26px rgba(0,0,0,0.08); }
        @media (max-width: 900px) {
          .mii-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-toolbar { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .mii-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
