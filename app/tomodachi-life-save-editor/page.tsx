import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';

export const metadata: Metadata = {
  title: 'Tomodachi Life Save Editor – Edit Your Island Save File 2026',
  description: 'Complete Tomodachi Life save editor guide. Best tools for editing save files on 3DS and Living the Dream, what you can change, and step-by-step instructions.',
  keywords: ['tomodachi life save editor', 'tomodachi life save file editor', 'tomodachi life editor', 'tomodachi life save file'],
  alternates: { canonical: 'https://www.tomodachi-life.org/tomodachi-life-save-editor' },
};

const editableItems = [
  { category: 'Mii Appearance', items: ['Hair color and style', 'Face shape and features', 'Skin tone', 'Eye color and shape', 'Height and weight sliders'], color: '#FF71CE', bg: '#FFF0F8' },
  { category: 'Mii Personality', items: ['All 16 personality types', 'Personality sub-traits', 'Voice pitch and tone', 'Catchphrase text', 'Compatibility scores'], color: '#C77DFF', bg: '#F5EEFF' },
  { category: 'Relationship Data', items: ['Friendship levels', 'Relationship status', 'Compatibility ratings', 'Rival assignments', 'Family tree connections'], color: '#7DD8E8', bg: '#EFF9FF' },
  { category: 'Island & Items', items: ['Item inventory', 'Island currency (Tomodollars)', 'Apartment layouts', 'Hat and clothing ownership', 'Food and treasure items'], color: '#6BCB77', bg: '#EDFFF0' },
];

const tools = [
  { name: 'JKSM (JK\'s Save Manager)', platform: '3DS', desc: 'The most reliable save manager for 3DS and 2DS. Exports Tomodachi Life save data to your SD card for editing on PC. Required first step for 3DS save editing.', status: 'Recommended', color: '#6BCB77' },
  { name: 'Checkpoint', platform: '3DS', desc: 'Alternative 3DS save manager with a clean UI. Works with Tomodachi Life and has good compatibility with homebrew-enabled consoles.', status: 'Alternative', color: '#7DD8E8' },
  { name: 'Tomodachi Life Save Editor (TLSE)', platform: 'PC', desc: 'Community-built hex editor UI specifically designed for Tomodachi Life save files. Provides readable fields for Mii data, personality, relationships, and items.', status: 'Primary Editor', color: '#C77DFF' },
  { name: 'HxD Hex Editor', platform: 'PC', desc: 'General-purpose hex editor for advanced save editing. Requires knowledge of Tomodachi Life save file structure. Better for precise edits not supported by TLSE.', status: 'Advanced', color: '#FF9F51' },
  { name: 'Ryujinx Save Export (LtD)', platform: 'Switch/PC', desc: 'For Living the Dream on Ryujinx, saves are stored in the emulator\'s NAND directory. Access via File → Open Ryujinx Folder → bis/user/save for direct editing.', status: 'LtD Only', color: '#FF71CE' },
];

