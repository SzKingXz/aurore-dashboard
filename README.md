# AURØRE Dashboard

Dashboard profesional para Discord con OAuth2.

## Inicio Rápido

```bash
npm install
npm run server  # Backend
npm run dev     # Frontend
```

Acceso: http://localhost:5173

## Configuración OAuth2

1. Discord Developer Portal
2. OAuth2 → General → CLIENT_SECRET
3. Configurar en server.cjs línea 13
4. Agregar redirect: http://localhost:5173/callback

## Deploy

```bash
npm run build
npm run deploy
```
