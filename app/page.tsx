import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PersonalityPreview from '@/components/PersonalityPreview';
import LivingTheDreamBanner from '@/components/LivingTheDreamBanner';
import MiiQRSection from '@/components/MiiQRSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import CommentBox from '@/components/CommentBox';
import PersonalityQuiz from '@/components/PersonalityQuiz';
import IslandChecklist from '@/components/IslandChecklist';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tomodachi Life – Complete Guide, Personalities, QR Codes & More | 2026',
  description:
    'Everything about Tomodachi Life: all 16 personalities guide, Mii QR codes, Living the Dream walkthrough, 3DS & Switch info, ROM guide, and save editor. Your #1 Tomodachi Life fan resource.',
  keywords: [
    'tomodachi life',
    'tomodachi life personalities',
    'tomodachi life personality chart',
    'tomodachi life living the dream',
    'tomodachi life qr codes',
    'tomodachi life mii',
    'tomodachi life switch',
    'tomodachi life 3ds',
    'nintendo tomodachi life',
  ],
  alternates: { canonical: 'https://tomodachi-life.org' },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Tomodachi Life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tomodachi Life is a life simulation game by Nintendo for the Nintendo 3DS, released in 2013 in Japan and 2014 worldwide. Players populate an island apartment with Mii characters that interact, build relationships, and experience daily island life.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Tomodachi Life: Living the Dream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tomodachi Life: Living the Dream is the 2026 Nintendo Switch sequel featuring enhanced gameplay, online features, and improved graphics. It can also be played on PC via emulator.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many personality types are in Tomodachi Life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tomodachi Life features 16 unique personality types divided into Easy-going, Independent, Outgoing, and Confident categories.',
      },
    },
  ],
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tomodachi Life Guide',
  url: 'https://tomodachi-life.org',
  description: 'The #1 fan resource for Tomodachi Life — personalities, QR codes, Living the Dream guide, and more.',
};

