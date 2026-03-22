import React, { useState, useRef, useCallback } from 'react';
import './styles/global.css';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';
import ComboCard from './components/ComboCard';
import CartBar from './components/CartBar';
import QRModal from './components/QRModal';
import Toast from './components/Toast';
import { products, categories } from './data/products';

export default function App() {
  const [activeTab, setActiveTab] = useState('teque');
  const [cart, setCart] = useState([]);
  const [qrOpen, setQrOpen] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '' });
  const toastTimer = useRef(null);

  const showToast = useCallback((msg) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ visible: true, message: msg });
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 2000);
  }, []);

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`✓ ${product.name} agregado`);
  }, [showToast]);

  const clearCart = useCallback(() => setCart([]), []);

  const handleTabSelect = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentProducts = products[activeTab] || [];
  const isCombo = activeTab === 'combo';

  return (
    <div style={{ paddingBottom: cart.length > 0 ? '90px' : '0' }}>
      <Hero onOpenQR={() => setQrOpen(true)} />
      <NavBar active={activeTab} onSelect={handleTabSelect} />

      <main style={styles.main}>
        {categories.map(cat => (
          <section key={cat.id} id={cat.id} style={styles.section}>
            <div style={styles.sectionTitle}>
              {cat.icon} {cat.label}
            </div>

            {cat.id !== 'combo' ? (
              <div style={styles.grid}>
                {products[cat.id].map(p => (
                  <ProductCard key={p.id} product={p} onAdd={addToCart} />
                ))}
              </div>
            ) : (
              <div>
                {products.combo.map(c => (
                  <ComboCard key={c.id} combo={c} onAdd={addToCart} />
                ))}
              </div>
            )}
          </section>
        ))}
      </main>

      <footer style={styles.footer}>
        <span style={{ color: '#f59e0b', fontWeight: 800 }}>Comida Rapidita</span> · San Diego 1473 · Delivery hasta tu departamento 🛵<br />
        <span style={{ color: '#f59e0b' }}>+56 9 3017 6239</span>
      </footer>

      <CartBar cart={cart} onClear={clearCart} />
      <QRModal open={qrOpen} onClose={() => setQrOpen(false)} />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  );
}

const styles = {
  main: {
    padding: '1.5rem 1rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '3rem',
    scrollMarginTop: '60px',
  },
  sectionTitle: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '1.9rem',
    color: '#f59e0b',
    letterSpacing: '2px',
    marginBottom: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid #2a2a2a',
    paddingBottom: '0.6rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1rem',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem 1rem 5rem',
    color: '#888',
    fontSize: '0.8rem',
    lineHeight: 1.8,
  },
};
