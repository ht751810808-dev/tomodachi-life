export default function FinalCTA() {
  const ROBLOX_GAME_URL = 'https://www.roblox.com/games/15328407422/UPD-Titan-Fishing';
  return (
    <section
      style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(124,58,237,0.15)',
      }}
    >
      {/* 背景渐变 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.15) 0%, rgba(244,63,94,0.08) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      {/* 装饰线 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1px',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, #7C3AED)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* 大图标 */}
        <div
          style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            display: 'inline-block',
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          🎣
        </div>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            marginBottom: '1.25rem',
            lineHeight: 1.15,
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #fff, #A78BFA)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Ready to Catch Your First
          </span>
          <br />
          <span
            style={{
              color: 'var(--color-accent)',
              textShadow: '0 0 20px rgba(0,255,255,0.5)',
            }}
          >
            Legendary Fish?
          </span>
        </h2>

        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '1.15rem',
            maxWidth: '500px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          Use our codes for free Cash, grab expert guides, and dominate the leaderboards in Titan Fishing Roblox.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#codes"
            className="btn-primary"
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            🎁 Claim Free Codes Now
          </a>
          <a
            href={ROBLOX_GAME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            🚀 Play on Roblox
          </a>
        </div>

        {/* 免责 */}
        <p
          style={{
            marginTop: '3rem',
            fontSize: '0.75rem',
            color: 'rgba(148,163,184,0.4)',
            maxWidth: '400px',
            margin: '3rem auto 0',
          }}
        >
          titanfishing.art is an unofficial fan site. Not affiliated with Roblox or the game developers.
        </p>
      </div>
    </section>
  );
}
