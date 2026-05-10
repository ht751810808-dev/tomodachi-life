import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tomodachi Life Guide',
  description: 'Privacy policy for tomodachi-life.org, including analytics, ads, comments, and browser storage.',
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '88px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <section style={{ padding: '3.5rem 0 3rem', background: 'linear-gradient(135deg, #F5EEFF 0%, #FFF0F8 100%)', borderBottom: '2px solid var(--color-border)' }}>
          <div className="container">
            <BreadcrumbNav crumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
            <div style={{ maxWidth: '760px' }}>
              <span className="pill pill-purple" style={{ marginBottom: '1rem', display: 'inline-flex' }}>Site Info</span>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Privacy Policy</h1>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
                This page explains the basic data used by tomodachi-life.org to keep the site running, improve the experience, and support comments and advertising.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {[
                ['Analytics', 'We use Google Analytics to understand aggregate site traffic, popular pages, and general usage patterns. This helps us improve navigation and user experience.'],
                ['Advertising', 'This site may use Google AdSense and advertising scripts. Ad providers may use cookies or similar technologies to show and measure ads.'],
                ['Comments', 'If you leave a public comment, the name and message you submit are stored so the comment can appear on the page. Do not post private information in comments.'],
                ['Browser Storage', 'Interactive tools such as saved checklist progress, quiz results, and favorite Mii ideas may use localStorage in your browser. This data stays in your browser unless you clear it.'],
                ['Unofficial Fan Site', 'tomodachi-life.org is an unofficial fan site and is not affiliated with Nintendo Co., Ltd.'],
              ].map(([title, body]) => (
                <article key={title} style={{ background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.4rem', boxShadow: 'var(--shadow-card)' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.08rem', fontWeight: 700, marginBottom: '0.55rem' }}>{title}</h2>
                  <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '0.93rem', margin: 0 }}>{body}</p>
                </article>
              ))}
              <p style={{ color: 'var(--color-text-light)', fontSize: '0.82rem' }}>Last updated: May 9, 2026</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
