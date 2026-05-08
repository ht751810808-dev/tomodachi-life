import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life Switch – Is It Available? Complete Platform Guide 2026',
  description: 'Is Tomodachi Life on Nintendo Switch? Complete guide to Tomodachi Life Switch availability, Living the Dream compatibility, emulation options, and what\'s coming next.',
  keywords: ['tomodachi life switch', 'tomodachi life for switch', 'tomodachi life nintendo switch', 'tomodachi life living the dream switch'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-switch' },
};

export default function SwitchPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF5F5 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Tomodachi Life Switch' }]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-pink" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Nintendo Switch</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life on{' '}
                <span style={{ background: 'linear-gradient(135deg, #F43F5E, #FF9F51)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Nintendo Switch
                </span>{' '}
                — Full Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Everything you need to know about <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life on Nintendo Switch</strong> — from Living the Dream to emulation options and what's coming next.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem' }} className="content-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Is Tomodachi Life Available on Nintendo Switch?
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    The <strong>original Tomodachi Life (2013/2014)</strong> is a Nintendo 3DS exclusive and is <strong>not officially available on Nintendo Switch</strong>. However, <strong>Tomodachi Life: Living the Dream</strong> — the 2026 sequel — was released natively for Nintendo Switch and is the definitive Tomodachi Life Switch experience.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.25rem' }}>
                    <div style={{ background: '#EDFFF0', border: '1.5px solid #AEEAB6', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#3A8A44', marginBottom: '0.3rem', fontSize: '0.9rem' }}>✓ Available on Switch</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Tomodachi Life: Living the Dream (2026)</div>
                    </div>
                    <div style={{ background: '#FFF5F5', border: '1.5px solid #FFC0C0', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#B83232', marginBottom: '0.3rem', fontSize: '0.9rem' }}>✗ Not on Switch</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>Original Tomodachi Life (3DS only)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life: Living the Dream on Switch
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    <Link href="/tomodachi-life-living-the-dream" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life: Living the Dream</Link> is the official Tomodachi Life Switch game, released in 2026. It's available as a physical cartridge and digital download from the Nintendo eShop. The Switch version supports HD Rumble, touch screen in handheld mode, and online multiplayer features that were impossible on the original 3DS Tomodachi Life.
                  </p>
                  <Link href="/tomodachi-life-living-the-dream" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem', marginTop: '0.5rem', display: 'inline-flex' }}>
                    Full Living the Dream Guide →
                  </Link>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    How to Play Original Tomodachi Life on Switch (Emulation)
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    To play the original <strong>Tomodachi Life on Nintendo Switch</strong> via emulation, you'll need a modded Switch with Atmosphere custom firmware. Install a 3DS emulator like <strong>MelonDS</strong> on your Switch, then load a Tomodachi Life 3DS ROM. Alternatively, play the original Tomodachi Life through a PC emulator — see our <Link href="/tomodachi-life-3ds" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life 3DS guide</Link> for full setup instructions.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life Switch vs 3DS: What's Different?
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[['Graphics', '720p/1080p HD', '400×240 3D display'],['Online', 'Full multiplayer & island visiting', 'Local wireless only'],['Miis', 'Enhanced customization', 'Classic 3DS Miis'],['Personalities', '16 expanded types', '16 original types'],['Content', 'New careers, locations, events', 'Classic island content'],['Platform', 'TV & handheld modes', 'Handheld only']].map(([feat,sw,ds],i) => (
                      <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.2fr', gap: '0.5rem', padding: '0.75rem 1rem', background: i%2===0?'#F9F9FF':'white', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-text)' }}>{feat}</span>
                        <span style={{ color: '#3A8A44', fontWeight: 600 }}>{sw} ✓</span>
                        <span style={{ color: 'var(--color-text-muted)' }}>{ds}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Will There Be a Tomodachi Life Switch 2 Version?
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    With Tomodachi Life: Living the Dream having just launched on Switch in 2026, a separate Switch 2 version is not confirmed. However, if a <Link href="/tomodachi-life-2" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life 2</Link> is in development, it would most likely target Switch 2 as the primary platform. Track our Tomodachi Life 2 page for all updates.
                  </p>
                </div>
              </div>

              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#FFF5F5', border: '1.5px solid #FFC0C0', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>Switch Versions</div>
                  {[['Living the Dream (2026)', 'Official Switch release', '#3A8A44'],['Original TL on Switch', 'Via emulation only', '#B8600A']].map(([n,s,c],i) => (
                    <div key={i} style={{ padding: '0.65rem 0', borderBottom: i<1?'1px solid #FFE0E0':'none' }}>
                      <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-text)', marginBottom: '0.15rem' }}>{n}</div>
                      <div style={{ fontSize: '0.78rem', color: c as string }}>{s}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Related Pages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[{href:'/tomodachi-life-living-the-dream',label:'Living the Dream Guide'},{href:'/tomodachi-life-living-the-dream/nsp',label:'LtD NSP Guide'},{href:'/tomodachi-life-2',label:'Tomodachi Life 2'},{href:'/tomodachi-life-3ds',label:'3DS Guide'}].map(p=>(
                      <Link key={p.href} href={p.href} className="sidebar-link-red" style={{fontSize:'0.875rem',fontWeight:600,textDecoration:'none'}}>→ {p.label}</Link>
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
              { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream', desc: 'Complete guide to the Switch sequel' },
              { href: '/tomodachi-life-living-the-dream/nsp', label: 'LtD NSP Guide', desc: 'Install Living the Dream via NSP on Switch CFW' },
              { href: '/tomodachi-life-living-the-dream/rom', label: 'LtD ROM Guide', desc: 'XCI ROM format for Switch emulation' },
              { href: '/tomodachi-life-release-date', label: 'Release Dates', desc: 'When Living the Dream launched globally' },
              { href: '/tomodachi-life-hk', label: 'HK Version', desc: 'Switch availability for Hong Kong players' },
              { href: '/tomodachi-life-2', label: 'Tomodachi Life 2', desc: 'Next installment speculation and rumors' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.content-grid{grid-template-columns:2fr 1fr;}.sidebar-link-red{color:#F43F5E;}.sidebar-link-red:hover{color:#FF5AA5;}@media(max-width:900px){.content-grid{grid-template-columns:1fr!important;}}`}</style>
      {/* RelatedPages injected via section above */}
    </>
  );
}
