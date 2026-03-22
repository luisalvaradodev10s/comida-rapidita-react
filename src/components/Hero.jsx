import React from 'react';

export default function Hero({ onOpenQR }) {
  return (
    <header style={styles.hero}>
      <div style={styles.radial} />
      <h1 style={styles.logo}>Comida Rapidita</h1>
      <p style={styles.sub}>San Diego 1473 · Delivery a tu departamento</p>
      <div style={styles.badge}>🛵 Hasta la puerta de tu depa</div>
      <button style={styles.qrBtn} onClick={onOpenQR}>
        <span>▣</span> Ver código QR
      </button>
    </header>
  );
}

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #1a0a00 0%, #0d0d0d 50%, #1a0500 100%)',
    padding: '3rem 1.5rem 2.5rem',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '2px solid #f59e0b',
  },
  radial: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.18) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: 'clamp(2.8rem, 10vw, 5.5rem)',
    background: 'linear-gradient(135deg, #f59e0b, #f97316)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '3px',
    lineHeight: 1,
    marginBottom: '0.5rem',
    position: 'relative',
  },
  sub: {
    color: '#888',
    fontSize: '0.9rem',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '1.2rem',
    position: 'relative',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'rgba(245,158,11,0.12)',
    border: '1px solid #f59e0b',
    borderRadius: '999px',
    padding: '0.4rem 1.1rem',
    fontSize: '0.82rem',
    fontWeight: 700,
    color: '#f59e0b',
    letterSpacing: '1px',
    position: 'relative',
    marginBottom: '1rem',
  },
  qrBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'none',
    border: '1px solid #f59e0b',
    color: '#f59e0b',
    borderRadius: '10px',
    padding: '0.45rem 1rem',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: '0.82rem',
    cursor: 'pointer',
    position: 'relative',
    marginTop: '0.5rem',
    transition: 'background 0.15s',
    letterSpacing: '0.5px',
  },
};
