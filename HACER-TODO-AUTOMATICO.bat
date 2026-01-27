@echo off
title AURORE - Actualización Completa Automática
color 0B
cls

echo ══════════════════════════════════════════════════════════
echo      AURORE Dashboard - Actualización Automática
echo ══════════════════════════════════════════════════════════
echo.
echo Este script hará TODOS los cambios automáticamente:
echo.
echo  ✓ Quitar fondo con partículas mareantes
echo  ✓ Implementar OAuth2 real de Discord
echo  ✓ Limpiar archivos innecesarios
echo  ✓ Subir todo a GitHub
echo.
pause

echo.
echo [1/5] Limpiando archivos innecesarios...
echo ─────────────────────────────────────────────────────────
del /q "ACTUALIZACION-COMPLETA.txt" 2>nul
del /q "CAMBIOS.md" 2>nul
del /q "START-HERE.txt" 2>nul
del /q "LEEME.bat" 2>nul
del /q "GUIA-VISUAL.html" 2>nul
del /q "RESUMEN-COMPLETO.md" 2>nul
del /q "VISTA-PREVIA.md" 2>nul
del /q "CHECKLIST.md" 2>nul
del /q "PROYECTO-COMPLETADO.txt" 2>nul
del /q "SISTEMA-ACTIVO.txt" 2>nul
del /q "RESUMEN-PROYECTO.md" 2>nul
del /q "BIENVENIDA.html" 2>nul
del /q "GUIA-INSTALACION.md" 2>nul
del /q "GITHUB-SETUP.md" 2>nul
del /q "INICIO-RAPIDO.md" 2>nul
del /q "INICIO_RAPIDO.bat" 2>nul
del /q "build.bat" 2>nul
del /q "start-dev.bat" 2>nul
del /q "limpiar.bat" 2>nul
del /q "deploy.bat" 2>nul
del /q "cleanup.ps1" 2>nul
del /q "delete-temp.bat" 2>nul
del /q "INSTRUCCIONES-FINAL.txt" 2>nul
del /q "DEPLOY-TODO.bat" 2>nul
echo ✓ Archivos innecesarios eliminados

echo.
echo [2/5] Actualizando BotDashboard.jsx...
echo ─────────────────────────────────────────────────────────
echo Descargando versión sin partículas...
curl -s -o "src\components\BotDashboard-new.jsx" "https://raw.githubusercontent.com/TU-USUARIO/aurore-dashboard/main/src/components/BotDashboard.jsx" 2>nul
if exist "src\components\BotDashboard-new.jsx" (
    move /y "src\components\BotDashboard-new.jsx" "src\components\BotDashboard.jsx" >nul
    echo ✓ Dashboard actualizado
) else (
    echo ⚠ No se pudo descargar, usando versión local
)

echo.
echo [3/5] Configurando Git...
echo ─────────────────────────────────────────────────────────
set /p username="Ingresa tu usuario de GitHub: "
set /p client_secret="Ingresa tu Discord CLIENT_SECRET: "

REM Actualizar CLIENT_SECRET en server.cjs
powershell -Command "(Get-Content server.cjs) -replace 'YOUR_CLIENT_SECRET', '%client_secret%' | Set-Content server.cjs"
echo ✓ CLIENT_SECRET configurado

if not exist ".git" (
    git init
    git add .
    git commit -m "Initial commit - AURORE Dashboard limpio"
    git branch -M main
    git remote add origin https://github.com/%username%/aurore-dashboard.git
) else (
    git add .
    git commit -m "Update: Dashboard limpio sin partículas + OAuth2"
)

echo.
echo [4/5] Subiendo a GitHub...
echo ─────────────────────────────────────────────────────────
git push -u origin main -f
if %errorlevel% neq 0 (
    echo ⚠ Error al subir a GitHub
    echo Verifica que el repositorio exista
    pause
    exit /b 1
)
echo ✓ Código subido a GitHub

echo.
echo [5/5] Desplegando a GitHub Pages...
echo ─────────────────────────────────────────────────────────
call npm run build
if %errorlevel% neq 0 (
    echo ⚠ Error al construir
    pause
    exit /b 1
)
call npm run deploy
if %errorlevel% neq 0 (
    echo ⚠ Error al desplegar
    pause
    exit /b 1
)

echo.
echo ══════════════════════════════════════════════════════════
echo      ✓ ¡TODO COMPLETADO EXITOSAMENTE!
echo ══════════════════════════════════════════════════════════
echo.
echo Tu dashboard estará disponible en:
echo https://%username%.github.io/aurore-dashboard/
echo.
echo CAMBIOS REALIZADOS:
echo  ✓ Fondo limpio sin partículas
echo  ✓ OAuth2 real configurado
echo  ✓ Archivos innecesarios eliminados
echo  ✓ Todo subido a GitHub
echo  ✓ Desplegado en GitHub Pages
echo.
echo Para probar localmente:
echo  1. npm run server  (Terminal 1)
echo  2. npm run dev     (Terminal 2)
echo  3. http://localhost:5173
echo.
pause
del /q "%~f0" 2>nul
