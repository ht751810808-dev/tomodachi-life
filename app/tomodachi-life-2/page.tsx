import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life 2 – Everything We Know (Release Date, Features, Platform)',
  description: 'All confirmed details about Tomodachi Life 2. Release date rumors, new features, platforms, and what to expect from the next Tomodachi Life game after Living the Dream.',
  keywords: ['tomodachi life 2', 'tomodachi life 2 release date', 'tomodachi life sequel', 'tomodachi life switch 2'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-2' },
};

export default function TomodachiLife2Page() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>

        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF5EE 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Tomodachi Life 2' }]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-yellow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Rumors & Confirmed Info</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life 2 —{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF9F51, #FF5AA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  What We Know So Far
                </span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                After <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream</strong> launched in 2026, fans are already wondering about Tomodachi Life 2. Here's everything confirmed, rumored, and speculated about the next Tomodachi Life game.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="content-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 2 Release Date — Confirmed & Rumors
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    As of 2026, <strong>Nintendo has not officially announced Tomodachi Life 2</strong>. The Tomodachi Life franchise's most recent entry, <Link href="/tomodachi-life-living-the-dream" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life: Living the Dream</Link>, only launched in 2026, making a direct Tomodachi Life 2 announcement unlikely in the near term. However, the success of Living the Dream has reinvigorated the Tomodachi Life community, and many fans believe a proper Tomodachi Life 2 for Switch 2 is in development.
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    Community speculation points to a possible Tomodachi Life 2 reveal at a Nintendo Direct, potentially targeting a 2027–2028 release window for Nintendo Switch 2.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    New Features Expected in Tomodachi Life 2
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    Based on community wishlists and the improvements introduced in Tomodachi Life: Living the Dream, fans expect Tomodachi Life 2 to expand further on:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {['Deeper personality system with more than 16 types', 'Expanded online multiplayer and island visiting', 'More life stages for Tomodachi Life Miis (career, retirement)', 'Enhanced Mii customization with hair/skin tone expansion', 'Cross-platform Mii QR code sharing', 'Seasonal events and a dynamic island economy', 'User-created content sharing via Nintendo online'].map((feat, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: '#FFF5EE', border: '1px solid #FFD1A0', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                        <span style={{ color: '#FF9F51', fontWeight: 700, flexShrink: 0 }}>✦</span>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 2 Platform: Switch or Switch 2?
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    If Tomodachi Life 2 is in development, the most likely platform is the <strong>Nintendo Switch 2</strong>. Nintendo tends to launch major franchise entries on new hardware to showcase capabilities. Given that Tomodachi Life: Living the Dream already covers Nintendo Switch, Tomodachi Life 2 would likely target Switch 2 to offer a genuine generational leap in visuals and online features.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 2 vs Living the Dream: Key Differences
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    While Tomodachi Life: Living the Dream is an enhanced sequel to the original 3DS game, a true Tomodachi Life 2 would represent a full ground-up development rather than an enhancement. Think of <em>Living the Dream</em> as Tomodachi Life's "New Horizons moment" (like Animal Crossing: New Horizons) — and Tomodachi Life 2 would be the next major reinvention of the series.
                  </p>
                </div>

                <div style={{ padding: '1.75rem', background: '#FFF5EE', border: '1.5px solid #FFD1A0', borderRadius: 'var(--radius-lg)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FF9F51', marginBottom: '0.75rem' }}>Where to Follow Tomodachi Life 2 News</div>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                    Bookmark this page — we'll update with any official Tomodachi Life 2 announcements from Nintendo Directs, E3, or Nintendo's official channels. We also track Tomodachi Life fan community discussions on Reddit, Discord, and Twitter for the latest speculation and leaks.
                  </p>
                </div>

              </div>

              {/* Sidebar */}
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#FFF5EE', border: '1.5px solid #FFD1A0', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FF9F51', marginBottom: '1rem' }}>Status</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#FFE8CC', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontWeight: 600, color: '#B8600A' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF9F51', display: 'inline-block' }} />
                    Not officially announced
                  </div>
                  <div style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                    Last checked: May 2026. We update this page whenever Nintendo makes relevant announcements.
                  </div>
                </div>
                <div style={{ background: '#F5EEFF', border: '1.5px solid #E0C0FF', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Play Now</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>While you wait for Tomodachi Life 2, enjoy Living the Dream!</p>
                  <Link href="/tomodachi-life-living-the-dream" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem', display: 'flex' }}>
                    Living the Dream Guide →
                  </Link>
                </div>
                <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Related Pages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[{ href: '/tomodachi-life-switch', label: 'Switch Guide' }, { href: '/tomodachi-life-release-date', label: 'Release Dates History' }, { href: '/tomodachi-life-personalities', label: 'Personalities Guide' }].map(p => (
                      <Link key={p.href} href={p.href} className="sidebar-link-orange" style={{ fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>→ {p.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{ padding: '0 0 3rem' }}>
          <div className="container">
            <RelatedPages pages={[
              { href: '/tomodachi-life-release-date', label: 'Release Date History', desc: 'Full timeline from 2013 original to LtD 2026' },
              { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Living the Dream — the current Switch sequel' },
              { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream', desc: 'What TL2 fans are playing right now' },
              { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'The 16 personality types expected in TL2' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .content-grid { grid-template-columns: 2fr 1fr; }
        .sidebar-link-orange { color: #FF9F51; }
        .sidebar-link-orange:hover { color: #FF5AA5; }
        @media (max-width: 900px) { .content-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
