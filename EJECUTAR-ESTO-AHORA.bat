@echo off
title AURORE - Ejecución Automática Final
color 0B
cls

echo.
echo ══════════════════════════════════════════════════════════
echo      AURORE - Automatización Completa
echo ══════════════════════════════════════════════════════════
echo.
echo Este script ejecutará TODO automáticamente.
echo.
echo IMPORTANTE: Necesitas tener listo:
echo  1. Tu usuario de GitHub
echo  2. El CLIENT_SECRET de Discord
echo.
echo Después de esto:
echo  ✓ Tu PC estará limpia (solo archivos necesarios)
echo  ✓ Todo estará en GitHub
echo  ✓ Dashboard desplegado en GitHub Pages
echo.
pause
cls

echo.
echo [1/5] Limpiando archivos innecesarios...
echo ════════════════════════════════════════════════════════
powershell -ExecutionPolicy Bypass -File "LIMPIAR-TODO-AHORA.ps1"
timeout /t 2 >nul
echo.
echo ✓ PC limpia - Solo quedan archivos necesarios
echo.

echo [2/5] Configurando Discord OAuth2...
echo ════════════════════════════════════════════════════════
echo.
echo Ve a: https://discord.com/developers/applications
echo Selecciona tu aplicación AURØRE
echo En OAuth2 ^> General, copia el CLIENT_SECRET
echo.
set /p SECRET="Pega aquí tu CLIENT_SECRET: "
echo.
powershell -Command "(Get-Content server.cjs) -replace 'YOUR_CLIENT_SECRET', '%SECRET%' | Set-Content server.cjs"
echo ✓ CLIENT_SECRET configurado en server.cjs
echo.

echo [3/5] Inicializando Git y GitHub...
echo ════════════════════════════════════════════════════════
echo.
set /p USUARIO="Tu usuario de GitHub: "
echo.

if not exist ".git" (
    echo Inicializando repositorio Git...
    git init
    git add .
    git commit -m "Initial commit - AURORE Dashboard"
    git branch -M main
    
    echo.
    echo IMPORTANTE: Crea el repositorio en GitHub ahora
    echo URL: https://github.com/new
    echo Nombre: aurore-dashboard
    echo.
    pause
    
    git remote add origin https://github.com/%USUARIO%/aurore-dashboard.git
) else (
    echo Repositorio Git ya existe, actualizando...
    git add .
    git commit -m "Update: Proyecto limpio y optimizado"
)
echo.
echo ✓ Git configurado
echo.

echo [4/5] Subiendo a GitHub...
echo ════════════════════════════════════════════════════════
git push -u origin main -f
if %errorlevel% equ 0 (
    echo ✓ Código subido exitosamente
) else (
    echo ⚠ Error al subir. Verifica que el repositorio exista.
    pause
)
echo.

echo [5/5] Desplegando a GitHub Pages...
echo ════════════════════════════════════════════════════════
echo Construyendo proyecto...
call npm run build
if %errorlevel% neq 0 (
    echo ⚠ Error al construir
    pause
    exit /b 1
)

echo Desplegando...
call npm run deploy
if %errorlevel% neq 0 (
    echo ⚠ Error al desplegar
    pause
    exit /b 1
)

cls
echo.
echo ══════════════════════════════════════════════════════════
echo      ✓✓✓ ¡TODO COMPLETADO EXITOSAMENTE! ✓✓✓
echo ══════════════════════════════════════════════════════════
echo.
echo ✓ Archivos innecesarios eliminados
echo ✓ OAuth2 de Discord configurado
echo ✓ Código subido a GitHub
echo ✓ Dashboard desplegado en GitHub Pages
echo.
echo ════════════════════════════════════════════════════════
echo  TUS URLS
echo ════════════════════════════════════════════════════════
echo.
echo  GitHub Repo:
echo  https://github.com/%USUARIO%/aurore-dashboard
echo.
echo  Dashboard Público:
echo  https://%USUARIO%.github.io/aurore-dashboard/
echo.
echo  (Espera 2-5 minutos para que se active)
echo.
echo ════════════════════════════════════════════════════════
echo  LO QUE QUEDÓ EN TU PC
echo ════════════════════════════════════════════════════════
echo.
echo  ✓ src/              (código fuente)
echo  ✓ node_modules/     (dependencias)
echo  ✓ .git/             (control de versiones)
echo  ✓ server.cjs        (backend con OAuth2)
echo  ✓ package.json      (configuración)
echo  ✓ vite.config.js    (config Vite)
echo  ✓ tailwind.config.js (config TailwindCSS)
echo  ✓ .gitignore        (git ignore)
echo  ✓ setup.bat         (instalar dependencias)
echo.
echo  TODO lo demás fue ELIMINADO
echo.
echo ════════════════════════════════════════════════════════
echo  PRÓXIMOS PASOS
echo ════════════════════════════════════════════════════════
echo.
echo  1. Espera 2-5 minutos
echo  2. Abre: https://%USUARIO%.github.io/aurore-dashboard/
echo  3. Click en "INICIAR SESIÓN CON DISCORD"
echo  4. Autoriza la aplicación
echo  5. ¡Disfruta tu dashboard!
echo.
echo  NOTA: El fondo aún tiene partículas.
echo  Para quitarlas, descarga "BotDashboard-final.jsx"
echo  del chat y cópialo a src\components\BotDashboard.jsx
echo  Luego: git add . ^&^& git commit -m "Sin partículas"
echo         git push ^&^& npm run build ^&^& npm run deploy
echo.
echo ════════════════════════════════════════════════════════
echo.
pause

REM Auto-eliminar este script
del /q "%~f0" 2>nul
exit
