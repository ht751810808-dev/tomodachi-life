import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import FAQ from '@/components/FAQ';
import LtDSubNav from '@/components/LtDSubNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life Living the Dream – Full Guide, ROM, PC & NSP | 2026',
  description: 'Complete guide to Tomodachi Life: Living the Dream. Play on Switch, PC, or emulator. Download ROM & NSP, master the personality system, and get the full walkthrough.',
  keywords: ['tomodachi life living the dream', 'tomodachi life living the dream pc', 'tomodachi life living the dream rom', 'tomodachi life living the dream nsp', 'tomodachi life living the dream emulator'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-living-the-dream' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tomodachi Life: Living the Dream – Complete Guide 2026',
  description: 'Full guide covering Tomodachi Life: Living the Dream gameplay, ROM, NSP, PC emulator setup, and personality system.',
  url: 'https://tomodachi-life.org/tomodachi-life-living-the-dream',
  datePublished: '2026-01-01',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'Tomodachi Life Guide' },
};

const subPages = [
  { href: '/tomodachi-life-living-the-dream/pc', label: 'Play on PC', desc: 'Run Living the Dream on Windows or Mac', color: '#7DD8E8', bg: '#EFF9FF' },
  { href: '/tomodachi-life-living-the-dream/emulator', label: 'Emulator Guide', desc: 'Best emulator setup for Living the Dream', color: '#C77DFF', bg: '#F5EEFF' },
  { href: '/tomodachi-life-living-the-dream/rom', label: 'ROM Guide', desc: 'ROM formats and setup for Living the Dream', color: '#FF9F51', bg: '#FFF5EE' },
  { href: '/tomodachi-life-living-the-dream/nsp', label: 'NSP Guide', desc: 'NSP for Nintendo Switch Living the Dream', color: '#F43F5E', bg: '#FFF5F5' },
  { href: '/tomodachi-life-living-the-dream/personality-guide', label: 'Personality Guide', desc: 'All LtD personality types & chart', color: '#C77DFF', bg: '#F5EEFF' },
];

