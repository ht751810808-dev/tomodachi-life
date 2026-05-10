import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life Hong Kong – HK Version Guide & Availability 2026',
  description: 'Tomodachi Life Hong Kong guide. HK version availability, language options, where to buy, region differences, and emulation options for Hong Kong players.',
  keywords: ['tomodachi life hk', 'tomodachi life hong kong', 'tomodachi life hk version', 'tomodachi life hong kong availability'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-hk' },
};

const availability = [
  { version: 'Tomodachi Life (3DS)', status: 'Available', how: 'Physical import (PAL/NTSC-J)', region: 'Import only', note: 'No official HK 3DS release. Japanese or European versions playable on HK 3DS units.', color: '#6BCB77' },
  { version: 'Living the Dream (Switch)', status: 'Available', how: 'Physical & eShop', region: 'Asia Region', note: 'Available on Nintendo eShop in Hong Kong and Taiwan as part of the Asia region. Traditional Chinese language included.', color: '#FF5AA5' },
];

const languages = [
  { lang: 'English', available3DS: true, availableLtD: true, note: 'Full translation in both versions' },
  { lang: 'Japanese', available3DS: true, availableLtD: true, note: 'Original language, fully supported' },
  { lang: 'Traditional Chinese', available3DS: false, availableLtD: true, note: 'New in Living the Dream — first ever Traditional Chinese support' },
  { lang: 'Simplified Chinese', available3DS: false, availableLtD: false, note: 'Not included in any version' },
  { lang: 'Korean', available3DS: true, availableLtD: true, note: 'Korea-specific release for 3DS, included in LtD' },
  { lang: 'German / French / Italian / Spanish', available3DS: true, availableLtD: true, note: 'European languages in both versions' },
];

