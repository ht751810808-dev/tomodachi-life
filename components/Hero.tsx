'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '2013', label: 'First Released', color: '#FF71CE' },
  { value: '3M+', label: 'Copies Sold', color: '#7DD8E8' },
  { value: '16', label: 'Personalities', color: '#FFD93D' },
  { value: '2026', label: 'LtD Launch', color: '#6BCB77' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '88px',
        background: 'linear-gradient(160deg, #FFF5FB 0%, #F5F0FF 40%, #F0F8FF 100%)',
      }}
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Large soft blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,113,206,0.18) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '-60px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(125,216,232,0.16) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '30%', left: '20%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,217,61,0.12) 0%, transparent 70%)' }} />
        {/* Dots pattern */}
        <div className="dots-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        {/* Floating geometric shapes */}
        <svg style={{ position: 'absolute', top: '15%', left: '5%', animation: 'float 4s ease-in-out infinite' }} width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="rgba(255,113,206,0.15)" stroke="rgba(255,113,206,0.35)" strokeWidth="2"/>
          <circle cx="24" cy="24" r="8" fill="rgba(255,113,206,0.25)"/>
        </svg>
        <svg style={{ position: 'absolute', top: '25%', right: '8%', animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }} width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="4" width="28" height="28" rx="8" fill="rgba(125,216,232,0.2)" stroke="rgba(125,216,232,0.4)" strokeWidth="2" transform="rotate(12 18 18)"/>
        </svg>
        <svg style={{ position: 'absolute', bottom: '30%', left: '10%', animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }} width="30" height="30" viewBox="0 0 30 30" fill="none">
          <polygon points="15,3 27,24 3,24" fill="rgba(255,217,61,0.25)" stroke="rgba(255,217,61,0.5)" strokeWidth="1.5"/>
        </svg>
        <svg style={{ position: 'absolute', top: '60%', right: '15%', animation: 'float 4.5s ease-in-out infinite', animationDelay: '1.5s' }} width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="rgba(107,203,119,0.2)" stroke="rgba(107,203,119,0.4)" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <div
              className="animate-fade-in-up"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#FFE8F7',
                border: '1.5px solid var(--color-pink-light)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem 1rem',
                marginBottom: '1.5rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-pink-dark)',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6BCB77', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              #1 Tomodachi Life Fan Resource
            </div>

            {/* H1 */}
            <h1
              className="animate-fade-in-up delay-100"
              style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.1 }}
            >
              <span style={{ display: 'block', color: 'var(--color-text)' }}>Welcome to</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #FF5AA5 0%, #C77DFF 50%, #7DD8E8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Tomodachi Life
              </span>
            </h1>

            <p
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                color: 'var(--color-text-muted)',
                maxWidth: '500px',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Your complete guide to <strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Tomodachi Life</strong> — discover all personality types,
              scan Mii QR codes, explore <em>Living the Dream</em>, find ROMs for every platform, and more.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <Link href="/tomodachi-life-personalities" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 1.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Personalities Guide
              </Link>
              <Link href="/tomodachi-life-living-the-dream" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 1.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Living the Dream
              </Link>
            </div>
            {/* Steam CTA */}
            <div className="animate-fade-in-up delay-400" style={{ marginBottom: '2rem' }}>
              <a
                href="https://store.steampowered.com/search/?q=tomodachi+life"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  background: '#1B2838',
                  color: '#C7D5E0',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'background 150ms ease, transform 150ms ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#2A475E'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = '#1B2838'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.386 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.497 1.009 2.455-.397.957-1.497 1.41-2.455 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
                </svg>
                View on Steam
              </a>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-in-up delay-400"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: 'white',
                    border: '1.5px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.875rem 0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 12px rgba(255,113,206,0.1)',
                    transition: 'transform 200ms var(--bounce)',
                    cursor: 'default',
                  }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: stat.color, lineHeight: 1, marginBottom: '0.3rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.03em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SVG Illustration */}
          <div
            className="animate-fade-in-up delay-200 hero-illustration"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <svg
              viewBox="0 0 520 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', maxWidth: '520px', filter: 'drop-shadow(0 20px 60px rgba(255,113,206,0.2))' }}
              aria-label="Tomodachi Life island scene with apartment building and Mii characters"
              role="img"
            >
              <defs>
                <radialGradient id="skyGrad" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#FFF0FF"/>
                  <stop offset="100%" stopColor="#E8F4FF"/>
                </radialGradient>
                <linearGradient id="islandGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7DD97F"/>
                  <stop offset="100%" stopColor="#5BBF62"/>
                </linearGradient>
                <linearGradient id="buildingGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF"/>
                  <stop offset="100%" stopColor="#F8F0FF"/>
                </linearGradient>
                <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A8E4F0"/>
                  <stop offset="100%" stopColor="#7DD8E8" stopOpacity="0"/>
                </linearGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF71CE" floodOpacity="0.15"/>
                </filter>
              </defs>

              {/* Sky background */}
              <rect width="520" height="480" rx="24" fill="url(#skyGrad)"/>

              {/* Sun */}
              <circle cx="430" cy="80" r="46" fill="#FFD93D" opacity="0.9"/>
              <circle cx="430" cy="80" r="60" fill="#FFD93D" opacity="0.15"/>
              {/* Sun rays */}
              {[0,45,90,135,180,225,270,315].map((angle, i) => (
                <line key={i}
                  x1={430 + Math.cos(angle * Math.PI / 180) * 52}
                  y1={80 + Math.sin(angle * Math.PI / 180) * 52}
                  x2={430 + Math.cos(angle * Math.PI / 180) * 68}
                  y2={80 + Math.sin(angle * Math.PI / 180) * 68}
                  stroke="#FFD93D" strokeWidth="3" strokeLinecap="round" opacity="0.6"
                />
              ))}

              {/* Clouds */}
              <g opacity="0.85">
                <ellipse cx="100" cy="90" rx="55" ry="28" fill="white"/>
                <ellipse cx="70" cy="100" rx="38" ry="22" fill="white"/>
                <ellipse cx="135" cy="100" rx="38" ry="20" fill="white"/>
              </g>
              <g opacity="0.7">
                <ellipse cx="340" cy="55" rx="42" ry="20" fill="white"/>
                <ellipse cx="318" cy="65" rx="30" ry="16" fill="white"/>
                <ellipse cx="368" cy="63" rx="28" ry="15" fill="white"/>
              </g>

              {/* Water reflection at bottom */}
              <ellipse cx="260" cy="420" rx="200" ry="40" fill="url(#waterGrad)" opacity="0.5"/>
              <ellipse cx="260" cy="425" rx="180" ry="20" fill="#A8E4F0" opacity="0.25"/>

              {/* Island base */}
              <ellipse cx="260" cy="390" rx="190" ry="55" fill="#5BBF62"/>
              <ellipse cx="260" cy="380" rx="190" ry="52" fill="url(#islandGrad)"/>
              <ellipse cx="260" cy="374" rx="185" ry="40" fill="#8EDB8F"/>

              {/* Path on island */}
              <ellipse cx="260" cy="375" rx="30" ry="8" fill="#F5E8A0" opacity="0.7"/>

              {/* Left palm tree */}
              <rect x="105" y="290" width="10" height="80" rx="5" fill="#8B6914"/>
              <ellipse cx="110" cy="285" rx="35" ry="20" fill="#5BBF62"/>
              <ellipse cx="95" cy="280" rx="25" ry="15" fill="#6BCB77"/>
              <ellipse cx="130" cy="278" rx="22" ry="14" fill="#6BCB77"/>
              <ellipse cx="110" cy="272" rx="20" ry="12" fill="#7DD97F"/>
              {/* Coconuts */}
              <circle cx="100" cy="286" r="5" fill="#8B6914"/>
              <circle cx="118" cy="283" r="5" fill="#8B6914"/>

              {/* Right palm tree */}
              <rect x="385" y="295" width="10" height="75" rx="5" fill="#8B6914"/>
              <ellipse cx="390" cy="290" rx="32" ry="18" fill="#5BBF62"/>
              <ellipse cx="373" cy="285" rx="24" ry="14" fill="#6BCB77"/>
              <ellipse cx="408" cy="283" rx="22" ry="13" fill="#6BCB77"/>
              <ellipse cx="390" cy="278" rx="18" ry="11" fill="#7DD97F"/>

              {/* Flowers on island */}
              {[[160,372,4,'#FF71CE'],[200,368,3,'#FFD93D'],[320,370,3.5,'#7DD8E8'],[350,368,4,'#C77DFF'],[290,375,3,'#FF71CE'],[230,373,3,'#FF9F51']].map(([x,y,r,c],i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r={r} fill={c as string} opacity="0.9"/>
                  <circle cx={x} cy={y} r={(r as number) * 0.4} fill="white"/>
                </g>
              ))}

              {/* Main Apartment Building */}
              <g filter="url(#softShadow)">
                {/* Building body */}
                <rect x="175" y="170" width="170" height="200" rx="12" fill="url(#buildingGrad)" stroke="#F0D6F0" strokeWidth="1.5"/>

                {/* Roof */}
                <path d="M165 175 L260 130 L355 175 Z" fill="#FF71CE" stroke="#E054B3" strokeWidth="1"/>
                <path d="M175 175 L260 133 L345 175 Z" fill="#FF9EC9"/>
                {/* Roof chimney */}
                <rect x="240" y="118" width="14" height="18" rx="3" fill="#FF71CE"/>
                <ellipse cx="247" cy="117" rx="10" ry="5" fill="#FF71CE" stroke="#E054B3" strokeWidth="1"/>

                {/* Floor separators */}
                <rect x="175" y="236" width="170" height="2" fill="#F0D6F0"/>
                <rect x="175" y="302" width="170" height="2" fill="#F0D6F0"/>

                {/* FLOOR 1 windows */}
                <rect x="192" y="183" width="30" height="30" rx="6" fill="#B8EDF5" stroke="#7DD8E8" strokeWidth="1.5"/>
                <rect x="192" y="183" width="30" height="30" rx="6" fill="rgba(125,216,232,0.4)"/>
                <line x1="207" y1="183" x2="207" y2="213" stroke="#7DD8E8" strokeWidth="1" opacity="0.6"/>
                <line x1="192" y1="198" x2="222" y2="198" stroke="#7DD8E8" strokeWidth="1" opacity="0.6"/>

                <rect x="245" y="183" width="30" height="30" rx="6" fill="#FFF8D6" stroke="#FFD93D" strokeWidth="1.5"/>
                <line x1="260" y1="183" x2="260" y2="213" stroke="#FFD93D" strokeWidth="1" opacity="0.6"/>
                <line x1="245" y1="198" x2="275" y2="198" stroke="#FFD93D" strokeWidth="1" opacity="0.6"/>

                <rect x="298" y="183" width="30" height="30" rx="6" fill="#FFE8F7" stroke="#FF71CE" strokeWidth="1.5"/>
                <line x1="313" y1="183" x2="313" y2="213" stroke="#FF71CE" strokeWidth="1" opacity="0.6"/>
                <line x1="298" y1="198" x2="328" y2="198" stroke="#FF71CE" strokeWidth="1" opacity="0.6"/>

                {/* FLOOR 2 windows */}
                <rect x="192" y="248" width="30" height="30" rx="6" fill="#EDFFF0" stroke="#6BCB77" strokeWidth="1.5"/>
                <line x1="207" y1="248" x2="207" y2="278" stroke="#6BCB77" strokeWidth="1" opacity="0.6"/>
                <line x1="192" y1="263" x2="222" y2="263" stroke="#6BCB77" strokeWidth="1" opacity="0.6"/>

                <rect x="245" y="248" width="30" height="30" rx="6" fill="#F5E8FF" stroke="#C77DFF" strokeWidth="1.5"/>
                <line x1="260" y1="248" x2="260" y2="278" stroke="#C77DFF" strokeWidth="1" opacity="0.6"/>
                <line x1="245" y1="263" x2="275" y2="263" stroke="#C77DFF" strokeWidth="1" opacity="0.6"/>

                <rect x="298" y="248" width="30" height="30" rx="6" fill="#FFF5E8" stroke="#FF9F51" strokeWidth="1.5"/>
                <line x1="313" y1="248" x2="313" y2="278" stroke="#FF9F51" strokeWidth="1" opacity="0.6"/>
                <line x1="298" y1="263" x2="328" y2="263" stroke="#FF9F51" strokeWidth="1" opacity="0.6"/>

                {/* FLOOR 3 windows */}
                <rect x="192" y="314" width="30" height="28" rx="6" fill="#B8EDF5" stroke="#7DD8E8" strokeWidth="1.5"/>
                <rect x="298" y="314" width="30" height="28" rx="6" fill="#FFE8F7" stroke="#FF71CE" strokeWidth="1.5"/>

                {/* Door */}
                <rect x="237" y="328" width="46" height="42" rx="8" fill="white" stroke="#F0D6F0" strokeWidth="1.5"/>
                <rect x="237" y="328" width="46" height="42" rx="8" fill="rgba(255,113,206,0.08)"/>
                <ellipse cx="275" cy="351" rx="4" ry="4" fill="#FF71CE" opacity="0.8"/>
                <path d="M248 340 Q260 334 272 340" stroke="#F0D6F0" strokeWidth="1.5" fill="none"/>

                {/* Building sign */}
                <rect x="215" y="318" width="22" height="8" rx="3" fill="#FF71CE" opacity="0.8"/>
                <rect x="283" y="318" width="22" height="8" rx="3" fill="#7DD8E8" opacity="0.8"/>
              </g>

              {/* Mii Character 1 — left of building (pink hair) */}
              <g style={{ animation: 'float 3.5s ease-in-out infinite' }}>
                {/* Body */}
                <ellipse cx="150" cy="360" rx="16" ry="22" fill="#FFECD2"/>
                {/* Shirt */}
                <ellipse cx="150" cy="368" rx="16" ry="15" fill="#FF71CE"/>
                {/* Head */}
                <circle cx="150" cy="332" r="20" fill="#FFECD2" stroke="#F5D5BA" strokeWidth="1"/>
                {/* Hair */}
                <path d="M132 325 Q150 308 168 325 Q165 315 150 310 Q135 315 132 325Z" fill="#FF71CE"/>
                {/* Hair strands */}
                <path d="M133 322 Q130 316 134 311" stroke="#FF71CE" strokeWidth="3" strokeLinecap="round"/>
                <path d="M168 322 Q171 316 167 311" stroke="#FF71CE" strokeWidth="3" strokeLinecap="round"/>
                {/* Eyes */}
                <circle cx="143" cy="330" r="5" fill="white"/>
                <circle cx="157" cy="330" r="5" fill="white"/>
                <circle cx="144" cy="331" r="2.5" fill="#4A3728"/>
                <circle cx="158" cy="331" r="2.5" fill="#4A3728"/>
                <circle cx="145" cy="329.5" r="1" fill="white"/>
                <circle cx="159" cy="329.5" r="1" fill="white"/>
                {/* Smile */}
                <path d="M144 338 Q150 343 156 338" stroke="#D4907A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                {/* Blush */}
                <ellipse cx="140" cy="336" rx="5" ry="3" fill="#FFB3C8" opacity="0.6"/>
                <ellipse cx="160" cy="336" rx="5" ry="3" fill="#FFB3C8" opacity="0.6"/>
                {/* Arms */}
                <path d="M134 360 Q124 352 120 358" stroke="#FFECD2" strokeWidth="8" strokeLinecap="round"/>
                <path d="M166 360 Q176 352 180 358" stroke="#FFECD2" strokeWidth="8" strokeLinecap="round"/>
                {/* Legs */}
                <rect x="141" y="378" width="8" height="14" rx="4" fill="#7DD8E8"/>
                <rect x="152" y="378" width="8" height="14" rx="4" fill="#7DD8E8"/>
                {/* Shoes */}
                <ellipse cx="145" cy="393" rx="7" ry="4" fill="#5A4A9A"/>
                <ellipse cx="156" cy="393" rx="7" ry="4" fill="#5A4A9A"/>
                {/* Wave hand */}
                <circle cx="119" cy="358" r="6" fill="#FFECD2"/>
              </g>

              {/* Mii Character 2 — right of building (blue hair, glasses) */}
              <g style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.8s' }}>
                {/* Body */}
                <ellipse cx="370" cy="358" rx="16" ry="22" fill="#FFECD2"/>
                {/* Shirt */}
                <ellipse cx="370" cy="366" rx="16" ry="15" fill="#7DD8E8"/>
                {/* Head */}
                <circle cx="370" cy="330" r="20" fill="#FFECD2" stroke="#F5D5BA" strokeWidth="1"/>
                {/* Hair */}
                <path d="M352 322 Q370 306 388 322 Q385 312 370 307 Q355 312 352 322Z" fill="#4A90D9"/>
                <path d="M352 320 Q352 312 358 308" stroke="#4A90D9" strokeWidth="4" strokeLinecap="round"/>
                <path d="M388 320 Q388 312 382 308" stroke="#4A90D9" strokeWidth="4" strokeLinecap="round"/>
                {/* Glasses */}
                <rect x="358" y="325" width="10" height="8" rx="2" fill="none" stroke="#888" strokeWidth="1.5"/>
                <rect x="372" y="325" width="10" height="8" rx="2" fill="none" stroke="#888" strokeWidth="1.5"/>
                <line x1="368" y1="329" x2="372" y2="329" stroke="#888" strokeWidth="1.5"/>
                {/* Eyes behind glasses */}
                <circle cx="363" cy="329" r="2.5" fill="#4A3728"/>
                <circle cx="377" cy="329" r="2.5" fill="#4A3728"/>
                {/* Smile */}
                <path d="M364 337 Q370 342 376 337" stroke="#D4907A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                {/* Blush */}
                <ellipse cx="360" cy="336" rx="5" ry="3" fill="#FFB3C8" opacity="0.5"/>
                <ellipse cx="380" cy="336" rx="5" ry="3" fill="#FFB3C8" opacity="0.5"/>
                {/* Arms */}
                <path d="M354 358 Q344 350 340 356" stroke="#FFECD2" strokeWidth="8" strokeLinecap="round"/>
                <path d="M386 358 Q396 350 400 356" stroke="#FFECD2" strokeWidth="8" strokeLinecap="round"/>
                {/* Legs */}
                <rect x="361" y="376" width="8" height="14" rx="4" fill="#FFD93D"/>
                <rect x="372" y="376" width="8" height="14" rx="4" fill="#FFD93D"/>
                {/* Shoes */}
                <ellipse cx="365" cy="391" rx="7" ry="4" fill="#8B4513"/>
                <ellipse cx="376" cy="391" rx="7" ry="4" fill="#8B4513"/>
              </g>

              {/* Speech bubble */}
              <g style={{ animation: 'float 3s ease-in-out infinite', animationDelay: '0.3s' }}>
                <rect x="310" y="140" width="120" height="40" rx="12" fill="white" stroke="#F0D6F0" strokeWidth="1.5"/>
                <path d="M330 180 L325 192 L342 180Z" fill="white" stroke="#F0D6F0" strokeWidth="1.5"/>
                <path d="M330 180 L342 180 L335 190Z" fill="white"/>
                <text x="320" y="157" fontFamily="Fredoka, sans-serif" fontSize="11" fill="#FF5AA5" fontWeight="600">Tomodachi</text>
                <text x="324" y="172" fontFamily="Fredoka, sans-serif" fontSize="11" fill="#C77DFF" fontWeight="600">Life Guide!</text>
              </g>

              {/* Stars / sparkles */}
              {[[460,140,'#FFD93D'],[80,200,'#FF71CE'],[475,250,'#7DD8E8'],[55,320,'#C77DFF']].map(([x,y,c],i) => (
                <g key={i} style={{ animation: `float ${3+i*0.5}s ease-in-out infinite`, animationDelay: `${i*0.4}s` }}>
                  <path d={`M${x},${(y as number)-8} L${(x as number)+2},${(y as number)-2} L${(x as number)+8},${y} L${(x as number)+2},${(y as number)+2} L${x},${(y as number)+8} L${(x as number)-2},${(y as number)+2} L${(x as number)-8},${y} L${(x as number)-2},${(y as number)-2} Z`} fill={c as string} opacity="0.8"/>
                </g>
              ))}

              {/* Nintendo DS shape hint (bottom right corner) */}
              <g opacity="0.6">
                <rect x="420" y="360" width="70" height="55" rx="10" fill="white" stroke="#E0C0E0" strokeWidth="1.5"/>
                <rect x="425" y="364" width="60" height="25" rx="5" fill="#A8E4F0" opacity="0.6"/>
                <circle cx="435" cy="400" r="5" fill="#FF71CE" opacity="0.7"/>
                <circle cx="448" cy="398" r="3.5" fill="#E0C0E0"/>
                <circle cx="448" cy="405" r="3.5" fill="#E0C0E0"/>
                <circle cx="455" cy="400" r="3.5" fill="#E0C0E0"/>
                <circle cx="441" cy="400" r="3.5" fill="#E0C0E0"/>
                <text x="425" y="376" fontFamily="Fredoka, sans-serif" fontSize="8" fill="#7B6E8A" opacity="0.8">Tomodachi</text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-illustration { display: none !important; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
