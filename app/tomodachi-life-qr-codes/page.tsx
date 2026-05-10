import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import MiiQRGallery from '@/components/MiiQRGallery';
import SiteIcon, { type SiteIconName } from '@/components/SiteIcons';

export const metadata: Metadata = {
  title: 'Tomodachi Life QR Codes – Mii QR Code Collection & Scanning Guide 2026',
  description: 'Best Tomodachi Life QR codes for Mii characters. How to scan Mii QR codes in Tomodachi Life, popular celebrity & character Miis, and how to create your own.',
  keywords: ['tomodachi life qr codes', 'tomodachi life mii qr codes', 'tomodachi life mii', 'tomodachi life qr code scanner'],
  alternates: { canonical: 'https://tomodachi-life.org/tomodachi-life-qr-codes' },
};

const miiCategories = [
  { name: 'Nintendo Characters', desc: 'Mario, Link, Samus, Kirby, Pikachu, and more official Nintendo Mii designs', color: '#FF5AA5', bg: '#FFF0F8', count: '50+' },
  { name: 'Celebrity Miis', desc: 'Famous people recreated as Tomodachi Life Miis — actors, musicians, athletes', color: '#C77DFF', bg: '#F5EEFF', count: '200+' },
  { name: 'Anime & Manga', desc: 'Popular anime characters adapted into Tomodachi Life Mii QR codes', color: '#7DD8E8', bg: '#EFF9FF', count: '150+' },
  { name: 'Video Game Characters', desc: 'Characters from across gaming history made into Tomodachi Life Miis', color: '#6BCB77', bg: '#EDFFF0', count: '300+' },
  { name: 'Community Made', desc: 'Fan-crafted original Miis and creative character designs from the Tomodachi Life community', color: '#FF9F51', bg: '#FFF5EE', count: '500+' },
  { name: 'Historical Figures', desc: 'Famous historical personalities recreated in Tomodachi Life Mii form', color: '#FFD93D', bg: '#FFFBEE', count: '80+' },
];