export default function TomodachiLifeHKPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EFF9FF 0%, #EDFFF0 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life HK'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-blue" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Hong Kong Guide</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #4BBFD6, #6BCB77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Hong Kong
                </span>{' '}
                — HK Version Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Complete guide to <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life in Hong Kong</strong> — availability, language options, where to buy, regional differences, and how HK players can enjoy both the 3DS original and Living the Dream.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Is Tomodachi Life Available in Hong Kong?</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '660px' }}>
              <strong>Tomodachi Life</strong> has varying availability in Hong Kong depending on the version. The original 3DS game never had an official HK release, but Hong Kong players can play it via import. <strong>Tomodachi Life: Living the Dream</strong> is fully available on the HK Nintendo eShop as part of the Asia region, making it the most accessible Tomodachi Life experience for Hong Kong players.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {availability.map((item, i) => (
                <div key={i} style={{ background: 'white', border: `2px solid ${item.color}44`, borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '1rem' }}>{item.version}</div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.72rem', background: `${item.color}15`, color: item.color, padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 700 }}>{item.status}</span>
                      <span style={{ fontSize: '0.72rem', background: '#F5F5F5', color: 'var(--color-text-muted)', padding: '0.2rem 0.6rem', borderRadius: '999px', fontWeight: 600 }}>{item.region}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text)' }}>How to get it:</strong> {item.how}</div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Tomodachi Life Language Support for HK Players</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '640px' }}>
              One of the biggest improvements in <strong>Tomodachi Life: Living the Dream</strong> for Hong Kong players is the addition of <strong>Traditional Chinese language support</strong> — the first time in the series. This makes Living the Dream significantly more accessible for HK and Taiwan players compared to the 3DS original, which was English or Japanese only in most copies available to HK players.
            </p>
            <div style={{ overflow: 'auto', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: '#EFF9FF' }}>
                    {['Language', 'Tomodachi Life (3DS)', 'Living the Dream (Switch)', 'Notes'].map(h => (
                      <th key={h} style={{ padding: '0.65rem 0.75rem', textAlign: 'left', fontFamily: 'var(--font-display)', color: 'var(--color-text)', borderBottom: '2px solid var(--color-border)', fontWeight: 600, fontSize: '0.8rem' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {languages.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'white' : '#F9FDFF' }}>
                      <td style={{ padding: '0.6rem 0.75rem', fontWeight: 600, color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)', fontSize: '0.84rem' }}>{row.lang}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: row.available3DS ? '#2A8A30' : '#B83232', fontWeight: 600, borderBottom: '1px solid var(--color-border)', fontSize: '0.84rem' }}>{row.available3DS ? 'Yes' : 'No'}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: row.availableLtD ? '#2A8A30' : '#B83232', fontWeight: 600, borderBottom: '1px solid var(--color-border)', fontSize: '0.84rem' }}>{row.availableLtD ? 'Yes' : 'No'}</td>
                      <td style={{ padding: '0.6rem 0.75rem', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-border)', fontSize: '0.8rem' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: '1rem 1.25rem', background: '#EFF9FF', border: '1.5px solid #B8EDF5', borderRadius: 'var(--radius-md)', fontSize: '0.87rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              <strong style={{ color: 'var(--color-text)' }}>Good news for HK players:</strong> The HK eShop version of Living the Dream defaults to Traditional Chinese based on your Switch system language, but you can switch to English or Japanese from the in-game settings at any time.
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Where to Buy Tomodachi Life in Hong Kong</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.5rem', maxWidth: '640px' }}>
              Hong Kong players have several options for getting Tomodachi Life depending on which version they want.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }} className="buy-grid">
              {[
                { title: 'Nintendo eShop HK (Recommended)', desc: 'Living the Dream is available on the Hong Kong Nintendo eShop. Create or use an HK Nintendo account, add HK eShop funds, and download directly. No physical copy needed.', for: 'Living the Dream', color: '#FF5AA5' },
                { title: 'Physical Retail HK', desc: 'Living the Dream Switch physical cartridges should be available at major HK game retailers (MonsterX, T-One, 豐澤). Asia region cartridges include Traditional Chinese support.', for: 'Living the Dream', color: '#6BCB77' },
                { title: 'Import (Original 3DS)', desc: 'The original Tomodachi Life 3DS game was not released in HK. Buy a PAL (UK/EU) or NTSC-J (Japan) cartridge from import stores in Mong Kok or online via HKTVMall/Carousell.', for: 'Tomodachi Life 3DS', color: '#7DD8E8' },
                { title: 'Emulation (Free)', desc: 'Play either version via emulator — Citra for the 3DS version or Ryujinx for Living the Dream. Legal considerations apply based on your jurisdiction. See our emulator guides.', for: 'Both Versions', color: '#C77DFF' },
              ].map((opt, i) => (
                <div key={i} style={{ background: `${opt.color}08`, border: `1.5px solid ${opt.color}44`, borderRadius: 'var(--radius-lg)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '0.72rem', background: `${opt.color}20`, color: opt.color, padding: '0.15rem 0.5rem', borderRadius: '999px', fontWeight: 700, display: 'inline-block', marginBottom: '0.5rem' }}>{opt.for}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.92rem', marginBottom: '0.4rem' }}>{opt.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{opt.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Playing the Original Tomodachi Life (3DS) in Hong Kong</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Since there was no official Tomodachi Life release for Hong Kong 3DS systems, HK players who want the original game have a few options. The 3DS was region-locked, which means an HK 3DS can only play HK/Asia-region cartridges by default. However, with Luma3DS CFW installed, you can remove region locking and play any region's Tomodachi Life cartridge or ROM.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {[
                'Install Luma3DS CFW on your HK 3DS to enable region-free gameplay',
                'Import a EUR or USA Tomodachi Life 3DS cartridge — these are widely available used online',
                'Alternatively, play a Japanese version cartridge (Tomodachi Collection: New Life) with Luma3DS',
                'For emulation, Citra on PC has no region restrictions — use any regional ROM',
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: '#EFF9FF', border: '1px solid #B8EDF5', borderRadius: 'var(--radius-md)', fontSize: '0.87rem', color: 'var(--color-text)' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#4BBFD6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>HK Regional Differences in Living the Dream</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem' }}>
              The HK/Asia version of Tomodachi Life: Living the Dream is functionally identical to the Western release with the addition of Traditional Chinese UI and Mii name support. There are no region-exclusive content differences — all island events, personalities, and online features are shared globally. Online multiplayer works cross-region, meaning HK players can visit islands from North America, Europe, or Japan seamlessly.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-3ds" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>3DS Guide →</Link>
              <Link href="/tomodachi-life-switch" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Switch Guide →</Link>
            </div>
            <RelatedPages pages={[
              { href: '/tomodachi-life-3ds', label: '3DS Guide', desc: 'Region-free play via Luma3DS CFW' },
              { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Living the Dream availability on Switch' },
              { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream', desc: 'Full guide — includes Traditional Chinese support' },
              { href: '/tomodachi-life-rom', label: 'ROM Guide', desc: 'Play via emulator — no region restrictions' },
              { href: '/tomodachi-life-release-date', label: 'Release Dates', desc: 'Full regional release history' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.buy-grid{grid-template-columns:repeat(2,1fr);}@media(max-width:768px){.buy-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
