# 🍟 GitHub Actions CI/CD — Comida Rapidita

> **Repositorio:** `luisalvaradodev10s/comida-rapidita-react`

---

## 🌐 URLs después del deploy

| Proyecto | URL |
|---|---|
| 🏠 Índice | `https://luisalvaradodev10s.github.io/comida-rapidita-react/` |
| ⚛️ React | `https://luisalvaradodev10s.github.io/comida-rapidita-react/react/` |
| 💚 Vue | `https://luisalvaradodev10s.github.io/comida-rapidita-react/vue/` |
| 📱 Expo Web | `https://luisalvaradodev10s.github.io/comida-rapidita-react/expo/` |

---

## 📁 Estructura que debe tener tu repo

```
comida-rapidita-react/          ← raíz del repositorio
├── .github/
│   └── workflows/
│       ├── deploy-all.yml      ← ⭐ workflow principal
│       ├── deploy-react.yml    ← solo React
│       ├── deploy-vue.yml      ← solo Vue
│       ├── deploy-expo.yml     ← solo Expo
│       └── ci-check.yml        ← CI en Pull Requests
│
├── comida-rapidita-react/      ← proyecto React
│   ├── vite.config.js          ← ⚠️ reemplazar con vite.config.react.js
│   ├── package.json
│   ├── package-lock.json       ← ⚠️ necesario para npm ci
│   └── src/
│
├── comida-rapidita-vue/        ← proyecto Vue
│   ├── vite.config.js          ← ⚠️ reemplazar con vite.config.vue.js
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│
└── comida-rapidita-expo/       ← proyecto Expo
    ├── App.js
    ├── package.json
    ├── package-lock.json
    └── src/
```

---

## 🚀 Configuración paso a paso

### Paso 1 — Clonar el repo

```bash
git clone https://github.com/luisalvaradodev10s/comida-rapidita-react.git
cd comida-rapidita-react
```

### Paso 2 — Copiar los archivos de este ZIP

```bash
# Copiar la carpeta .github al repositorio
cp -r .github/ /ruta/a/tu/repo/

# Reemplazar vite.config.js de React
cp vite.config.react.js /ruta/a/tu/repo/comida-rapidita-react/vite.config.js

# Reemplazar vite.config.js de Vue
cp vite.config.vue.js /ruta/a/tu/repo/comida-rapidita-vue/vite.config.js
```

### Paso 3 — Generar los package-lock.json

> **Requerido** — `npm ci` falla sin el lockfile

```bash
cd comida-rapidita-react && npm install && cd ..
cd comida-rapidita-vue   && npm install && cd ..
cd comida-rapidita-expo  && npm install && cd ..
```

### Paso 4 — Habilitar GitHub Pages

1. Ir a tu repo en GitHub
2. **Settings** → **Pages** → **Source**
3. Seleccionar: **GitHub Actions** ← importante, no "Deploy from branch"
4. Guardar

### Paso 5 — Commit y push

```bash
git add .
git commit -m "ci: agregar GitHub Actions workflows"
git push origin main
```

El workflow `deploy-all.yml` se dispara automáticamente. En ~3 minutos el sitio estará en línea.

---

## ⚡ Workflows

### `deploy-all.yml` — Principal ⭐
- **Cuándo:** cada push a `main`
- **Qué hace:** compila React, Vue y Expo en **paralelo** y los despliega juntos
- **Manual:** GitHub → Actions → "Deploy TODOS" → Run workflow → elige qué desplegar

### `deploy-react.yml` / `deploy-vue.yml` / `deploy-expo.yml`
- Se activan solo cuando detectan cambios en su carpeta respectiva
- Útil para actualizaciones rápidas de un solo proyecto

### `ci-check.yml` — CI en Pull Requests
- Se ejecuta automáticamente en cada PR hacia `main`
- Compila los 3 proyectos y reporta errores antes del merge
- Bloquea el merge si algo falla

---

## 🔄 Deploy manual

1. Ir a **Actions** en GitHub
2. Click en **"Deploy TODOS — Comida Rapidita"**
3. Click en **"Run workflow"** (botón verde derecha)
4. Elegir: `all` / `react` / `vue` / `expo`
5. Confirmar

---

## ❓ Errores comunes

### `npm ci` falla — "can't find package-lock.json"
```bash
cd comida-rapidita-react && npm install
git add package-lock.json && git commit -m "chore: add lockfile" && git push
```

### Assets cargan en 404 (CSS, JS en blanco)
→ El `vite.config.js` no tiene el `base` correcto.
→ Asegúrate de reemplazar con los archivos `vite.config.react.js` / `vite.config.vue.js` incluidos.

### La página muestra 404 al refrescar
→ El workflow ya agrega un `404.html` automáticamente para SPAs.

### Expo export falla
→ Verifica que `app.json` tenga esto:
```json
"web": { "bundler": "metro" }
```