export default function QRCodesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EFF9FF 0%, #EDFFF0 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life QR Codes'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-blue" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Mii QR Codes</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #4BBFD6, #6BCB77)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  QR Codes
                </span>{' '}
                — Complete Mii Collection
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                The ultimate <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life QR code</strong> resource — how to scan Mii QR codes, create your own, and find the best community Mii collections for your island.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>How to Scan Tomodachi Life Mii QR Codes</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '620px' }}>
              Scanning <strong>Tomodachi Life Mii QR codes</strong> is simple — follow these steps to import any Mii character into your Tomodachi Life island in seconds. This works on real 3DS hardware, Citra emulator, and Tomodachi Life: Living the Dream on Switch.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }} className="steps-grid">
              {([
                {step:'1',icon:'phone',title:'Open Mii Maker',desc:'Launch the Mii Maker app on your 3DS or in Citra emulator. In Living the Dream, access Mii settings from the island menu.'},
                {step:'2',icon:'camera',title:'Select QR Code Option',desc:'Choose "QR Code / Image Options" from the Mii Maker main menu to enter the QR code scanning mode.'},
                {step:'3',icon:'badgeCheck',title:'Scan the QR Code',desc:'Point your camera at any Tomodachi Life Mii QR code on screen or printed out. The Mii will be imported instantly.'}
              ] as {step:string;icon:SiteIconName;title:string;desc:string}[]).map((s,i)=>(
                <div key={i} style={{background:'#F0FAFF',border:'1.5px solid #B8EDF5',borderRadius:'var(--radius-lg)',padding:'1.5rem',textAlign:'center'}}>
                  <div style={{width:'48px',height:'48px',borderRadius:'16px',background:'white',color:'#4BBFD6',display:'inline-flex',alignItems:'center',justifyContent:'center',marginBottom:'0.75rem',border:'1px solid #B8EDF5'}}>
                    <SiteIcon name={s.icon} size={24} strokeWidth={2.4} />
                  </div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'#4BBFD6',fontSize:'0.9rem',marginBottom:'0.5rem'}}>Step {s.step}: {s.title}</div>
                  <div style={{fontSize:'0.82rem',color:'var(--color-text-muted)',lineHeight:1.7}}>{s.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem 1.25rem', background: '#EDFFF0', border: '1.5px solid #AEEAB6', borderRadius: 'var(--radius-md)', fontSize: '0.87rem', color: 'var(--color-text-muted)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '10px', background: 'white', color: '#3A8A44', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <SiteIcon name="sparkle" size={16} />
              </span>
              <span><strong style={{ color: 'var(--color-text)' }}>Tip:</strong> In Citra emulator, you can scan Tomodachi Life Mii QR codes by importing the image file directly: Mii Maker → QR Code → Import from File.</span>
            </div>
          </div>
        </section>

        <MiiQRGallery />

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Tomodachi Life Mii QR Code Categories</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '580px' }}>
              Our Tomodachi Life Mii QR code collection spans thousands of Miis across dozens of categories. Whether you want celebrity Miis, Nintendo characters, or fan-made creations, there's a Tomodachi Life QR code for every island.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2.5rem' }} className="cat-grid">
              {miiCategories.map((cat, i) => (
                <div key={i} className="cat-card" style={{ background: cat.bg, border: `1.5px solid ${cat.color}44`, borderRadius: 'var(--radius-lg)', padding: '1.5rem', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: cat.color, fontSize: '0.95rem' }}>{cat.name}</div>
                    <span style={{ background: 'white', color: cat.color, fontSize: '0.72rem', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 700, border: `1px solid ${cat.color}44` }}>{cat.count}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{cat.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>How to Create Your Own Tomodachi Life Mii QR Code</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Creating and sharing your own <strong>Tomodachi Life Mii QR codes</strong> is easy. Any Mii you create in Mii Maker can be exported as a QR code and shared with other Tomodachi Life players. In Living the Dream, this process is even more streamlined with the new Share functionality.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {['Open Mii Maker and select the Mii you want to share','Choose "QR Code / Image Options" from the Mii menu','Select "Save QR Code Image" to export to your SD card or gallery','Share the QR code image on social media, Discord, or Tomodachi Life community sites','Other players can scan your Tomodachi Life Mii QR code to add your character to their island'].map((s,i)=>(
                <div key={i} style={{display:'flex',gap:'0.75rem',alignItems:'flex-start',padding:'0.75rem 1rem',background:'#EFF9FF',border:'1px solid #B8EDF5',borderRadius:'var(--radius-md)',fontSize:'0.88rem',color:'var(--color-text)'}}>
                  <span style={{width:'22px',height:'22px',borderRadius:'50%',background:'#4BBFD6',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.72rem',fontWeight:700,flexShrink:0}}>{i+1}</span>
                  {s}
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '1rem' }}>Troubleshooting Tomodachi Life QR Code Scanning</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {[['QR code won\'t scan on 3DS','Ensure the QR code image is large enough (display on full screen). Try printing the QR code and scanning from paper.'],['QR code not working in Citra','In Citra, use File → Import → Mii QR Code Image instead of the camera scan method.'],['Mii looks wrong after import','Some Tomodachi Life Mii QR codes were created for specific regions. Try a different regional version of the QR code.'],['Can\'t scan in Living the Dream','Ensure you\'re using the Mii Maker app inside LtD, not the external Mii Manager. QR code scanning is in Mii settings.']].map(([issue,fix],i)=>(
                <div key={i} style={{background:'white',border:'1.5px solid var(--color-border)',borderRadius:'var(--radius-md)',padding:'1rem 1.25rem'}}>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:700,color:'var(--color-text)',fontSize:'0.88rem',marginBottom:'0.3rem'}}>{issue}</div>
                  <div style={{fontSize:'0.82rem',color:'var(--color-text-muted)',lineHeight:1.7}}>{fix}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-personalities" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Personality Guide →</Link>
              <Link href="/tomodachi-life-save-editor" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>Save Editor →</Link>
            </div>
            <RelatedPages pages={[
              { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'All 16 Mii personality types explained' },
              { href: '/tomodachi-life-3ds', label: '3DS Guide', desc: 'How to scan QR codes on real 3DS hardware' },
              { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream', desc: 'QR code sharing in the Switch sequel' },
              { href: '/tomodachi-life-save-editor', label: 'Save Editor', desc: 'Edit Mii appearance and personality directly' },
              { href: '/tomodachi-life-pc', label: 'Play on PC', desc: 'Scan QR codes in Citra or Ryujinx emulator' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.steps-grid,.cat-grid{grid-template-columns:repeat(3,1fr);}.cat-card{transition:transform 200ms ease,box-shadow 200ms ease;}.cat-card:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,0.08);}@media(max-width:768px){.steps-grid,.cat-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
