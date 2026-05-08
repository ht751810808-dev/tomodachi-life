import Link from 'next/link';

interface RelatedPage {
  href: string;
  label: string;
  desc: string;
}

export default function RelatedPages({ pages }: { pages: RelatedPage[] }) {
  return (
    <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
        Related Pages
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '0.65rem' }}>
        {pages.map((page, i) => (
          <Link key={i} href={page.href} style={{ textDecoration: 'none', background: 'white', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.9rem 1rem', display: 'block', transition: 'border-color 200ms ease' }}
            className="related-page-link">
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-pink-dark)', marginBottom: '0.2rem' }}>{page.label}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{page.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