const subpageLinks = [
  { href: '/tomodachi-life-living-the-dream', label: 'Living the Dream Guide', desc: 'Complete LtD walkthrough', color: '#FF5AA5', bg: '#FFF0F8', border: '#FFB3E3' },
  { href: '/tomodachi-life-personalities', label: 'Personalities Guide', desc: 'All 16 personality types', color: '#C77DFF', bg: '#F5EEFF', border: '#E0C0FF' },
  { href: '/tomodachi-life-qr-codes', label: 'Mii QR Codes', desc: 'Community QR collection', color: '#4BBFD6', bg: '#EFF9FF', border: '#B8EDF5' },
  { href: '/tomodachi-life-switch', label: 'Tomodachi Life Switch', desc: 'Switch platform guide', color: '#F43F5E', bg: '#FFF5F5', border: '#FFC0C0' },
  { href: '/tomodachi-life-3ds', label: 'Tomodachi Life 3DS', desc: '3DS & ROM guide', color: '#6BCB77', bg: '#EDFFF0', border: '#AEEAB6' },
  { href: '/tomodachi-life-2', label: 'Tomodachi Life 2', desc: 'Sequel news & rumors', color: '#FF9F51', bg: '#FFF5EE', border: '#FFD1A0' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }} />

      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Tomodachi Life (SEO content block, 300+ words) */}
        <section style={{ padding: '5rem 0', background: 'white', borderTop: '2px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
              <div>
                <div className="section-label">About Tomodachi Life</div>
                <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  What Is{' '}
                  <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Tomodachi Life?
                  </span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>
                  <p>
                    <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life</strong> is a life simulation video game developed and published by Nintendo, originally released for the Nintendo 3DS in April 2013 in Japan and June 2014 worldwide. In Tomodachi Life, players create and manage an island apartment building populated entirely by Mii characters — the customizable avatars used across Nintendo's platforms.
                  </p>
                  <p>
                    The core appeal of Tomodachi Life lies in watching your Mii characters live out their daily island lives with minimal player intervention. Each Tomodachi Life Mii is assigned one of <Link href="/tomodachi-life-personalities" style={{ color: 'var(--color-pink-dark)', fontWeight: 600, textDecoration: 'underline' }}>16 distinct personality types</Link> that dictates how they speak, act, and interact with other islanders. Relationships form naturally — friendships deepen, rivalries emerge, and even romance can blossom between Tomodachi Life Miis.
                  </p>
                  <p>
                    Tomodachi Life features dozens of mini-games, news broadcasts, live concerts, and island events that keep each playthrough fresh. Players can scan <Link href="/tomodachi-life-qr-codes" style={{ color: 'var(--color-blue-dark)', fontWeight: 600, textDecoration: 'underline' }}>Mii QR codes</Link> to add celebrity lookalikes, game characters, or community Miis to their island, creating an endlessly personalized experience.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.95rem', paddingTop: '2.8rem' }}>
                  <p>
                    Originally a Japan-exclusive title (<em>Tomodachi Collection: New Life</em>), the worldwide release of Tomodachi Life on Nintendo 3DS introduced global audiences to the game's uniquely Japanese humor and slice-of-life charm. The game sold over 3.2 million copies worldwide on 3DS, earning a passionate fan community that continues to thrive today.
                  </p>
                  <p>
                    In 2026, Nintendo released <strong style={{ color: 'var(--color-text)' }}>Tomodachi Life: Living the Dream</strong> for the Nintendo Switch — a major sequel that expands on the original with online multiplayer, enhanced Mii customization, new island locations, and deeper relationship mechanics. <Link href="/tomodachi-life-living-the-dream" style={{ color: 'var(--color-pink-dark)', fontWeight: 600, textDecoration: 'underline' }}>Tomodachi Life: Living the Dream</Link> can also be played on PC via emulator using ROM or NSP files.
                  </p>
                  <p>
                    Whether you're a returning fan of the 3DS original or discovering Tomodachi Life for the first time through Living the Dream, this guide covers everything you need — from the complete <Link href="/tomodachi-life-personalities" style={{ color: 'var(--color-pink-dark)', fontWeight: 600, textDecoration: 'underline' }}>Tomodachi Life personality chart</Link> to <Link href="/tomodachi-life-qr-codes" style={{ color: 'var(--color-blue-dark)', fontWeight: 600, textDecoration: 'underline' }}>Mii QR codes</Link>, platform guides, and save editing tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Content Nav — links to all P1 sub-pages */}
        <section style={{ padding: '4rem 0', background: '#FFF5FB', borderTop: '2px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="section-label">Explore Tomodachi Life</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700 }}>
                Everything About Tomodachi Life
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="nav-grid">
              {subpageLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: link.bg,
                    border: `1.5px solid ${link.border}`,
                    borderRadius: 'var(--radius-lg)',
                    textDecoration: 'none',
                    transition: 'all 200ms var(--bounce)',
                    cursor: 'pointer',
                  }}
                  className="nav-card-link"
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'white', border: `1.5px solid ${link.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={link.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.2rem' }}>{link.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Game Features */}
        <PersonalityQuiz />

        {/* 5. Island Checklist */}
        <IslandChecklist />

        {/* 6. Game Features */}
        <Features />

        {/* 7. Personality System Preview */}
        <PersonalityPreview />

        {/* 8. Living the Dream Banner */}
        <LivingTheDreamBanner />

        {/* 9. Mii QR Codes Section */}
        <MiiQRSection />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Final CTA */}
        <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #FFF0F8 0%, #F5EEFF 50%, #EFF8FF 100%)', textAlign: 'center' }}>
          <div className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                Start Your{' '}
                <span style={{ background: 'linear-gradient(135deg, #FF5AA5, #C77DFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Tomodachi Life
                </span>{' '}
                Adventure
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                From setting up your island to mastering every Tomodachi Life personality type, we've got everything covered. Dive in and discover why millions of fans love Tomodachi Life.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/tomodachi-life-personalities" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                  Explore Personality Chart
                </Link>
                <Link href="/tomodachi-life-living-the-dream" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                  Living the Dream Guide
                </Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SocialShare title="Tomodachi Life – Complete Guide, Personalities & QR Codes" url="https://tomodachi-life.org" />
              </div>
            </div>
          </div>
        </section>

        {/* 12. Island Chat (no-login comments) */}
        <CommentBox page="home" />
      </main>

      <Footer />

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        .nav-grid { grid-template-columns: repeat(3, 1fr); }
        .nav-card-link { transition: transform 200ms ease, box-shadow 200ms ease; }
        .nav-card-link:hover { transform: translateY(-3px); box-shadow: 0 6px 24px rgba(0,0,0,0.08); }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .nav-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .nav-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
