import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ─────────────────────────────────────────────────────────────────────────────
//  Repo: luisalvaradodev10s/comida-rapidita-react
//  GitHub Pages base:  /comida-rapidita-react/
//  Local dev base:     /
// ─────────────────────────────────────────────────────────────────────────────
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/comida-rapidita-react/' : '/',
});
