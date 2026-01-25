# ⚡ INICIO RÁPIDO - 5 MINUTOS

## 🎯 Opción 1: SUPER RÁPIDO (Recomendado)

1. **Instala Node.js** (si no lo tienes)
   - https://nodejs.org/ → Descarga LTS → Instala

2. **Instala Git** (si no lo tienes)
   - https://git-scm.com/download/win → Descarga → Instala

3. **Ejecuta el setup**
   - Ve a: `C:\Users\Administrator\Documents\aurore-dashboard`
   - Doble clic en: `setup.bat`
   - Ingresa tu usuario de GitHub cuando te lo pida

4. **Crea el repo en GitHub**
   - https://github.com/new
   - Nombre: `aurore-dashboard`
   - ¡NO marques nada! → Create repository

5. **Sube el código**
   ```bash
   git push -u origin main
   ```

6. **¡LISTO! Pruébalo**
   - Doble clic en: `start-dev.bat`
   - Abre: http://localhost:3000

---

## 🌐 Opción 2: DEPLOY ONLINE

Después del paso 6 anterior:

1. **Despliega**
   - Doble clic en: `deploy.bat`

2. **Activa GitHub Pages**
   - Tu repo en GitHub → Settings → Pages
   - Source: `gh-pages` → Save

3. **Visita tu dashboard**
   - `https://TU_USUARIO.github.io/aurore-dashboard/`

---

## 📝 Comandos Esenciales

```bash
# Desarrollo local
npm run dev

# Construir
npm run build

# Desplegar
npm run deploy

# Actualizar después de cambios
git add .
git commit -m "Descripción"
git push
npm run deploy
```

---

## 📂 Archivos Importantes

| Archivo | Para qué sirve |
|---------|----------------|
| `setup.bat` | Instala todo y configura GitHub |
| `start-dev.bat` | Inicia servidor local |
| `build.bat` | Construye versión producción |
| `deploy.bat` | Sube a GitHub Pages |
| `GUIA-INSTALACION.md` | Guía detallada completa |
| `GITHUB-SETUP.md` | Guía de Git y GitHub |

---

## 🆘 Problemas Comunes

### "node no se reconoce"
→ Instala Node.js y reinicia terminal

### "git no se reconoce"
→ Instala Git y reinicia terminal

### No puedo hacer push
→ Usa Personal Access Token en vez de contraseña
→ GitHub → Settings → Developer settings → Tokens

### El sitio no aparece
→ Espera 5-10 minutos después del deploy
→ Verifica Settings → Pages en tu repo

---

## 🎨 Personaliza Rápido

Edita `src/components/BotDashboard.jsx`:

```javascript
// Línea ~41 - Cambia las estadísticas
const stats = {
  totalUsers: 15420,      // 👈 Cambia aquí
  activeUsers: 3240,      // 👈 Y aquí
  messageToday: 12450,
  commandsUsed: 1820,
};
```

---

## 📱 Tu Dashboard Incluye

✅ Estadísticas en tiempo real  
✅ Gráficos interactivos  
✅ Sistema de moderación  
✅ Constructor de embeds  
✅ Logs de actividad  
✅ Diseño responsive  
✅ Tema dark mode  

---

**¿Dudas?** Lee `GUIA-INSTALACION.md` para más detalles.

**¡Disfruta tu dashboard! 🚀**
