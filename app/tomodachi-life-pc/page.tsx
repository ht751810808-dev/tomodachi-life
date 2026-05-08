import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life PC – How to Play on Windows & Mac (Emulator Guide) 2026',
  description: 'How to play Tomodachi Life on PC. Best emulators for both original 3DS and Living the Dream versions, setup guides for Windows and Mac, and performance tips.',
  keywords: ['tomodachi life pc', 'tomodachi life on pc', 'tomodachi life pc emulator', 'play tomodachi life on computer'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-pc' },
};

export default function PCPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EFF9FF 0%, #EDFFF0 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life PC'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-blue" style={{ marginBottom: '1rem', display: 'inline-flex' }}>PC Guide</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                How to Play{' '}
                <span style={{ background: 'linear-gradient(135deg, #4BBFD6, #6BCB77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Tomodachi Life
                </span>{' '}
                on PC
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>Complete guide to playing <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life on PC</strong> — covering both the original 3DS version via Citra and Living the Dream via Ryujinx/Suyu.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Which Version of Tomodachi Life Do You Want on PC?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {[{title:'Original Tomodachi Life (3DS)',emulator:'Citra / Lime3DS',format:'3DS ROM (.3ds)',color:'#6BCB77',href:'/tomodachi-life-3ds'},{title:'Living the Dream (Switch)',emulator:'Ryujinx / Suyu',format:'XCI ROM or NSP',color:'#FF5AA5',href:'/tomodachi-life-living-the-dream/pc'}].map((v,i)=>(
                    <div key={i} style={{background:'white',border:`2px solid ${v.color}44`,borderRadius:'var(--radius-lg)',padding:'1.5rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:v.color,fontSize:'0.95rem',marginBottom:'0.75rem'}}>{v.title}</div>
                      <div style={{fontSize:'0.82rem',color:'var(--color-text-muted)',marginBottom:'0.3rem'}}>Emulator: <strong style={{color:'var(--color-text)'}}>{v.emulator}</strong></div>
                      <div style={{fontSize:'0.82rem',color:'var(--color-text-muted)',marginBottom:'1rem'}}>Format: <strong style={{color:'var(--color-text)'}}>{v.format}</strong></div>
                      <Link href={v.href} style={{color:v.color,fontSize:'0.85rem',fontWeight:700,textDecoration:'none'}}>Full Guide →</Link>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Best Emulators for Tomodachi Life PC</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[{name:'Citra / Lime3DS',use:'Original Tomodachi Life (3DS)',desc:'Best 3DS emulator. Supports HD upscaling, multiplayer, and touch input. Use for the classic Tomodachi Life experience.',color:'#6BCB77'},{name:'Ryujinx',use:'Living the Dream (Switch)',desc:'Most accurate Switch emulator. Best compatibility for Tomodachi Life: Living the Dream. Open-source.',color:'#7DD8E8'},{name:'Suyu (Yuzu fork)',use:'Living the Dream (Switch)',desc:'Alternative Switch emulator with strong performance. Good Tomodachi Life: Living the Dream support.',color:'#C77DFF'}].map((e,i)=>(
                    <div key={i} style={{background:'white',border:`1.5px solid ${e.color}33`,borderRadius:'var(--radius-md)',padding:'1.1rem 1.25rem',display:'flex',gap:'1rem',alignItems:'flex-start'}}>
                      <div style={{width:'38px',height:'38px',borderRadius:'10px',background:`${e.color}15`,border:`1.5px solid ${e.color}44`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={e.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                      </div>
                      <div>
                        <div style={{display:'flex',gap:'0.5rem',alignItems:'center',marginBottom:'0.2rem'}}>
                          <span style={{fontFamily:'var(--font-display)',fontWeight:700,color:e.color,fontSize:'0.95rem'}}>{e.name}</span>
                          <span style={{fontSize:'0.72rem',background:`${e.color}15`,color:e.color,padding:'0.1rem 0.5rem',borderRadius:'999px',fontWeight:600}}>{e.use}</span>
                        </div>
                        <div style={{fontSize:'0.83rem',color:'var(--color-text-muted)',lineHeight:1.6}}>{e.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life PC System Requirements</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  The original Tomodachi Life runs well on nearly any modern PC via Citra. Tomodachi Life: Living the Dream requires more power due to Switch emulation overhead. See our dedicated <Link href="/tomodachi-life-living-the-dream/pc" style={{ color: 'var(--color-pink-dark)', fontWeight: 600 }}>Living the Dream PC guide</Link> for specific hardware requirements.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[{title:'Original TL (Citra)',req:'Any dual-core CPU from 2012+\n4 GB RAM\nAny GPU with OpenGL 3.3+\nWindows 7+ / macOS 10.14+',color:'#6BCB77'},{title:'Living the Dream (Ryujinx)',req:'Quad-core CPU (2016+)\n8-16 GB RAM\nGTX 1060 / RX 580 or better\nWindows 10+ / macOS 12+',color:'#7DD8E8'}].map((r,i)=>(
                    <div key={i} style={{background:'white',border:`1.5px solid ${r.color}44`,borderRadius:'var(--radius-md)',padding:'1rem'}}>
                      <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:r.color,marginBottom:'0.5rem',fontSize:'0.85rem'}}>{r.title}</div>
                      <pre style={{fontSize:'0.78rem',color:'var(--color-text-muted)',whiteSpace:'pre-wrap',lineHeight:1.7,fontFamily:'var(--font-body)'}}>{r.req}</pre>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Tomodachi Life Living the Dream PC vs Original Version</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  If you're choosing between playing the original Tomodachi Life PC version or Living the Dream on PC, consider: the original offers the classic 3DS charm and is easier to run on older hardware, while Living the Dream provides the full modern Tomodachi Life experience with HD visuals, online features, and expanded content. Both are excellent Tomodachi Life PC options.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/pc" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Living the Dream PC Guide →</Link>
                <Link href="/tomodachi-life-3ds" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>3DS on PC (Citra) →</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
