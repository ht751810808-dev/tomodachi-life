import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life Living the Dream ROM – Download & Setup Guide 2026',
  description: 'Complete guide to Tomodachi Life: Living the Dream ROM files. Compatible formats, setup instructions for Ryujinx and Suyu, and ROM vs NSP comparison.',
  keywords: ['tomodachi life living the dream rom', 'living the dream rom download', 'living the dream nsp rom'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-living-the-dream/rom' },
};

export default function LtDRomPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF5EE 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Living the Dream',href:'/tomodachi-life-living-the-dream'},{label:'ROM Guide'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-yellow" style={{ marginBottom: '1rem', display: 'inline-flex' }}>ROM Guide</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life Living the Dream{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF9F51, #FF5AA5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  ROM
                </span>{' '}
                — Complete Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>Everything about the <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream ROM</strong> — file formats, emulator compatibility, and safe setup instructions.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>What Is the Tomodachi Life Living the Dream ROM?</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  A <strong>ROM</strong> (Read-Only Memory) file for Tomodachi Life: Living the Dream is a digital copy of the game data that can be loaded by a Switch emulator like Ryujinx or Suyu. The Tomodachi Life: Living the Dream ROM contains all game assets, code, and save data structures needed to run the full game on PC.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  For Tomodachi Life: Living the Dream specifically, the terms "ROM" and "NSP" are sometimes used interchangeably in the community. Strictly speaking, the <strong>ROM format</strong> refers to an XCI (Nintendo Switch Game Card Image) dump, while <strong>NSP</strong> is the eShop digital format. Both work with modern emulators.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Compatible ROM Formats for Living the Dream</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[{fmt:'.XCI',desc:'Game card dump — works with Ryujinx and Suyu. Use for most emulator setups.',compat:'Ryujinx ✓ / Suyu ✓',color:'#FF9F51'},{fmt:'.NSP',desc:'eShop format — also widely compatible. Best for Ryujinx with proper key setup.',compat:'Ryujinx ✓ / Suyu ✓',color:'#FF5AA5'},{fmt:'.NCA',desc:'Raw Nintendo Content Archive — requires conversion. Not recommended for beginners.',compat:'Advanced use only',color:'#C77DFF'}].map((f,i)=>(
                    <div key={i} style={{background:'white',border:`1.5px solid ${f.color}33`,borderRadius:'var(--radius-md)',padding:'1rem 1.25rem',display:'flex',gap:'1rem',alignItems:'center'}}>
                      <code style={{background:`${f.color}15`,color:f.color,padding:'0.3rem 0.7rem',borderRadius:'6px',fontFamily:'monospace',fontWeight:700,fontSize:'0.9rem',flexShrink:0}}>{f.fmt}</code>
                      <div>
                        <div style={{fontSize:'0.85rem',color:'var(--color-text)',fontWeight:600,marginBottom:'0.15rem'}}>{f.desc}</div>
                        <div style={{fontSize:'0.78rem',color:f.color}}>{f.compat}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>How to Set Up the Living the Dream ROM</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Obtain a clean Tomodachi Life: Living the Dream XCI or NSP dump','Install Ryujinx and configure prod.keys + firmware (see emulator guide)','Open Ryujinx → Options → Settings → Add game directory containing your ROM','The game will appear in your Ryujinx library — double-click to launch','On first launch, shaders will compile — expect brief stutter on first play only','Save files are stored in Ryujinx\'s save folder, separate from the ROM file'].map((s,i)=>(
                    <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#FFF5EE',border:'1px solid #FFD1A0',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                      <span style={{width:'22px',height:'22px',borderRadius:'50%',background:'#FF9F51',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.72rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life Living the Dream ROM vs NSP</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[{title:'ROM (XCI)',points:['Physical game card dump','Larger file size (full game data)','Compatible with most emulators','No DLC included by default'],color:'#FF9F51'},{title:'NSP',points:['Digital eShop format','Can include DLC packages','Requires proper key setup in Ryujinx','Preferred for Tomodachi Life: LtD'],color:'#FF5AA5'}].map((c,i)=>(
                    <div key={i} style={{background:'white',border:`1.5px solid ${c.color}44`,borderRadius:'var(--radius-md)',padding:'1.25rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:c.color,marginBottom:'0.75rem'}}>{c.title}</div>
                      {c.points.map((p,j)=><div key={j} style={{fontSize:'0.82rem',color:'var(--color-text-muted)',padding:'0.3rem 0',borderBottom:'1px solid #F5F0FF'}}>• {p}</div>)}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/nsp" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>NSP Guide →</Link>
                <Link href="/tomodachi-life-living-the-dream/emulator" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Emulator Setup →</Link>
              </div>

              <RelatedPages pages={[
                { href: '/tomodachi-life-living-the-dream/nsp', label: 'LtD NSP Guide', desc: 'NSP vs ROM — which format to use for LtD' },
                { href: '/tomodachi-life-living-the-dream/emulator', label: 'LtD Emulator Guide', desc: 'Ryujinx and Suyu setup for Living the Dream' },
                { href: '/tomodachi-life-living-the-dream/pc', label: 'LtD PC Guide', desc: 'Full PC setup guide for Living the Dream' },
                { href: '/tomodachi-life-rom', label: 'ROM Overview', desc: '3DS and Switch ROM formats compared' },
                { href: '/tomodachi-life-living-the-dream', label: 'LtD Full Guide', desc: 'Complete hub for Tomodachi Life: Living the Dream' },
                { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Living the Dream on Nintendo Switch hardware' },
              ]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
