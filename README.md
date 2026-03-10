# Ideando Cantabria

Laboratorio Ciudadano de Ideas. Plataforma web para un evento participativo donde cualquier persona puede presentar y votar ideas para mejorar Cantabria.

## Estructura

```
ideando-cantabria/
├── index.html            # Landing page principal
├── presentacion.html     # Presentación tipo slides (9 slides)
├── votacion.html          # App de votación interactiva
├── google-apps-script.js  # Script para Google Sheets (backend formulario)
├── netlify.toml           # Configuración Netlify
├── _headers               # Headers de cache y seguridad
└── README.md
```

## Tecnología

- HTML + CSS + JS vanilla (sin dependencias)
- Google Fonts: Cormorant Garamond + DM Sans
- Google Apps Script como backend del formulario
- localStorage para datos de votación

## Configurar formulario (Google Sheets)

1. Crea una hoja en [Google Sheets](https://sheets.google.com)
2. Copia el ID de la hoja desde la URL
3. Ve a [Apps Script](https://script.google.com) y crea un proyecto nuevo
4. Pega el contenido de `google-apps-script.js`
5. Reemplaza `TU_SPREADSHEET_ID_AQUI` con el ID de tu hoja
6. Deploy > New deployment > Web app (acceso: Anyone)
7. Copia la URL y pégala en `index.html` (variable `GOOGLE_SCRIPT_URL`)

## Deploy

### Netlify

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir .
```

### Vercel

```bash
npm i -g vercel
vercel --prod
```

## Paleta de colores

| Color   | Hex       | Uso                    |
|---------|-----------|------------------------|
| Teal    | `#1a3a3a` | Fondo principal oscuro |
| Crema   | `#f5f2ed` | Fondo claro            |
| Cobre   | `#b87333` | Acentos, CTAs          |
| Dorado  | `#c9a96e` | Detalles premium       |

## Licencia

Todos los derechos reservados. Ideando Cantabria 2026.
