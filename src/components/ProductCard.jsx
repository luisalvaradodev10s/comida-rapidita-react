import React, { useState } from 'react';

export default function ProductCard({ product, onAdd }) {
  const [pressed, setPressed] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setPressed(true);
    onAdd(product);
    setTimeout(() => setPressed(false), 300);
  };

  return (
    <div style={styles.card} onClick={handleAdd}>
      {product.isNew && <span style={styles.badgeNew}>NEW</span>}
      {product.isSpecial && <span style={{ ...styles.badgeNew, background: '#7c3aed' }}>ESPECIAL</span>}
      <div style={styles.emojiWrap}>
        <span style={styles.emoji}>{product.emoji}</span>
      </div>
      <div style={styles.body}>
        <div style={styles.name}>{product.name}</div>
        <div style={styles.desc}>{product.desc}</div>
        <div style={styles.footer}>
          <span style={styles.price}>${product.price.toLocaleString('es-CL')}</span>
          <button
            style={{ ...styles.btn, ...(pressed ? styles.btnPressed : {}) }}
            onClick={handleAdd}
          >
            + Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
    display: 'flex',
    flexDirection: 'column',
  },
  badgeNew: {
    position: 'absolute',
    top: 10, right: 10,
    background: '#ef4444',
    color: '#fff',
    fontWeight: 800,
    fontSize: '0.65rem',
    padding: '0.18rem 0.5rem',
    borderRadius: '6px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    zIndex: 2,
  },
  emojiWrap: {
    height: '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1f1200, #1a0800)',
    flexShrink: 0,
  },
  emoji: { fontSize: '3.5rem' },
  body: { padding: '0.9rem', display: 'flex', flexDirection: 'column', flex: 1 },
  name: { fontWeight: 800, fontSize: '0.92rem', color: '#f5f5f5', marginBottom: '0.3rem', lineHeight: 1.25 },
  desc: { fontSize: '0.76rem', color: '#888', marginBottom: '0.8rem', lineHeight: 1.45, flex: 1 },
  footer: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  price: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.45rem',
    color: '#f59e0b',
    letterSpacing: '1px',
  },
  btn: {
    background: '#f59e0b',
    border: 'none',
    borderRadius: '9px',
    color: '#000',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 800,
    fontSize: '0.76rem',
    padding: '0.38rem 0.8rem',
    cursor: 'pointer',
    transition: 'background 0.15s, transform 0.1s',
    letterSpacing: '0.3px',
  },
  btnPressed: { transform: 'scale(0.93)', background: '#f97316' },
};
