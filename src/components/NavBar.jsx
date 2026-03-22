import React from 'react';
import { categories } from '../data/products';

export default function NavBar({ active, onSelect }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.inner}>
        {categories.map(c => (
          <button
            key={c.id}
            style={{ ...styles.btn, ...(active === c.id ? styles.btnActive : {}) }}
            onClick={() => onSelect(c.id)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(13,13,13,0.97)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #2a2a2a',
    overflowX: 'auto',
    scrollbarWidth: 'none',
  },
  inner: {
    display: 'flex',
    whiteSpace: 'nowrap',
    minWidth: 'max-content',
    padding: '0 0.5rem',
  },
  btn: {
    background: 'none',
    border: 'none',
    color: '#888',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: '0.82rem',
    padding: '0.9rem 1.1rem',
    cursor: 'pointer',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    borderBottom: '3px solid transparent',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  },
  btnActive: {
    color: '#f59e0b',
    borderBottom: '3px solid #f59e0b',
  },
};
