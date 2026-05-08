import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life Living the Dream PC – How to Play on Windows & Mac 2026',
  description: 'Step-by-step guide to playing Tomodachi Life: Living the Dream on PC. Best emulator setup, system requirements, installation, and troubleshooting tips for Windows and Mac.',
  keywords: ['tomodachi life living the dream pc', 'tomodachi life living the dream on pc', 'living the dream pc emulator'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-living-the-dream/pc' },
};

export default function LtDPCPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EFF9FF 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Living the Dream',href:'/tomodachi-life-living-the-dream'},{label:'Play on PC'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-blue" style={{ marginBottom: '1rem', display: 'inline-flex' }}>PC Guide</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life Living the Dream{' '}
                <span style={{ background: 'linear-gradient(135deg, #4BBFD6, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  PC Guide
                </span>
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>How to play <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream on PC</strong> — best emulator, system requirements, and step-by-step setup for Windows and Mac.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>System Requirements for Tomodachi Life Living the Dream PC</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[['Minimum Specs','Intel Core i5-8400 / Ryzen 5 2600\n8 GB RAM\nGTX 1060 / RX 580\nWindows 10 64-bit'],['Recommended Specs','Intel Core i7-10700 / Ryzen 7 3700X\n16 GB RAM\nRTX 3060 / RX 6600 XT\nWindows 11 64-bit']].map(([title,specs],i)=>(
                    <div key={i} style={{ background: i===0?'#F0FAFF':'#FFF0F8', border: `1.5px solid ${i===0?'#B8EDF5':'#FFB3E3'}`, borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: i===0?'#4BBFD6':'#FF5AA5', marginBottom: '0.75rem', fontSize: '0.9rem' }}>{title}</div>
                      <pre style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', whiteSpace: 'pre-wrap', lineHeight: 1.7, fontFamily: 'var(--font-body)' }}>{specs}</pre>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Best Emulator for Tomodachi Life Living the Dream PC</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                  Since Living the Dream is a Nintendo Switch game, you need a Switch emulator to play it on PC. The top options for <strong>Tomodachi Life Living the Dream PC</strong> are:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[{name:'Ryujinx',desc:'Open-source, highly stable, best accuracy for Living the Dream. Actively maintained.',color:'#4BBFD6',recommended:true},{name:'Suyu (Yuzu fork)',desc:'Excellent performance, slightly better FPS on lower-end hardware. Good Living the Dream compatibility.',color:'#C77DFF',recommended:false}].map((emu,i)=>(
                    <div key={i} style={{ background: emu.recommended?'#EFF9FF':'#F5EEFF', border: `2px solid ${emu.color}44`, borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: emu.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: emu.color, marginBottom: '0.25rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          {emu.name} {emu.recommended && <span style={{ background: '#EDFFF0', border: '1px solid #AEEAB6', color: '#3A8A44', fontSize: '0.7rem', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>Recommended</span>}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{emu.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Step-by-Step: Play Tomodachi Life Living the Dream on PC</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['Download and install Ryujinx from the official repository (ryujinx.org)','Obtain the Tomodachi Life: Living the Dream ROM or NSP file','In Ryujinx, go to Options → Settings → System, set system region and language','Go to File → Open Ryujinx Folder, place your keys (prod.keys) in the system folder','In Ryujinx, File → Load Application from File → select the Living the Dream ROM/NSP','Configure controls: Options → Settings → Input — map keyboard or controller','Recommended graphics settings: API = Vulkan, Resolution = 2x or native for best performance'].map((step,i)=>(
                    <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#EFF9FF',border:'1px solid #B8EDF5',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                      <span style={{width:'24px',height:'24px',borderRadius:'50%',background:'#4BBFD6',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.75rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Common Issues & Fixes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[['Game won\'t launch','Ensure you have valid prod.keys in the Ryujinx system folder. Check the Ryujinx compatibility list for Living the Dream.'],['Low FPS / lag','Enable "Limit to application\'s requested access" and switch graphics API to Vulkan. Lower resolution scaling.'],['Crash on save','Make sure your ROM/NSP is a clean dump. Re-obtain the file if corrupted.'],['Audio glitches','In Ryujinx settings, try switching audio backend between SDL2 and OpenAL.']].map(([issue,fix],i)=>(
                    <div key={i} style={{background:'white',border:'1.5px solid var(--color-border)',borderRadius:'var(--radius-md)',padding:'1rem 1.25rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'var(--color-text)',fontSize:'0.9rem',marginBottom:'0.3rem'}}>{issue}</div>
                      <div style={{fontSize:'0.82rem',color:'var(--color-text-muted)',lineHeight:1.7}}>{fix}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/emulator" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Full Emulator Guide →</Link>
                <Link href="/tomodachi-life-living-the-dream/rom" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>ROM Guide →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
