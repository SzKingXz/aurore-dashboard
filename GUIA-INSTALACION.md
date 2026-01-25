# 🚀 Guía de Instalación y Despliegue - AURØRE Dashboard

## 📋 Requisitos Previos

Antes de comenzar, necesitas instalar:

### 1. Node.js
- Descarga desde: https://nodejs.org/
- Instala la versión LTS (recomendada)
- Verifica la instalación abriendo CMD y escribiendo: `node --version`

### 2. Git
- Descarga desde: https://git-scm.com/download/win
- Instala con las opciones por defecto
- Verifica la instalación: `git --version`

### 3. Cuenta de GitHub
- Crea una cuenta en: https://github.com/
- Tenla lista para configurar tu repositorio

---

## 🔧 Instalación Rápida

### Opción 1: Script Automático (Recomendado)

1. **Abre el proyecto**
   - Navega a: `C:\Users\Administrator\Documents\aurore-dashboard`

2. **Ejecuta el setup**
   - Doble clic en `setup.bat`
   - Sigue las instrucciones en pantalla

3. **Configura GitHub**
   - Cuando te pida tu username de GitHub, ingrésalo
   - El script configurará todo automáticamente

### Opción 2: Manual

1. **Abre PowerShell o CMD en la carpeta del proyecto**
   ```bash
   cd C:\Users\Administrator\Documents\aurore-dashboard
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicializa Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AURORE Dashboard"
   ```

---

## 🖥️ Desarrollo Local

### Iniciar el servidor de desarrollo

**Opción A: Script**
- Doble clic en `start-dev.bat`

**Opción B: Manual**
```bash
npm run dev
```

El dashboard estará disponible en: http://localhost:3000

---

## 📦 Construcción para Producción

### Crear versión optimizada

**Opción A: Script**
- Doble clic en `build.bat`

**Opción B: Manual**
```bash
npm run build
```

Los archivos optimizados se crearán en la carpeta `dist/`

---

## 🌐 Subir a GitHub

### 1. Crear el Repositorio en GitHub

1. Ve a: https://github.com/new
2. Nombre del repositorio: `aurore-dashboard`
3. Descripción: "AURØRE - Modern Discord Bot Dashboard"
4. **¡IMPORTANTE!** NO marques:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Click en "Create repository"

### 2. Conectar tu proyecto local con GitHub

Reemplaza `TU_USUARIO` con tu username de GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/aurore-dashboard.git
git branch -M main
git push -u origin main
```

**Ejemplo:**
```bash
git remote add origin https://github.com/johndoe/aurore-dashboard.git
git branch -M main
git push -u origin main
```

Te pedirá tus credenciales de GitHub. Ingresalas y listo.

---

## 🚀 Desplegar en GitHub Pages

### Opción 1: Script Automático (Recomendado)

1. Doble clic en `deploy.bat`
2. El script hará todo automáticamente
3. Espera unos minutos
4. Tu dashboard estará en: `https://TU_USUARIO.github.io/aurore-dashboard/`

### Opción 2: Manual

1. **Actualiza vite.config.js**
   
   Cambia la línea `base:` con tu username:
   ```javascript
   base: '/aurore-dashboard/',  // Ya está configurado
   ```

2. **Despliega**
   ```bash
   npm run deploy
   ```

3. **Activa GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Selecciona `gh-pages` branch
   - Save

4. **Espera unos minutos**
   - Tu sitio estará disponible en:
   - `https://TU_USUARIO.github.io/aurore-dashboard/`

---

## 🔄 Actualizar el Dashboard

Cuando hagas cambios y quieras actualizar:

```bash
# 1. Guarda tus cambios
git add .
git commit -m "Descripción de los cambios"

# 2. Sube a GitHub
git push origin main

# 3. Despliega la nueva versión
npm run deploy
```

O simplemente ejecuta `deploy.bat` que hace todo esto automáticamente.

---

## 🛠️ Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza la build local |
| `npm run deploy` | Despliega a GitHub Pages |

---

## 📁 Estructura del Proyecto

```
aurore-dashboard/
├── src/
│   ├── components/
│   │   └── BotDashboard.jsx    # Componente principal
│   ├── App.jsx                  # Aplicación principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── public/                      # Archivos estáticos
├── dist/                        # Build de producción
├── index.html                   # HTML base
├── package.json                 # Dependencias
├── vite.config.js              # Configuración Vite
├── tailwind.config.js          # Configuración Tailwind
├── setup.bat                    # Script de instalación
├── start-dev.bat               # Script de desarrollo
├── build.bat                   # Script de build
└── deploy.bat                  # Script de despliegue
```

---

## ❓ Solución de Problemas

### Error: "git no se reconoce como comando"
- Instala Git: https://git-scm.com/download/win
- Reinicia la terminal después de instalar

### Error: "node no se reconoce como comando"
- Instala Node.js: https://nodejs.org/
- Reinicia la terminal después de instalar

### Error al hacer push a GitHub
- Verifica que creaste el repositorio en GitHub
- Verifica tu username y el nombre del repositorio
- Asegúrate de tener permisos de escritura

### Error: "Permission denied (publickey)"
- Configura tu clave SSH o usa HTTPS
- Usa: `https://github.com/TU_USUARIO/aurore-dashboard.git`

### El sitio no aparece en GitHub Pages
- Espera 5-10 minutos después del deploy
- Verifica que gh-pages esté seleccionado en Settings → Pages
- Limpia la caché del navegador

---

## 🎨 Personalización

### Cambiar colores principales
Edita `tailwind.config.js`:
```javascript
colors: {
  'aurore-cyan': '#00E5FF',      // Cyan principal
  'aurore-purple': '#7C6CFF',    // Púrpura
  'aurore-dark': '#0B0E14',      // Fondo oscuro
  'aurore-darker': '#1C1F26',    // Fondo más oscuro
}
```

### Modificar estadísticas
Edita `src/components/BotDashboard.jsx`:
```javascript
const stats = {
  totalUsers: 15420,        // Cambia estos valores
  activeUsers: 3240,
  messageToday: 12450,
  commandsUsed: 1820,
  // ...
};
```

---

## 📞 Soporte

¿Problemas? Crea un issue en GitHub o contacta al equipo de AURØRE.

---

## 📄 Licencia

MIT License - Siéntete libre de usar y modificar.

---

**¡Hecho con ❤️ y ⚡ por el equipo AURØRE!**
