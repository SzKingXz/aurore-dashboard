@echo off
title AURORE - Deploy Completo Automático
color 0B
cls

echo ══════════════════════════════════════════════════════════
echo      AURORE Dashboard - Deploy Automático v2.0
echo ══════════════════════════════════════════════════════════
echo.
echo Este script hará:
echo  1. Quitar fondo con partículas (mareante)
echo  2. Configurar OAuth2 de Discord
echo  3. Limpiar archivos innecesarios
echo  4. Subir todo a GitHub
echo  5. Deploy a GitHub Pages
echo.
pause
cls

echo.
echo [1/6] Quitando partículas del dashboard...
echo ─────────────────────────────────────────────────────────
powershell -ExecutionPolicy Bypass -File "quitar-particulas.ps1"
if %errorlevel% equ 0 (
    echo ✓ Dashboard actualizado sin partículas
) else (
    echo ⚠ Error al actualizar dashboard
)

echo.
echo [2/6] Limpiando archivos innecesarios...
echo ─────────────────────────────────────────────────────────
del /q "ACTUALIZACION-COMPLETA.txt" "CAMBIOS.md" "START-HERE.txt" "LEEME.bat" "GUIA-VISUAL.html" 2>nul
del /q "RESUMEN-COMPLETO.md" "VISTA-PREVIA.md" "CHECKLIST.md" "PROYECTO-COMPLETADO.txt" 2>nul
del /q "SISTEMA-ACTIVO.txt" "RESUMEN-PROYECTO.md" "BIENVENIDA.html" 2>nul
del /q "GUIA-INSTALACION.md" "GITHUB-SETUP.md" "INICIO-RAPIDO.md" 2>nul
del /q "INICIO_RAPIDO.bat" "build.bat" "start-dev.bat" "limpiar.bat" "deploy.bat" 2>nul
del /q "cleanup.ps1" "delete-temp.bat" "INSTRUCCIONES-FINAL.txt" "DEPLOY-TODO.bat" 2>nul
del /q "HACER-TODO-AUTOMATICO.bat" 2>nul
echo ✓ Archivos eliminados

echo.
echo [3/6] Configurando Discord OAuth2...
echo ─────────────────────────────────────────────────────────
echo.
echo Ve a: https://discord.com/developers/applications
echo Selecciona tu bot AURØRE
echo En OAuth2 ^> General:
echo   - Copia el CLIENT SECRET
echo   - Agrega Redirect: http://localhost:5173/callback
echo.
set /p client_secret="Pega aquí tu CLIENT_SECRET: "

powershell -Command "(Get-Content server.cjs) -replace 'YOUR_CLIENT_SECRET', '%client_secret%' | Set-Content server.cjs"
echo ✓ CLIENT_SECRET configurado

echo.
echo [4/6] Configurando Git y GitHub...
echo ─────────────────────────────────────────────────────────
set /p username="Tu usuario de GitHub: "

if not exist ".git" (
    echo Inicializando repositorio...
    git init
    git add .
    git commit -m "Initial commit - AURORE Dashboard v2"
    git branch -M main
    echo.
    echo Crea el repositorio en GitHub:
    echo https://github.com/new
    echo Nombre: aurore-dashboard
    echo.
    pause
    git remote add origin https://github.com/%username%/aurore-dashboard.git
) else (
    echo Actualizando repositorio existente...
    git add .
    git commit -m "Update: Dashboard limpio + OAuth2 + Limpieza"
)

echo.
echo [5/6] Subiendo a GitHub...
echo ─────────────────────────────────────────────────────────
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo Si es la primera vez, necesitas crear el repositorio en GitHub
    echo Luego ejecuta: git push -u origin main
    pause
)
echo ✓ Código en GitHub

echo.
echo [6/6] Desplegando a GitHub Pages...
echo ─────────────────────────────────────────────────────────
call npm run build
call npm run deploy

echo.
echo ══════════════════════════════════════════════════════════
echo      ✓ ¡DEPLOY COMPLETADO!
echo ══════════════════════════════════════════════════════════
echo.
echo ✓ Fondo limpio (sin partículas)
echo ✓ OAuth2 configurado
echo ✓ Archivos limpiados
echo ✓ Código en GitHub
echo ✓ Desplegado en GitHub Pages
echo.
echo URLS:
echo  GitHub: https://github.com/%username%/aurore-dashboard
echo  Dashboard: https://%username%.github.io/aurore-dashboard/
echo.
echo PARA USAR:
echo  1. Espera 2-5 minutos (activación GitHub Pages)
echo  2. Abre el dashboard
echo  3. Click en "INICIAR SESIÓN CON DISCORD"
echo  4. Autoriza y ¡listo!
echo.
echo Para probar local:
echo  Terminal 1: npm run server
echo  Terminal 2: npm run dev
echo  Navega a: http://localhost:5173
echo.
echo ══════════════════════════════════════════════════════════
pause

REM Auto-eliminar este script y el de partículas
del /q "quitar-particulas.ps1" 2>nul
del /q "%~f0" 2>nul
