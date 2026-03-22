import React, { useEffect, useRef } from 'react';

export default function QRModal({ open, onClose }) {
  const qrRef = useRef(null);
  const generated = useRef(false);

  useEffect(() => {
    if (open && !generated.current && qrRef.current) {
      const url = window.location.href;
      // Use QRCode.js loaded via CDN in index.html
      if (window.QRCode) {
        new window.QRCode(qrRef.current, {
          text: url, width: 200, height: 200,
          colorDark: '#000', colorLight: '#fff',
          correctLevel: window.QRCode.CorrectLevel.H,
        });
        generated.current = true;
      }
    }
  }, [open]);

  if (!open) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>✕</button>
        <div style={styles.title}>Código QR</div>
        <div style={styles.sub}>Escanea para abrir el menú</div>
        <div style={styles.qrWrap}>
          <div ref={qrRef} style={styles.qr} />
        </div>
        <div style={styles.url}>{window.location.href}</div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', inset: 0,
    background: 'rgba(0,0,0,0.85)',
    zIndex: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  modal: {
    background: '#181818',
    border: '2px solid #f59e0b',
    borderRadius: '20px',
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '340px',
    width: '100%',
    position: 'relative',
    animation: 'popIn 0.3s ease',
  },
  close: {
    position: 'absolute', top: 12, right: 16,
    background: 'none', border: 'none',
    color: '#888', fontSize: '1.3rem',
    cursor: 'pointer', fontWeight: 700,
  },
  title: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.8rem',
    color: '#f59e0b',
    marginBottom: '0.3rem',
  },
  sub: { color: '#888', fontSize: '0.85rem', marginBottom: '1.5rem' },
  qrWrap: { display: 'flex', justifyContent: 'center' },
  qr: { display: 'inline-block', padding: '12px', background: '#fff', borderRadius: '12px' },
  url: { marginTop: '1rem', fontSize: '0.72rem', color: '#555', wordBreak: 'break-all' },
};
