import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import SiteIcon from '@/components/SiteIcons';

export const metadata: Metadata = {
  title: 'Contact | Tomodachi Life Guide',
  description: 'Contact information and feedback options for tomodachi-life.org.',
  robots: { index: false, follow: true },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #EFF9FF 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
            <div style={{ maxWidth: '760px' }}>
              <span className="pill pill-blue" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Feedback</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Contact</h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
                Send corrections, page suggestions, and community feedback through the most relevant page so the context stays attached to the guide.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '840px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }} className="contact-grid">
              {[
                { title: 'Fix a Guide', text: 'Found an outdated detail or confusing step? Leave a comment on that page so it is easy to verify.', href: '/', icon: 'clipboard' as const, color: '#FF71CE', bg: '#FFF0F8' },
                { title: 'Suggest a Mii Idea', text: 'Use the QR codes page to request a character category or browsing improvement.', href: '/tomodachi-life-qr-codes', icon: 'qr' as const, color: '#4BBFD6', bg: '#EFF9FF' },
                { title: 'Personality Feedback', text: 'Use the personalities page if a quiz result, trait, or chart item needs review.', href: '/tomodachi-life-personalities', icon: 'user' as const, color: '#C77DFF', bg: '#F5EEFF' },
              ].map((card) => (
                <Link key={card.title} href={card.href} style={{ textDecoration: 'none' }}>
                  <article style={{ minHeight: '100%', background: card.bg, border: `1.5px solid ${card.color}44`, borderRadius: 'var(--radius-lg)', padding: '1.4rem', cursor: 'pointer' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '15px', background: 'white', color: card.color, border: `1px solid ${card.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <SiteIcon name={card.icon} size={21} strokeWidth={2.4} />
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.45rem' }}>{card.title}</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{card.text}</p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
