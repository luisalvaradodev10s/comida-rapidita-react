import React from 'react';

export default function ComboCard({ combo, onAdd }) {
  return (
    <div style={styles.card}>
      <div style={styles.emojiWrap}>
        <span style={styles.emoji}>{combo.emoji}</span>
      </div>
      <div style={styles.info}>
        <div style={styles.name}>{combo.name}</div>
        <ul style={styles.list}>
          {combo.items.map((item, i) => (
            <li key={i} style={styles.item}>
              <span style={styles.check}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div style={styles.footer}>
          <span style={styles.price}>${combo.price.toLocaleString('es-CL')}</span>
          <button style={styles.btn} onClick={() => onAdd(combo)}>
            🛒 Agregar al pedido
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'linear-gradient(135deg, #1a0800, #0d0d0d)',
    border: '2px solid #f59e0b',
    borderRadius: '20px',
    padding: '1.5rem',
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  emojiWrap: { fontSize: '5rem', flexShrink: 0 },
  emoji: {},
  info: { flex: 1, minWidth: '200px' },
  name: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '2rem',
    color: '#f59e0b',
    letterSpacing: '2px',
    marginBottom: '0.7rem',
  },
  list: { listStyle: 'none', marginBottom: '1.2rem' },
  item: { fontSize: '0.9rem', color: '#f5f5f5', padding: '0.2rem 0', display: 'flex', alignItems: 'center', gap: '0.4rem' },
  check: { color: '#f59e0b', fontWeight: 800, fontSize: '0.9rem' },
  footer: { display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' },
  price: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '2.5rem',
    color: '#f59e0b',
  },
  btn: {
    background: '#f59e0b',
    border: 'none',
    borderRadius: '12px',
    color: '#000',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 800,
    fontSize: '0.95rem',
    padding: '0.65rem 1.4rem',
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
};
