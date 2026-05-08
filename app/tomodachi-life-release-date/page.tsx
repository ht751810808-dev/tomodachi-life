import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life Release Date – Full History & Living the Dream Launch 2026',
  description: 'Complete Tomodachi Life release date history. Original 3DS launch dates by region, Tomodachi Life: Living the Dream release, and what we know about Tomodachi Life 2.',
  keywords: ['tomodachi life release date', 'tomodachi life living the dream release date', 'when did tomodachi life come out', 'tomodachi life 2 release date'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-release-date' },
};

const releaseHistory = [
  { date: 'April 18, 2013', region: 'Japan', version: 'Tomodachi Collection: New Life', platform: '3DS', detail: 'Original Japanese release under the "Tomodachi Collection" series name. Sold over 3 million copies in Japan alone.', color: '#FF71CE' },
  { date: 'June 6, 2014', region: 'North America', version: 'Tomodachi Life', platform: '3DS', detail: 'First Western release. The localized name "Tomodachi Life" dropped the "Collection" branding. Received strong reviews and sold well in North America.', color: '#6BCB77' },
  { date: 'June 6, 2014', region: 'Europe & Australia', version: 'Tomodachi Life', platform: '3DS', detail: 'Simultaneous European release alongside North America. The UK, Australia, and European regions all launched on the same date.', color: '#7DD8E8' },
  { date: 'August 7, 2014', region: 'South Korea', version: 'Tomodachi Life', platform: '3DS', detail: 'Korean localization released with full Korean language support. Minor regional content adjustments.', color: '#C77DFF' },
  { date: 'January 22, 2026', region: 'Worldwide', version: 'Tomodachi Life: Living the Dream', platform: 'Nintendo Switch', detail: 'Global simultaneous launch of the Switch sequel across all major regions. First new mainline Tomodachi Life game in over 10 years. Available physically and digitally.', color: '#FF9F51' },
];

const ltdFeatures = [
  { icon: '🗓', label: 'Announced', value: 'September 2024 Nintendo Direct' },
  { icon: '📅', label: 'Release Date', value: 'January 22, 2026' },
  { icon: '🌍', label: 'Regions', value: 'Worldwide simultaneously' },
  { icon: '🎮', label: 'Platform', value: 'Nintendo Switch' },
  { icon: '💰', label: 'Price', value: '$59.99 USD / £49.99 GBP' },
  { icon: '📦', label: 'Formats', value: 'Physical + Digital (Nintendo eShop)' },
];

export default function ReleaseDatePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFFBEE 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life Release Date'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-yellow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Release History</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #FFD93D, #FF9F51)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Release Date
                </span>{' '}
                — Full History
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                The complete <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life release date</strong> timeline — from the original 2013 Japanese launch through the 2014 worldwide 3DS release, to Tomodachi Life: Living the Dream in 2026.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Tomodachi Life: Living the Dream Release Date</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '640px' }}>
              <strong>Tomodachi Life: Living the Dream</strong> launched on <strong>January 22, 2026</strong> worldwide for Nintendo Switch. This was the first mainline Tomodachi Life release since the original 3DS game in 2013–2014, ending a 12-year wait for Western fans. The game was announced at the September 2024 Nintendo Direct alongside a release window.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2rem' }} className="ltd-grid">
              {ltdFeatures.map((f, i) => (
                <div key={i} style={{ background: '#FFFBEE', border: '1.5px solid #FFE08A', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.4rem' }}>{f.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#B8860B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.15rem' }}>{f.label}</div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--color-text)', fontWeight: 600 }}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1.25rem', background: '#EDFFF0', border: '1.5px solid #AEEAB6', borderRadius: 'var(--radius-lg)', maxWidth: '640px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem', color: '#2A6A30' }}>Was Tomodachi Life: Living the Dream Available at Launch?</div>
              <p style={{ fontSize: '0.87rem', color: 'var(--color-text-muted)', lineHeight: 1.75, margin: 0 }}>
                Yes — Living the Dream launched globally on January 22, 2026 in all major markets simultaneously. Both physical and digital copies were available from launch day. Nintendo eShop pre-orders opened shortly after the September 2024 announcement.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Complete Tomodachi Life Release Date Timeline</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '640px' }}>
              Here's the full <strong>Tomodachi Life release date</strong> timeline covering all versions, regions, and platforms. The series began in Japan in 2013 and has since reached players worldwide across two major releases.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderLeft: '2px solid var(--color-border)', paddingLeft: '0', marginLeft: '1rem', marginBottom: '2rem' }}>
              {releaseHistory.map((entry, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '2.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-9px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: entry.color, border: '3px solid white', boxShadow: `0 0 0 2px ${entry.color}` }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: entry.color, fontSize: '0.95rem' }}>{entry.date}</span>
                      <span style={{ fontSize: '0.72rem', background: `${entry.color}15`, color: entry.color, padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 700 }}>{entry.region}</span>
                      <span style={{ fontSize: '0.72rem', background: '#F5F5F5', color: 'var(--color-text-muted)', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>{entry.platform}</span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem', fontSize: '0.9rem' }}>{entry.version}</div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>{entry.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Why Was There a 12-Year Gap Between Releases?</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Despite the original Tomodachi Life's strong sales — over 6 million copies worldwide — Nintendo did not immediately greenlight a sequel. The game's original director moved to other projects, and Nintendo's shift to the Switch platform required reimagining the game's social multiplayer features. Additionally, some content decisions in the 3DS version generated controversy in certain markets, which may have influenced how Nintendo approached a sequel announcement.
            </p>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem' }}>
              By 2024, with the Switch's massive install base and the social simulation genre's renewed popularity (driven by Animal Crossing: New Horizons' success during 2020), Nintendo finally announced Tomodachi Life: Living the Dream. The wait only amplified fan excitement — the announcement trailer became one of Nintendo's most-watched Direct segments that year.
            </p>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life 2 Release Date — What We Know</h2>
            <div style={{ padding: '1.25rem', background: '#FFF0F8', border: '1.5px solid #FFBBDD', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, margin: '0 0 0.75rem' }}>
                As of 2026, <strong>Tomodachi Life 2</strong> has not been announced by Nintendo. Living the Dream — the current Switch release — is considered the true successor to the 3DS game and carries the "2" concept in everything but name. With Living the Dream only recently launched, a further sequel announcement in the near term seems unlikely.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, margin: 0, fontSize: '0.9rem' }}>
                If Nintendo follows its typical franchise cadence, a "Tomodachi Life 2" or third entry in the series would likely come during the Switch 2 era (estimated 2025–2028). See our <Link href="/tomodachi-life-2" style={{ color: '#FF71CE', fontWeight: 600 }}>Tomodachi Life 2 speculation page</Link> for the full breakdown of rumors and expectations.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-2" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>TL2 Speculation →</Link>
              <Link href="/tomodachi-life-switch" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Switch Guide →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.ltd-grid{grid-template-columns:repeat(3,1fr);}@media(max-width:768px){.ltd-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:480px){.ltd-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
