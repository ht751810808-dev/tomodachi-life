import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life Living the Dream Personality Guide & Chart 2026',
  description: 'Complete Tomodachi Life: Living the Dream personality guide. Full personality chart of all types, trait descriptions, and how personalities shape your Miis in LtD.',
  keywords: ['tomodachi life living the dream personality guide', 'tomodachi life living the dream personality chart', 'living the dream personality types'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-living-the-dream/personality-guide' },
};

const personalities = [
  {name:'Easygoing Flatterer',cat:'Easy-going',desc:'Calm and complimentary. Avoids conflict at all costs and always has kind words.',new:'Gains new "Island Harmony" passive in LtD — boosts island mood when present.',color:'#6BCB77'},
  {name:'Easygoing Dreamer',cat:'Easy-going',desc:'Lost in imagination. Loves music, art, and daydreaming about island adventures.',new:'New LtD dream sequences unlock unique island decorations.',color:'#7DD8E8'},
  {name:'Easygoing Sociable',cat:'Easy-going',desc:'The friend everyone wants. Warm, welcoming, and the life of island gatherings.',new:'Expanded online friend-visiting ability in Living the Dream.',color:'#FFD93D'},
  {name:'Easygoing Airhead',cat:'Easy-going',desc:'Delightfully scatterbrained. Has a unique, unpredictable way of seeing things.',new:'Airhead random events are more frequent and varied in LtD.',color:'#B8EDF5'},
  {name:'Independent Thinker',cat:'Independent',desc:'Analytical and introspective. Prefers solo activities and deep contemplation.',new:'New career path system in LtD unlocked first for Thinker types.',color:'#4A90D9'},
  {name:'Independent Lone Ranger',cat:'Independent',desc:'Self-sufficient and private. Sets own rules and values space above all.',new:'Solo career events and independent life milestones added in LtD.',color:'#7B6E8A'},
  {name:'Independent Cool Cat',cat:'Independent',desc:'Effortlessly stylish and unrattled. Handles everything with cool composure.',new:'LtD adds a fashion line career unlocked uniquely for Cool Cat types.',color:'#5A4A9A'},
  {name:'Independent Rebel',cat:'Independent',desc:'Nonconformist and bold. Challenges norms and sparks island drama.',new:'New "Rebel movement" events that temporarily reshape island dynamics.',color:'#FF9F51'},
  {name:'Outgoing Entertainer',cat:'Outgoing',desc:'Born performer. Craves attention and stages island concerts regularly.',new:'LtD concert feature expanded with stage customization for Entertainers.',color:'#FF71CE'},
  {name:'Outgoing Optimist',cat:'Outgoing',desc:'Incurably cheerful. Sees the silver lining in every island situation.',new:'Optimist Miis spread "good mood" buffs to nearby islanders in LtD.',color:'#FFD93D'},
  {name:'Outgoing Trendsetter',cat:'Outgoing',desc:'Fashion-forward and culturally tuned in. Always sets the island\'s style.',new:'LtD\'s island fashion system is driven primarily by Trendsetter Miis.',color:'#C77DFF'},
  {name:'Outgoing Go-Getter',cat:'Outgoing',desc:'Ambitious and high-energy. Sets goals and drags the island along for the ride.',new:'New career milestone system most active for Go-Getter personality type.',color:'#F43F5E'},
  {name:'Confident Leader',cat:'Confident',desc:'Natural authority. Commands respect and steps up in any island situation.',new:'Leaders can now form "clubs" in LtD that affect group island dynamics.',color:'#FF5AA5'},
  {name:'Confident Big-Mouth',cat:'Confident',desc:'Loud and opinionated. Says what everyone is thinking but won\'t.',new:'Island "gossip" system in LtD driven primarily by Big-Mouth events.',color:'#FF9F51'},
  {name:'Confident Sassy',cat:'Confident',desc:'Witty and sharp. Masters the comeback and commands a room effortlessly.',new:'Sassy dialogue trees significantly expanded in Living the Dream.',color:'#F43F5E'},
  {name:'Confident Cool Guy/Gal',cat:'Confident',desc:'Suave, self-assured, and unfazed. Handles every situation with total poise.',new:'New LtD "style icon" events exclusive to Cool Guy/Gal islanders.',color:'#5A4A9A'},
];

export default function LtDPersonalityGuidePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #F5EEFF 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Living the Dream',href:'/tomodachi-life-living-the-dream'},{label:'Personality Guide'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-purple" style={{ marginBottom: '1rem', display: 'inline-flex' }}>LtD Exclusive Guide</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life Living the Dream{' '}
                <span style={{ background: 'linear-gradient(135deg, #C77DFF, #FF5AA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Personality Guide
                </span>{' '}
                & Chart
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                The complete <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream personality chart</strong> — all 16 types with LtD-specific new features, expanded traits, and how each personality shapes island life in the Switch sequel.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
                All 16 Tomodachi Life Living the Dream Personality Types
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Tomodachi Life: Living the Dream retains all 16 personality types from the original 3DS game, but adds new LtD-exclusive behaviors, career path bonuses, and expanded event sequences for each type. Below is the complete Living the Dream personality chart with both classic traits and new LtD additions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
                {personalities.map((p, i) => (
                  <div key={i} style={{ background: 'white', border: `1.5px solid ${p.color}33`, borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '1.25rem', alignItems: 'start' }} className="pers-row">
                    <div>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${p.color}22`, border: `1.5px solid ${p.color}55`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: p.color, fontSize: '0.9rem', lineHeight: 1.3, marginBottom: '0.2rem' }}>{p.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--color-text-light)', fontWeight: 500 }}>{p.cat}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>Classic Traits</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{p.desc}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: p.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>New in LtD</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text)', lineHeight: 1.65 }}>{p.new}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '2rem', background: '#F5EEFF', border: '1.5px solid #E0C0FF', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--color-text)' }}>How to Change Personality in Living the Dream</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.92rem' }}>
                  In Tomodachi Life: Living the Dream, you can change a Mii's personality using a Personality-change item obtained through island events, the new Treasure Hunt activity, or from online island visits. You can also use the Tomodachi Life save editor to modify personality values directly. See our <Link href="/tomodachi-life-save-editor" style={{ color: '#C77DFF', fontWeight: 600 }}>save editor guide</Link> for details.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-personalities" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Full Personalities Guide →</Link>
                <Link href="/tomodachi-life-living-the-dream" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Back to LtD Guide →</Link>
              </div>

              <RelatedPages pages={[
                { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'All 16 personality types in the original 3DS game' },
                { href: '/tomodachi-life-living-the-dream', label: 'LtD Full Guide', desc: 'Complete guide to Tomodachi Life: Living the Dream' },
                { href: '/tomodachi-life-qr-codes', label: 'QR Codes', desc: 'Scan Mii QR codes to populate your island' },
                { href: '/tomodachi-life-save-editor', label: 'Save Editor', desc: 'Change personality via save editor tools' },
                { href: '/tomodachi-life-3ds', label: '3DS Guide', desc: 'Personality system in the original 3DS version' },
                { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Living the Dream on Nintendo Switch' },
              ]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.pers-row{grid-template-columns:160px 1fr 1fr;}@media(max-width:700px){.pers-row{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
