# 🍟 Comida Rapidita — React (Vite)

Sitio web de pedidos para Comida Rapidita, construido con **React 18 + Vite**.

## Estructura

```
comida-rapidita-react/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    ├── data/
    │   └── products.js        ← todos los productos y precios
    └── components/
        ├── Hero.jsx
        ├── NavBar.jsx
        ├── ProductCard.jsx
        ├── ComboCard.jsx
        ├── CartBar.jsx
        ├── QRModal.jsx
        └── Toast.jsx
```

## Cómo correr

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build para producción

```bash
npm run build
# Sube la carpeta /dist a Netlify, Vercel, etc.
```

## Personalizar

- **Productos y precios** → edita `src/data/products.js`
- **WhatsApp** → cambia `WHATSAPP` en `src/data/products.js`
- **Colores** → edita las variables CSS en `src/styles/global.css`

## Funcionalidades

- ✅ Menú completo con categorías
- ✅ Carrito de pedidos
- ✅ Envío por WhatsApp automático
- ✅ Código QR para compartir
- ✅ Diseño responsive (mobile-first)
- ✅ Badges NEW y ESPECIAL
