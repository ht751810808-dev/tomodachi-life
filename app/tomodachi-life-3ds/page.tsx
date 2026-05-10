import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life 3DS – Complete Guide, ROM, Citra Emulator Setup 2026',
  description: 'Complete guide to Tomodachi Life on Nintendo 3DS. ROM download info, Citra emulator setup, Mii setup, gameplay tips, and how it compares to Living the Dream.',
  keywords: ['tomodachi life 3ds', 'tomodachi life 3ds rom', 'tomodachi life 3ds emulator', 'citra tomodachi life'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-3ds' },
};

export default function ThreeDSPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EDFFF0 0%, #F0FAFF 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Tomodachi Life 3DS' }]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-green" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Nintendo 3DS Classic</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #6BCB77, #4BBFD6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  3DS
                </span>{' '}
                — Complete Guide & ROM
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Everything about the original <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life on Nintendo 3DS</strong> — from gameplay basics to ROM setup, Citra emulator configuration, and how it compares to Living the Dream.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3.5rem' }} className="content-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem' }}>About Tomodachi Life on Nintendo 3DS</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                    The original <strong>Tomodachi Life</strong> launched on Nintendo 3DS in April 2013 in Japan as <em>Tomodachi Collection: New Life</em>, then worldwide in June 2014. It was the first Tomodachi Life game to reach Western audiences, introducing the island life simulation genre to a global fanbase. The 3DS version sold over 3.2 million copies worldwide and remains a beloved Nintendo title.
                  </p>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    Tomodachi Life 3DS features 3D visuals using the console's stereoscopic display, StreetPass functionality, and a full suite of island activities. The 3DS version supports Mii QR codes via the Mii Maker app, allowing you to populate your island with any character imaginable.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 3DS ROM — Formats & Setup
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    The <strong>Tomodachi Life 3DS ROM</strong> is available in <code style={{ background: '#F0F4FF', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.85rem' }}>.3ds</code> and <code style={{ background: '#F0F4FF', padding: '0.15rem 0.4rem', borderRadius: '4px', fontSize: '0.85rem' }}>.cia</code> formats. The <code>.3ds</code> format is used by most 3DS emulators including Citra. The <code>.cia</code> format is used for installation on real 3DS hardware with custom firmware (Luma3DS).
                  </p>
                  <Link href="/tomodachi-life-rom" className="pill pill-green" style={{ cursor: 'pointer', display: 'inline-flex', marginBottom: '1rem' }}>Full ROM Guide →</Link>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {[['Format', '.3ds (emulator) / .cia (CFW hardware)'],['Region', 'EUR, USA, JPN versions available'],['Size', '~1.5 GB'],['Emulator', 'Citra (3DS), also runs on modern Citra forks']].map(([k,v],i)=>(
                      <div key={i} style={{display:'flex',gap:'1rem',padding:'0.6rem 1rem',background:'#F0FFF4',border:'1px solid #AEEAB6',borderRadius:'var(--radius-sm)',fontSize:'0.85rem'}}>
                        <span style={{fontWeight:700,color:'#3A8A44',minWidth:'80px'}}>{k}</span>
                        <span style={{color:'var(--color-text-muted)'}}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 3DS Citra Emulator Setup
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                    <strong>Citra</strong> (and its modern forks like <strong>Lime3DS</strong> and <strong>Azahar</strong>) is the primary emulator for playing Tomodachi Life 3DS on PC. Here's a quick setup overview:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {['Download and install Citra or Lime3DS from the official repository','Obtain your Tomodachi Life 3DS ROM (.3ds format)','Open Citra → File → Load File → select your ROM','Recommended settings: Enable VSync, 2x or 3x resolution for HD output','Enable "Accurate Multiplication" in graphics for best compatibility','Use touch screen emulation for accessing the touch-based island menu'].map((step,i)=>(
                      <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#F0FFF4',border:'1px solid #AEEAB6',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                        <span style={{width:'22px',height:'22px',borderRadius:'50%',background:'#6BCB77',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.72rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 3DS Mii Setup Guide
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    In Tomodachi Life 3DS, Miis are managed through the Mii Maker app on your 3DS or within Citra. You can scan <Link href="/tomodachi-life-qr-codes" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Mii QR codes</Link> to import characters, create custom Miis from scratch, or transfer Miis from a Wii U or Wii if you have save data. The more Miis you add to your Tomodachi Life island, the more social interactions and drama unfolds.
                  </p>
                </div>

                <div>
                  <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                    Tomodachi Life 3DS vs Living the Dream
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                    While the original Tomodachi Life 3DS is a classic, <Link href="/tomodachi-life-living-the-dream" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Tomodachi Life: Living the Dream</Link> (Switch, 2026) offers significant improvements: HD visuals, online multiplayer, new gameplay systems, and enhanced Mii interactions. If you're new to Tomodachi Life, Living the Dream is the recommended starting point. If you want the original experience or nostalgia, the 3DS version via Citra is the way to go.
                  </p>
                </div>
              </div>

              <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ background: '#EDFFF0', border: '1.5px solid #AEEAB6', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem' }}>3DS Quick Facts</div>
                  {[['Original Release','April 2013 (JP)'],['Western Release','June 2014'],['Platform','Nintendo 3DS'],['Copies Sold','3.2M+ worldwide'],['ROM Format','.3ds / .cia'],['Best Emulator','Citra / Lime3DS']].map(([k,v])=>(
                    <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'0.4rem 0',borderBottom:'1px solid #AEEAB6',fontSize:'0.82rem'}}>
                      <span style={{color:'var(--color-text-muted)'}}>{k}</span>
                      <span style={{fontWeight:600,color:'var(--color-text)'}}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.75rem' }}>Related Pages</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[{href:'/tomodachi-life-rom',label:'ROM Guide'},{href:'/tomodachi-life-pc',label:'PC Play Guide'},{href:'/tomodachi-life-qr-codes',label:'QR Codes'},{href:'/tomodachi-life-living-the-dream',label:'Living the Dream'}].map(p=>(
                      <Link key={p.href} href={p.href} className="sidebar-link-green" style={{fontSize:'0.875rem',fontWeight:600,textDecoration:'none'}}>→ {p.label}</Link>
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
              { href: '/tomodachi-life-rom', label: 'ROM Guide', desc: '3DS .3ds and .cia ROM formats explained' },
              { href: '/tomodachi-life-pc', label: 'PC Guide', desc: 'Play Tomodachi Life on Windows or Mac via Citra' },
              { href: '/tomodachi-life-qr-codes', label: 'QR Codes', desc: 'How to scan Mii QR codes in Citra emulator' },
              { href: '/tomodachi-life-save-editor', label: 'Save Editor', desc: 'Edit 3DS save files with JKSM and CFW' },
              { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'All 16 personality types in the original game' },
              { href: '/tomodachi-life-hk', label: 'HK Version', desc: 'Playing the 3DS version in Hong Kong' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.content-grid{grid-template-columns:2fr 1fr;}.sidebar-link-green{color:#3A8A44;}.sidebar-link-green:hover{color:#FF5AA5;}@media(max-width:900px){.content-grid{grid-template-columns:1fr!important;}}` }</style>
    </>
  );
}
