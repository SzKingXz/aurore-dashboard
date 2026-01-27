@echo off
title AURORE - Setup GitHub
color 0B
cls
echo.
echo  ════════════════════════════════════════════════════
echo    AURORE Dashboard - GitHub Setup
echo  ════════════════════════════════════════════════════
echo.
echo  Este script te ayudara a configurar GitHub Pages
echo.
echo  PASO 1: Crear repositorio en GitHub
echo  ────────────────────────────────────────────────────
echo  1. Ve a https://github.com/new
echo  2. Nombre: aurore-dashboard
echo  3. Publico o Privado (tu eliges)
echo  4. NO inicialices con README
echo  5. Crea el repositorio
echo.
pause
echo.
echo  PASO 2: Configurar Git local
echo  ────────────────────────────────────────────────────
set /p username="Ingresa tu usuario de GitHub: "
echo.
echo  Inicializando repositorio Git...
git init
git add .
git commit -m "Initial commit - AURORE Dashboard"
git branch -M main
git remote add origin https://github.com/%username%/aurore-dashboard.git
echo.
echo  PASO 3: Subir a GitHub
echo  ────────────────────────────────────────────────────
echo  Subiendo archivos...
git push -u origin main
echo.
echo  PASO 4: Deploy a GitHub Pages
echo  ────────────────────────────────────────────────────
echo  Construyendo y desplegando...
call npm run build
call npm run deploy
echo.
echo  ════════════════════════════════════════════════════
echo    ¡Completado!
echo  ════════════════════════════════════════════════════
echo.
echo  Tu dashboard estara disponible en:
echo  https://%username%.github.io/aurore-dashboard/
echo.
echo  Nota: Puede tomar unos minutos en estar disponible
echo.
pause
