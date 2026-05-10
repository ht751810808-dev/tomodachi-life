import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import SiteIcon from '@/components/SiteIcons';
import LtDSubNav from '@/components/LtDSubNav';

export const metadata: Metadata = {
  title: 'Tomodachi Life Living the Dream NSP – Nintendo Switch Format Guide 2026',
  description: 'Complete guide to Tomodachi Life: Living the Dream NSP format. Installation on Switch CFW, Ryujinx emulator setup, and NSP vs ROM comparison.',
  keywords: ['tomodachi life living the dream nsp', 'living the dream nsp switch', 'living the dream nsp ryujinx'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-living-the-dream/nsp' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Install Tomodachi Life Living the Dream NSP on Nintendo Switch',
  description: 'Install the Living the Dream NSP file on a Nintendo Switch running Atmosphere CFW using Tinfoil.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Install Atmosphere CFW', text: 'Install Atmosphere custom firmware on your Nintendo Switch.' },
    { '@type': 'HowToStep', position: 2, name: 'Copy NSP to SD card', text: 'Copy the Tomodachi Life: Living the Dream NSP file to your Switch SD card.' },
    { '@type': 'HowToStep', position: 3, name: 'Install Tinfoil', text: 'Install Tinfoil or Goldleaf NSP installer from the Homebrew App Store.' },
    { '@type': 'HowToStep', position: 4, name: 'Install the NSP', text: 'Open Tinfoil → File Browser → navigate to your NSP file → select Install.' },
    { '@type': 'HowToStep', position: 5, name: 'Launch the game', text: 'Wait for installation to complete, then launch Tomodachi Life: Living the Dream from the home menu.' },
  ],
};

export default function LtDNSPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <LtDSubNav />
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF5F5 0%, #F5EEFF 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Living the Dream',href:'/tomodachi-life-living-the-dream'},{label:'NSP Guide'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-pink" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Switch NSP</span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life Living the Dream{' '}
                <span style={{ background: 'linear-gradient(135deg, #F43F5E, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  NSP
                </span>{' '}
                — Nintendo Switch Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>Complete guide to the <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream NSP format</strong> — installation on Switch with Atmosphere CFW and Ryujinx emulator setup.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>What Is Tomodachi Life Living the Dream NSP?</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1rem' }}>
                  <strong>NSP</strong> (Nintendo Submission Package) is Nintendo's digital eShop format for Switch games. A Tomodachi Life: Living the Dream NSP file is a complete digital copy of the game that can be installed on a Switch running Atmosphere custom firmware (CFW), or loaded directly in Ryujinx emulator on PC.
                </p>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  The NSP format for Tomodachi Life: Living the Dream is particularly useful because it can include the base game plus any DLC packages in a single install. On Ryujinx, NSP files load identically to the physical XCI format with proper key setup.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Installing Living the Dream NSP on Nintendo Switch</h2>
                <div style={{ padding: '1rem 1.25rem', background: '#FFF5F5', border: '1.5px solid #FFC0C0', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.85rem', color: '#B83232', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <SiteIcon name="alertTriangle" size={18} strokeWidth={2.3} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                  <span>Installing NSP files on Switch requires Atmosphere CFW. This modifies your Switch and may affect your Nintendo account. Proceed at your own risk and only on a secondary/offline Switch.</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Install Atmosphere CFW on your Nintendo Switch (visit AtmosphereNX GitHub)','Copy the Tomodachi Life: Living the Dream NSP to your Switch\'s SD card','Install Tinfoil or Goldleaf NSP installer from the Homebrew App Store','Open Tinfoil → File Browser → navigate to your NSP file','Select the Living the Dream NSP and choose "Install"','Wait for installation to complete — game appears in home menu','Launch Tomodachi Life: Living the Dream normally from home menu'].map((s,i)=>(
                    <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#FFF5F5',border:'1px solid #FFC0C0',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                      <span style={{width:'22px',height:'22px',borderRadius:'50%',background:'#F43F5E',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.72rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Playing Living the Dream NSP on Ryujinx Emulator</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Install Ryujinx and configure with prod.keys + firmware (see emulator guide)','Place your Living the Dream NSP file in an accessible folder','In Ryujinx: File → Load Application → select the NSP file, OR','Go to Options → Settings → Game Directories → add the NSP folder for library view','For DLC NSP: File → Install Files to NAND → select the DLC NSP file separately','Launch from your Ryujinx game library — no additional configuration needed'].map((s,i)=>(
                    <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#F5EEFF',border:'1px solid #E0C0FF',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                      <span style={{width:'22px',height:'22px',borderRadius:'50%',background:'#C77DFF',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.72rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>NSP vs ROM: Which Is Better for Living the Dream?</h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85 }}>
                  For emulator use, NSP and XCI (ROM) are functionally identical in Ryujinx — both run at the same speed and quality. The main advantage of NSP is that DLC can be installed alongside the base game, while XCI typically contains only the base game dump. For Switch CFW hardware installation, NSP (via Tinfoil) is the standard approach.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/tomodachi-life-living-the-dream/rom" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>ROM Guide →</Link>
                <Link href="/tomodachi-life-switch" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Switch Guide →</Link>
              </div>

              <RelatedPages pages={[
                { href: '/tomodachi-life-living-the-dream/rom', label: 'LtD ROM Guide', desc: 'XCI ROM format vs NSP — full comparison' },
                { href: '/tomodachi-life-living-the-dream/emulator', label: 'LtD Emulator Guide', desc: 'Ryujinx setup for loading NSP files' },
                { href: '/tomodachi-life-living-the-dream/pc', label: 'LtD PC Guide', desc: 'Complete PC setup for Living the Dream' },
                { href: '/tomodachi-life-switch', label: 'Switch Guide', desc: 'Install NSP on Nintendo Switch with Atmosphere CFW' },
                { href: '/tomodachi-life-living-the-dream', label: 'LtD Full Guide', desc: 'Complete hub for Tomodachi Life: Living the Dream' },
                { href: '/tomodachi-life-rom', label: 'ROM Overview', desc: 'All Tomodachi Life ROM formats and emulators' },
              ]} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
