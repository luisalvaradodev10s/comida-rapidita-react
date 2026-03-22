import React from 'react';
import { WHATSAPP } from '../data/products';

export default function CartBar({ cart, onClear }) {
  if (cart.length === 0) return null;

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const preview = cart.map(i => (i.qty > 1 ? `${i.qty}x ${i.name}` : i.name)).join(' · ');

  const sendWhatsApp = () => {
    let msg = '🍟 *Hola! Quiero hacer el siguiente pedido de Comida Rapidita:*\n\n';
    cart.forEach(i => {
      msg += `• ${i.qty}x ${i.name} — $${(i.price * i.qty).toLocaleString('es-CL')}\n`;
    });
    msg += `\n💰 *Total: $${totalPrice.toLocaleString('es-CL')}*`;
    msg += '\n\n📍 Entregar en: ';
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div style={styles.bar}>
      <div style={styles.info}>
        <span style={styles.count}>{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
        <span style={styles.total}>${totalPrice.toLocaleString('es-CL')}</span>
        <span style={styles.preview}>{preview}</span>
      </div>
      <div style={styles.actions}>
        <button style={styles.clearBtn} onClick={onClear}>Limpiar</button>
        <button style={styles.waBtn} onClick={sendWhatsApp}>
          <WhatsAppIcon />
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

const styles = {
  bar: {
    position: 'fixed',
    bottom: 0, left: 0, right: 0,
    background: '#181818',
    borderTop: '2px solid #f59e0b',
    padding: '0.9rem 1.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.8rem',
    zIndex: 200,
    flexWrap: 'wrap',
    boxShadow: '0 -4px 24px rgba(245,158,11,0.1)',
  },
  info: { display: 'flex', alignItems: 'center', gap: '0.7rem', flex: 1, flexWrap: 'wrap', minWidth: 0 },
  count: {
    background: '#f59e0b',
    color: '#000',
    fontWeight: 800,
    fontSize: '0.8rem',
    borderRadius: '999px',
    padding: '0.18rem 0.7rem',
    flexShrink: 0,
  },
  total: { fontWeight: 800, color: '#f59e0b', fontSize: '1.05rem', flexShrink: 0 },
  preview: {
    fontSize: '0.75rem',
    color: '#888',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '260px',
  },
  actions: { display: 'flex', gap: '0.6rem', flexShrink: 0 },
  clearBtn: {
    background: 'none',
    border: '1px solid #2a2a2a',
    color: '#888',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: '0.8rem',
    padding: '0.5rem 0.9rem',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  waBtn: {
    background: '#25d366',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 800,
    fontSize: '0.9rem',
    padding: '0.65rem 1.2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    whiteSpace: 'nowrap',
  },
};