export default function LivingTheDreamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <LtDSubNav />
        {/* Hero */}
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF0F8 0%, #F5EEFF 50%, #EFF8FF 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Tomodachi Life Living the Dream' }]} />
            <div style={{ maxWidth: '760px' }}>
              <span className="pill pill-pink" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Nintendo Switch · 2026</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life:{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Living the Dream
                </span>{' '}
                — Complete Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '640px', marginBottom: '2rem' }}>
                The definitive guide to <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream</strong> — covering gameplay, how to play on PC and emulator, ROM & NSP setup, and the full personality chart.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/pc" className="btn-primary">Play on PC →</Link>
                <Link href="/tomodachi-life-living-the-dream/emulator" className="btn-secondary">Emulator Setup →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-page nav */}
        <section style={{ padding: '2.5rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }} className="subpages-nav">
              {subPages.map((p, i) => (
                <Link key={i} href={p.href} className="subpage-nav-link" style={{ textDecoration: 'none', background: p.bg, border: `1.5px solid ${p.color}33`, borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: p.color, marginBottom: '0.3rem' }}>{p.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{p.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem', alignItems: 'start' }} className="content-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-text)' }}>
                    What Is Tomodachi Life: Living the Dream?
                  </h2>
                  <div style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>
                      <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream</strong> is the highly anticipated 2026 Nintendo Switch sequel to the beloved 3DS game Tomodachi Life. Building on the original's charming life simulation formula, <em>Living the Dream</em> expands the Tomodachi Life experience with online multiplayer, new island locations, enhanced Mii customization, deeper relationship mechanics, and a brand new career system for your islanders.
                    </p>
                    <p>
                      In Tomodachi Life: Living the Dream, your Mii characters can now travel between islands, interact with friends' Miis online, pursue professional careers, and experience new life stages — from childhood dreams to adult aspirations. The Tomodachi Life: Living the Dream personality system has been expanded and refined, offering even more nuanced character behavior than the original.
                    </p>
                    <p>
                      The game retains everything fans loved about the original Tomodachi Life: the quirky humor, the spontaneous relationships, the addictive mini-games, and the joy of watching your personalized Miis live out their island lives. Tomodachi Life: Living the Dream also supports Mii QR codes for importing characters, maintaining full compatibility with community-created Mii libraries.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    How to Play Tomodachi Life Living the Dream on PC
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    Playing <strong>Tomodachi Life: Living the Dream on PC</strong> is possible through Switch emulation. The most popular options are Ryujinx and Yuzu (Suyu), both of which can run the Living the Dream ROM or NSP file at full speed on a capable computer. See our dedicated <Link href="/tomodachi-life-living-the-dream/pc" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life Living the Dream PC guide</Link> for full setup instructions.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Link href="/tomodachi-life-living-the-dream/pc" className="pill pill-blue" style={{ cursor: 'pointer' }}>PC Setup Guide</Link>
                    <Link href="/tomodachi-life-living-the-dream/emulator" className="pill pill-purple" style={{ cursor: 'pointer' }}>Emulator Guide</Link>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life Living the Dream ROM & NSP
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    Tomodachi Life: Living the Dream is available in two digital formats for emulation: the <strong>ROM</strong> format (for general emulators) and the <strong>NSP</strong> format (Nintendo Switch Package, for Ryujinx and real hardware with Atmosphere CFW). Both formats allow you to experience the full Tomodachi Life: Living the Dream game on PC or modded Switch hardware.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <Link href="/tomodachi-life-living-the-dream/rom" style={{ textDecoration: 'none', background: '#FFF5EE', border: '1.5px solid #FFD1A0', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'block' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#FF9F51', marginBottom: '0.3rem' }}>ROM Guide →</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Compatible with most emulators</div>
                    </Link>
                    <Link href="/tomodachi-life-living-the-dream/nsp" style={{ textDecoration: 'none', background: '#FFF5F5', border: '1.5px solid #FFC0C0', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'block' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#F43F5E', marginBottom: '0.3rem' }}>NSP Guide →</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>For Ryujinx & Switch CFW</div>
                    </Link>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life Living the Dream Emulator Guide
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    The best emulators for Tomodachi Life: Living the Dream are <strong>Ryujinx</strong> (most stable, open-source) and <strong>Suyu</strong> (Yuzu fork, excellent performance). Both support the NSP and ROM formats for Living the Dream. Read our full <Link href="/tomodachi-life-living-the-dream/emulator" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life Living the Dream emulator guide</Link> for step-by-step setup, performance tips, and troubleshooting.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life Living the Dream Personality Guide
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    Tomodachi Life: Living the Dream expands the personality system from the original game. All 16 classic Tomodachi Life personality types return, with new sub-traits and interaction patterns. The Living the Dream personality chart also introduces seasonal personality shifts and new compatibility mechanics. See the full <Link href="/tomodachi-life-living-the-dream/personality-guide" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life Living the Dream personality guide</Link> for the complete chart and in-depth trait breakdowns.
                  </p>
                  <Link href="/tomodachi-life-living-the-dream/personality-guide" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>
                    View Personality Chart →
                  </Link>
                </div>

              </div>

              {/* Sidebar */}
              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#FFF0F8', border: '1.5px solid #FFB3E3', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', fontSize: '1rem' }}>Quick Facts</div>
                  {[
                    ['Platform', 'Nintendo Switch'],
                    ['Release', '2026'],
                    ['Developer', 'Nintendo'],
                    ['Players', '1–4 Online'],
                    ['Original', 'Tomodachi Life (3DS)'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #FFD6EE', fontSize: '0.875rem' }}>
                      <span style={{ color: 'var(--color-text-muted)', fontWeight: 500 }}>{k}</span>
                      <span style={{ color: 'var(--color-text)', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#F5EEFF', border: '1.5px solid #E0C0FF', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Related Pages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                      { href: '/tomodachi-life-switch', label: 'Switch Guide' },
                      { href: '/tomodachi-life-personalities', label: 'Personalities' },
                      { href: '/tomodachi-life-qr-codes', label: 'QR Codes' },
                      { href: '/tomodachi-life-2', label: 'Tomodachi Life 2' },
                    ].map(p => (
                      <Link key={p.href} href={p.href} className="sidebar-link-purple" style={{ fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>→ {p.label}</Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related pages */}
        <section style={{ padding: '0 0 3.5rem' }}>
          <div className="container">
            <RelatedPages pages={[
              { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Living the Dream on Nintendo Switch hardware' },
              { href: '/tomodachi-life-living-the-dream/pc', label: 'Play on PC', desc: 'Emulator setup to run LtD on Windows or Mac' },
              { href: '/tomodachi-life-living-the-dream/emulator', label: 'Emulator Guide', desc: 'Ryujinx and Suyu setup for Living the Dream' },
              { href: '/tomodachi-life-living-the-dream/rom', label: 'ROM Guide', desc: 'XCI and NSP formats for LtD emulation' },
              { href: '/tomodachi-life-living-the-dream/nsp', label: 'NSP Guide', desc: 'NSP install on Switch CFW or Ryujinx' },
              { href: '/tomodachi-life-living-the-dream/personality-guide', label: 'Personality Chart', desc: 'All 16 LtD personalities with new features' },
              { href: '/tomodachi-life-personalities', label: 'Original Personalities', desc: 'Compare with 3DS personality system' },
              { href: '/tomodachi-life-qr-codes', label: 'QR Codes', desc: 'Import Mii characters into Living the Dream' },
              { href: '/tomodachi-life-3ds', label: '3DS Original', desc: 'Classic Tomodachi Life on Nintendo 3DS' },
              { href: '/tomodachi-life-2', label: 'Tomodachi Life 2', desc: 'What\'s next after Living the Dream?' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .subpages-nav { grid-template-columns: repeat(5,1fr); }
        .content-grid { grid-template-columns: 2fr 1fr; }
        .subpage-nav-link { transition: transform 200ms ease, box-shadow 200ms ease; }
        .subpage-nav-link:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
        .sidebar-link-purple { color: #8B3FC5; }
        .sidebar-link-purple:hover { color: #FF5AA5; }
        @media (max-width: 900px) {
          .subpages-nav { grid-template-columns: repeat(3,1fr) !important; }
          .content-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .subpages-nav { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
