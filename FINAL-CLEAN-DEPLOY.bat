@echo off
color 0B
cls
echo.
echo ══════════════════════════════════════════════════════════
echo      AURORE - Limpieza y Deploy FINAL
echo ══════════════════════════════════════════════════════════
echo.
echo Este script:
echo  1. Borra TODOS los archivos innecesarios
echo  2. Deja solo los archivos del proyecto
echo  3. Configura Git
echo  4. Sube a GitHub
echo  5. Deploy a GitHub Pages
echo.
pause
cls

echo [1/5] Borrando archivos innecesarios...
del /q README.md LEEME-PRIMERO.txt EJECUTAR-TODO.bat quitar-particulas.ps1 2>nul
del /q ACTUALIZACION-COMPLETA.txt CAMBIOS.md START-HERE.txt LEEME.bat GUIA-VISUAL.html 2>nul  
del /q RESUMEN-COMPLETO.md VISTA-PREVIA.md CHECKLIST.md PROYECTO-COMPLETADO.txt 2>nul
del /q SISTEMA-ACTIVO.txt RESUMEN-PROYECTO.md BIENVENIDA.html 2>nul
del /q GUIA-INSTALACION.md GITHUB-SETUP.md INICIO-RAPIDO.md 2>nul
del /q INICIO_RAPIDO.bat INICIAR.bat build.bat start-dev.bat limpiar.bat deploy.bat 2>nul
del /q cleanup.ps1 delete-temp.bat INSTRUCCIONES-FINAL.txt DEPLOY-TODO.bat 2>nul
del /q HACER-TODO-AUTOMATICO.bat setup-github.bat deploy-github.bat INICIAR_DASHBOARD.bat 2>nul
echo ✓ Limpieza completa

echo.
echo [2/5] Archivos que quedan en tu PC:
dir /b | findstr /v /i "node_modules dist .git"
echo.
pause

echo.
echo [3/5] Configurando Git...
set /p usuario="Tu usuario de GitHub: "
set /p secret="CLIENT_SECRET de Discord: "

powershell -Command "(Get-Content server.cjs) -replace 'YOUR_CLIENT_SECRET', '%secret%' | Set-Content server.cjs"

if not exist ".git" (
    git init
    git add .
    git commit -m "AURORE Dashboard - Limpio y funcional"
    git branch -M main
    git remote add origin https://github.com/%usuario%/aurore-dashboard.git
) else (
    git add .
    git commit -m "Update: Dashboard limpio final"
)
echo ✓ Git configurado

echo.
echo [4/5] Subiendo a GitHub...
git push -u origin main -f
echo ✓ Subido

echo.
echo [5/5] Desplegando a GitHub Pages...
call npm run build
call npm run deploy
echo ✓ Desplegado

cls
echo.
echo ══════════════════════════════════════════════════════════
echo      ✓ ¡COMPLETADO!
echo ══════════════════════════════════════════════════════════
echo.
echo Dashboard: https://%usuario%.github.io/aurore-dashboard/
echo.
echo NOTA IMPORTANTE:
echo El dashboard tiene partículas. Para quitarlas:
echo 1. Descarga el archivo "BotDashboard-final.jsx" del chat
echo 2. Cópialo a: src\components\BotDashboard.jsx
echo 3. git add .
echo 4. git commit -m "Sin partículas"
echo 5. git push
echo 6. npm run build
echo 7. npm run deploy
echo.
pause
del /q "%~f0"
