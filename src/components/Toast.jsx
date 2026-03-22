import React from 'react';

export default function Toast({ message, visible }) {
  return (
    <div style={{
      ...styles.toast,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-16px)',
    }}>
      {message}
    </div>
  );
}

const styles = {
  toast: {
    position: 'fixed',
    top: '75px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#f59e0b',
    color: '#000',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 800,
    fontSize: '0.88rem',
    padding: '0.55rem 1.3rem',
    borderRadius: '999px',
    zIndex: 999,
    transition: 'all 0.3s',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
  },
};