export default function SaveEditorPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #FFF0F8 0%, #F5EEFF 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{label:'Home',href:'/'},{label:'Tomodachi Life Save Editor'}]} />
            <div style={{ maxWidth: '700px' }}>
              <span className="pill pill-pink" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Save Editor Guide</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}>
                Tomodachi Life{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF71CE, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Save Editor
                </span>{' '}
                — Full Guide
              </h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                Everything about the <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life save editor</strong> — what you can edit, the best tools for 3DS and Living the Dream, and step-by-step instructions for safe save file editing.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>What Can You Edit in a Tomodachi Life Save File?</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '2rem', maxWidth: '660px' }}>
              A <strong>Tomodachi Life save editor</strong> lets you directly modify your island's saved game data. You can change Mii appearances, swap personality types, adjust relationship values, and add items to your inventory — all without playing through the game normally. Here's a full breakdown of what's editable.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }} className="edit-grid">
              {editableItems.map((section, i) => (
                <div key={i} style={{ background: section.bg, border: `1.5px solid ${section.color}44`, borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: section.color, fontSize: '1rem', marginBottom: '0.75rem' }}>{section.category}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--color-text-muted)' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: section.color, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div style={{ padding: '1rem 1.25rem', background: '#FFFBEE', border: '1.5px solid #FFE08A', borderRadius: 'var(--radius-md)', fontSize: '0.87rem', color: 'var(--color-text-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Note:</strong> Not all fields are supported by every Tomodachi Life save editor tool. Complex data like relationship history events may require hex editing. Always back up your save before making any changes.
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Best Tomodachi Life Save Editor Tools</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '620px' }}>
              Editing a Tomodachi Life save file requires different tools depending on whether you're playing on real 3DS hardware or via emulator. Here are the recommended tools for each setup.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {tools.map((tool, i) => (
                <div key={i} style={{ background: 'white', border: `1.5px solid ${tool.color}33`, borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `${tool.color}15`, border: `1.5px solid ${tool.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>{tool.name}</span>
                      <span style={{ fontSize: '0.72rem', background: `${tool.color}15`, color: tool.color, padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>{tool.platform}</span>
                      <span style={{ fontSize: '0.72rem', background: '#F5F5F5', color: 'var(--color-text-muted)', padding: '0.1rem 0.5rem', borderRadius: '999px', fontWeight: 600 }}>{tool.status}</span>
                    </div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{tool.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0', background: 'white', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 700, marginBottom: '0.75rem' }}>How to Edit Your Tomodachi Life Save File (3DS)</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '620px' }}>
              Follow these steps to safely export, edit, and re-import your <strong>Tomodachi Life save file</strong> on real 3DS hardware with homebrew enabled.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
              {[
                ['Prerequisites', 'Your 3DS must have Luma3DS CFW and homebrew installed. This is required to access save files. Without CFW, save editing is not possible on real hardware.'],
                ['Install JKSM', 'Download JKSM (JK\'s Save Manager) from GitHub and place it in your 3DS\'s /3ds/ folder. Launch it from the Homebrew Launcher.'],
                ['Export Save', 'In JKSM, navigate to Tomodachi Life in the game list. Select "Backup Save" to export the save data to /JKSM/Saves/ on your SD card.'],
                ['Transfer to PC', 'Remove your SD card and transfer the exported save folder to your PC. Create a backup copy before editing — you can always restore if something goes wrong.'],
                ['Edit the Save', 'Open the save file with Tomodachi Life Save Editor (TLSE) or HxD. Make your desired changes to Mii data, personalities, or items. Save the modified file.'],
                ['Reimport Save', 'Copy the modified save back to your SD card in the original JKSM export location. In JKSM, select "Restore Save" to import the edited data back to the game.'],
                ['Verify Changes', 'Launch Tomodachi Life and check that your edits applied correctly. If anything looks wrong, restore your backup and try again with smaller changes.'],
              ].map(([title, desc], i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.9rem 1rem', background: '#FFF0F8', border: '1px solid #FFBBDD', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#FF71CE', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{title}</div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Tomodachi Life Save Editor for Living the Dream (Switch/Ryujinx)</h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Editing saves for <strong>Tomodachi Life: Living the Dream</strong> is different depending on whether you're on real Switch hardware or Ryujinx emulator. On Ryujinx, saves are stored locally in a standard folder structure and can be edited directly. On real Switch with Atmosphere, use JKSM or Checkpoint just like the 3DS process above — the same save editing tools apply after export.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Open Ryujinx and right-click Tomodachi Life: Living the Dream in your game library','Select "Open User Save Directory" — this opens the save folder in your file explorer','Copy the save folder to a backup location before making any changes','Edit the save file with HxD or a compatible LtD save editor','Replace the original save file with your edited version in the same directory','Launch the game in Ryujinx — your changes will be loaded automatically'].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: '#F5EEFF', border: '1px solid #DDB8FF', borderRadius: 'var(--radius-md)', fontSize: '0.87rem', color: 'var(--color-text)' }}>
                  <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#C77DFF', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0 }}>{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Risks and Warnings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }} className="risk-grid">
              {[
                { title: 'Save Corruption', desc: 'Incorrect edits can corrupt your save file. Always keep multiple backups before editing.', color: '#FF5AA5' },
                { title: 'Online Bans (LtD)', desc: 'On real Switch hardware, edited saves could trigger Nintendo\'s ban detection if used online.', color: '#FF9F51' },
                { title: 'Invalid Values', desc: 'Setting stats above maximum values can cause crashes. Use known valid ranges from community wikis.', color: '#C77DFF' },
                { title: 'Version Mismatch', desc: 'Save files from one region may not work correctly after editing if values are region-specific.', color: '#7DD8E8' },
              ].map((risk, i) => (
                <div key={i} style={{ background: `${risk.color}10`, border: `1.5px solid ${risk.color}44`, borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: risk.color, marginBottom: '0.3rem', fontSize: '0.88rem' }}>{risk.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{risk.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/tomodachi-life-3ds" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>3DS CFW Guide →</Link>
              <Link href="/tomodachi-life-rom" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.75rem 1.5rem' }}>ROM Guide →</Link>
            </div>
            <RelatedPages pages={[
              { href: '/tomodachi-life-3ds', label: '3DS CFW Guide', desc: 'Install Luma3DS to enable save file access' },
              { href: '/tomodachi-life-rom', label: 'ROM Guide', desc: 'ROM formats needed for emulator save editing' },
              { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'All 16 personality types you can set via save editor' },
              { href: '/tomodachi-life-living-the-dream/personality-guide', label: 'LtD Personality Guide', desc: 'Personality values in the Switch version' },
              { href: '/tomodachi-life-living-the-dream/emulator', label: 'LtD Emulator', desc: 'Access Living the Dream saves via Ryujinx' },
            ]} />
          </div>
        </section>
      </main>
      <Footer />
      <style>{`.edit-grid,.risk-grid{grid-template-columns:repeat(2,1fr);}@media(max-width:768px){.edit-grid,.risk-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
