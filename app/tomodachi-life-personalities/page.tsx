import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life Personalities – All 16 Types + Personality Chart 2026',
  description: 'Complete guide to all 16 Tomodachi Life personality types. Full personality chart, trait descriptions, compatibility, and how each personality shapes your Mii\'s island life.',
  keywords: ['tomodachi life personalities', 'tomodachi life personality chart', 'tomodachi life personality types', 'tomodachi life living the dream personality chart'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-personalities' },
};

const personalities = [
  { name: 'Easygoing Flatterer', short: 'Easygoing', traits: 'Laid-back, positive, avoids conflict. Speaks softly and gives compliments freely.', color: '#6BCB77', bg: '#EDFFF0', category: 'Easy-going' },
  { name: 'Easygoing Dreamer', short: 'Dreamer', traits: 'Imaginative and whimsical. Often lost in thought, loves music and daydreaming.', color: '#7DD8E8', bg: '#EFF9FF', category: 'Easy-going' },
  { name: 'Easygoing Sociable', short: 'Sociable', traits: 'Friendly and warm. Makes friends easily and loves group activities.', color: '#FFD93D', bg: '#FFFBEE', category: 'Easy-going' },
  { name: 'Easygoing Airhead', short: 'Airhead', traits: 'Carefree and scatterbrained. Has a unique way of seeing the world.', color: '#B8EDF5', bg: '#F0FAFF', category: 'Easy-going' },
  { name: 'Independent Thinker', short: 'Thinker', traits: 'Analytical and reserved. Prefers to work alone and think deeply.', color: '#4A90D9', bg: '#EFF5FF', category: 'Independent' },
  { name: 'Independent Lone Ranger', short: 'Lone Ranger', traits: 'Self-sufficient and private. Dislikes group pressure and values personal space.', color: '#7B6E8A', bg: '#F5F0FF', category: 'Independent' },
  { name: 'Independent Cool Cat', short: 'Cool Cat', traits: 'Calm and effortlessly stylish. Appears unimpressed but has hidden depth.', color: '#5A4A9A', bg: '#EEF0FF', category: 'Independent' },
  { name: 'Independent Rebel', short: 'Rebel', traits: 'Non-conformist and bold. Challenges norms and thinks outside the box.', color: '#FF9F51', bg: '#FFF5EE', category: 'Independent' },
  { name: 'Outgoing Entertainer', short: 'Entertainer', traits: 'Loves the spotlight. Energetic, dramatic, and always seeking attention.', color: '#FF71CE', bg: '#FFF0F8', category: 'Outgoing' },
  { name: 'Outgoing Optimist', short: 'Optimist', traits: 'Cheery and upbeat. Sees the best in everything and everyone.', color: '#FFD93D', bg: '#FFFBEE', category: 'Outgoing' },
  { name: 'Outgoing Trendsetter', short: 'Trendsetter', traits: 'Fashion-forward and trend-conscious. Always up to date with the latest island style.', color: '#C77DFF', bg: '#F5EEFF', category: 'Outgoing' },
  { name: 'Outgoing Go-Getter', short: 'Go-Getter', traits: 'Driven and enthusiastic. Sets goals and pursues them with infectious energy.', color: '#F43F5E', bg: '#FFF5F5', category: 'Outgoing' },
  { name: 'Confident Leader', short: 'Leader', traits: 'Natural authority figure. Commands respect and steps up in any situation.', color: '#FF5AA5', bg: '#FFF0F8', category: 'Confident' },
  { name: 'Confident Big-Mouth', short: 'Big-Mouth', traits: 'Opinionated and outspoken. Says exactly what they think, no filter.', color: '#FF9F51', bg: '#FFF5EE', category: 'Confident' },
  { name: 'Confident Sassy', short: 'Sassy', traits: 'Sharp-tongued and witty. Quick comebacks, high confidence, sharp humor.', color: '#F43F5E', bg: '#FFF5F5', category: 'Confident' },
  { name: 'Confident Cool Guy/Gal', short: 'Cool Guy/Gal', traits: 'Suave and self-assured. Handles every situation with poise and confidence.', color: '#5A4A9A', bg: '#EEF0FF', category: 'Confident' },
];

