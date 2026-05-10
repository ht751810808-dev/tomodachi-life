import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life ROM – Complete Download & Emulator Guide 2026',
  description: 'Complete guide to Tomodachi Life ROM files. 3DS and Switch formats explained, emulator compatibility, and safe setup instructions for both versions.',
  keywords: ['tomodachi life rom', 'tomodachi life 3ds rom', 'tomodachi life rom download', 'tomodachi life rom emulator'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-rom' },
};

export default function RomPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF5EE 0%, #EDFFF0 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life ROM'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-yellow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>ROM Guide</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF9F51, #6BCB77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  ROM
                </span>{' '}
                — Complete Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>Everything about <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life ROM files</strong> — covering both the 3DS and Switch (Living the Dream) versions, emulator compatibility, and safe setup instructions.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Types of Tomodachi Life ROM Files</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>There are two distinct Tomodachi Life ROMs — one for the original 3DS game and one for Tomodachi Life: Living the Dream (Switch). They require different emulators and have different file formats.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[{title:'Tomodachi Life 3DS ROM',format:'.3ds / .cia',emulator:'Citra, Lime3DS, Azahar',regions:'EUR, USA, JPN',color:'#6BCB77'},{title:'Living the Dream ROM (Switch)',format:'.XCI / .NSP',emulator:'Ryujinx, Suyu',regions:'EUR, USA, JPN',color:'#FF5AA5'}].map((r,i)=>(
                    <div key={i} style={{background:'white',border:`2px solid ${r.color}44`,borderRadius:'var(--radius-lg)',padding:'1.5rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:r.color,marginBottom:'0.75rem',fontSize:'0.95rem'}}>{r.title}</div>
                      {[['Format',r.format],['Emulator',r.emulator],['Regions',r.regions]].map(([k,v])=>(
                        <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'0.35rem 0',borderBottom:`1px solid ${r.color}22`,fontSize:'0.8rem'}}>
                          <span style={{color:'var(--color-text-muted)'}}>{k}</span>
                          <span style={{fontWeight:600,color:'var(--color-text)'}}>{v}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life 3DS ROM Setup</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  To play the original <strong>Tomodachi Life 3DS ROM</strong>, use Citra or its modern fork Lime3DS. Download the emulator, obtain your .3ds ROM file (ensure it's a clean dump matching your region), and open the ROM through File → Load File. The Tomodachi Life 3DS ROM runs at full speed on most modern computers. For full setup, see our <Link href="/tomodachi-life-3ds" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>3DS guide</Link>.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life ROM Emulator Compatibility Chart</h2>
                <div style={{ overflow: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ background: '#F5F0FF' }}>
                        {['Emulator','Game Version','Format','Performance','Status'].map(h=>(
                          <th key={h} style={{ padding: '0.65rem 0.75rem', textAlign: 'left', fontFamily: 'var(--font-display)', color: 'var(--color-text)', borderBottom: '2px solid var(--color-border)', fontWeight: 600, fontSize: '0.8rem' }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[['Citra/Lime3DS','Original 3DS','.3ds / .cia','Excellent','Fully playable'],['Ryujinx','Living the Dream','.XCI / .NSP','Excellent','Fully playable'],['Suyu','Living the Dream','.XCI / .NSP','Very Good','Fully playable'],['Azahar (Citra fork)','Original 3DS','.3ds / .cia','Very Good','Fully playable'],['melonDS (on Switch)','Original 3DS','.3ds','Good','Switch CFW only']].map((row,i)=>(
                        <tr key={i} style={{ background: i%2===0?'white':'#FAFAFF' }}>
                          {row.map((cell,j)=>(
                            <td key={j} style={{ padding: '0.6rem 0.75rem', color: j===4?'#3A8A44':j===0?'var(--color-text)':'var(--color-text-muted)', fontWeight: j===0||j===4?600:400, borderBottom: '1px solid var(--color-border)', fontSize: '0.82rem' }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life ROM vs NSP Format</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  For Living the Dream, <strong>ROM (XCI)</strong> and <strong>NSP</strong> are functionally equivalent in emulators like Ryujinx. XCI is a physical cartridge dump; NSP is a digital eShop format. Both work identically with Ryujinx. If you plan to install on real Switch hardware with CFW, use NSP via Tinfoil. For PC emulation only, either format works. See our <Link href="/tomodachi-life-living-the-dream/nsp" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>NSP guide</Link> for details.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-3ds" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>3DS ROM Guide →</Link>
                <Link href="/tomodachi-life-living-the-dream/rom" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>LtD ROM Guide →</Link>
              </div>
              <RelatedPages pages={[
                { href: '/tomodachi-life-3ds', label: '3DS Guide', desc: '3DS ROM setup with Citra emulator' },
                { href: '/tomodachi-life-living-the-dream/rom', label: 'LtD ROM Guide', desc: 'XCI and NSP formats for Living the Dream' },
                { href: '/tomodachi-life-living-the-dream/nsp', label: 'NSP Guide', desc: 'NSP vs ROM — which to use for Switch/PC' },
                { href: '/tomodachi-life-pc', label: 'PC Guide', desc: 'Play Tomodachi Life on Windows or Mac' },
                { href: '/tomodachi-life-save-editor', label: 'Save Editor', desc: 'Edit save files after extracting from ROM' },
              ]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
