'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/tomodachi-life-living-the-dream', label: 'Overview' },
  { href: '/tomodachi-life-living-the-dream/pc', label: 'PC Guide' },
  { href: '/tomodachi-life-living-the-dream/nsp', label: 'NSP' },
  { href: '/tomodachi-life-living-the-dream/rom', label: 'ROM' },
  { href: '/tomodachi-life-living-the-dream/emulator', label: 'Emulator' },
  { href: '/tomodachi-life-living-the-dream/personality-guide', label: 'Personalities' },
];

export default function LtDSubNav() {
  const pathname = usePathname();
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)', background: 'white', overflowX: 'auto' }}>
      <div className="container">
        <div style={{ display: 'flex', gap: '0', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {tabs.map((tab) => {
            const active = pathname === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                style={{
                  padding: '0.7rem 1.1rem',
                  fontSize: '0.85rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? '#F43F5E' : 'var(--color-text-muted)',
                  borderBottom: active ? '2px solid #F43F5E' : '2px solid transparent',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 150ms ease',
                  marginBottom: '-1px',
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