const categories = ['Easy-going', 'Independent', 'Outgoing', 'Confident'];
const catColors: Record<string, string> = { 'Easy-going': '#6BCB77', 'Independent': '#7DD8E8', 'Outgoing': '#FF71CE', 'Confident': '#FF9F51' };

export default function PersonalitiesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>

        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #F5EEFF 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Tomodachi Life Personalities' }]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-purple" style={{ marginBottom: '1rem', display: 'inline-flex' }}>16 Personality Types</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #C77DFF, #FF5AA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Personalities
                </span>{' '}
                — Complete Guide & Chart
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '620px' }}>
                Every Mii in <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life</strong> has one of 16 unique personality types that shape how they speak, act, and relate to other islanders. This is the complete Tomodachi Life personality guide with full chart.
              </p>
            </div>
          </div>
        </section>

        {/* Category overview */}
        <section style={{ padding: '3rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
              The 4 Tomodachi Life Personality Categories
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="cat-grid">
              {categories.map(cat => (
                <div key={cat} style={{ background: `${catColors[cat]}15`, border: `2px solid ${catColors[cat]}44`, borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: catColors[cat], margin: '0 auto 0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: catColors[cat], marginBottom: '0.3rem' }}>{cat}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>4 personality types</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full personality chart */}
        <section style={{ padding: '3.5rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
              Tomodachi Life Personality Chart — All 16 Types
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '640px' }}>
              The complete Tomodachi Life personality chart lists every personality type, its category, and its key traits. Each Tomodachi Life Mii is assigned exactly one personality at creation, which can be changed later using a Personality-change item.
            </p>
            {categories.map(cat => (
              <div key={cat} style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: catColors[cat], marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: catColors[cat], display: 'inline-block' }} />
                  {cat} Personalities
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }} className="pers-row">
                  {personalities.filter(p => p.category === cat).map((p, i) => (
                    <div key={i} style={{ background: p.bg, border: `1.5px solid ${p.color}44`, borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: p.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: p.color, fontSize: '0.95rem', marginBottom: '0.25rem' }}>{p.name}</div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.traits}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How personalities work */}
        <section style={{ padding: '3.5rem 0', background: '#F5EEFF', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1.25rem' }}>
                How Tomodachi Life Personalities Affect Gameplay
              </h2>
              <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p>In Tomodachi Life, your Mii's personality type fundamentally determines how they express themselves, which hobbies they enjoy, and how they interact with other islanders. Each of the 16 Tomodachi Life personality types has unique speech patterns, facial expressions, and behavioral quirks that make every Mii feel distinct.</p>
                <p>Personality types in Tomodachi Life also affect compatibility between Miis. Some personality combinations spark instant friendships, while others create entertaining drama. Understanding the Tomodachi Life personality chart helps you curate your island's social dynamics intentionally.</p>
                <p>You can change a Mii's personality in Tomodachi Life by obtaining a Personality-change item from the Roaming Items game or by gifting it to your Mii. This allows you to experiment with different Tomodachi Life personality types and see how it affects island relationships.</p>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginTop: '2rem', marginBottom: '0.75rem' }}>
                How to Change Personality in Tomodachi Life
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {['Obtain a Personality-change item from Roaming Items or friends', 'Open your Mii\'s apartment and tap on them', 'Select "Give gift" and choose the Personality-change item', 'Choose the new Tomodachi Life personality type from the list', 'Confirm — your Mii\'s personality is now changed!'].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'white', border: '1.5px solid #E0C0FF', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C77DFF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                    {step}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/personality-guide" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>LtD Personality Guide →</Link>
                <Link href="/tomodachi-life-qr-codes" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Browse Mii QR Codes →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .cat-grid { grid-template-columns: repeat(4,1fr); }
        .pers-row { grid-template-columns: repeat(2,1fr); }
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .pers-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
