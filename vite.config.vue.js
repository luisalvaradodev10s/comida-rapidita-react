import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// ─────────────────────────────────────────────────────────────────────────────
//  Repo: luisalvaradodev10s/comida-rapidita-react
//  GitHub Pages base:  /comida-rapidita-react/vue/
//  Local dev base:     /
// ─────────────────────────────────────────────────────────────────────────────
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [vue()],
  base: isProd ? '/comida-rapidita-react/vue/' : '/',
});
