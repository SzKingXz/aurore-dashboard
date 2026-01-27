@echo off
title AURORE - Setup Completo
color 0A
cls

echo ══════════════════════════════════════════════════════════
echo      AURORE Dashboard - Configuración Automática
echo ══════════════════════════════════════════════════════════
echo.

echo [1/5] Limpiando archivos innecesarios...
del /q "ACTUALIZACION-COMPLETA.txt" "CAMBIOS.md" "START-HERE.txt" "LEEME.bat" "GUIA-VISUAL.html" "RESUMEN-COMPLETO.md" "VISTA-PREVIA.md" "CHECKLIST.md" "PROYECTO-COMPLETADO.txt" "SISTEMA-ACTIVO.txt" "RESUMEN-PROYECTO.md" "BIENVENIDA.html" "GUIA-INSTALACION.md" "GITHUB-SETUP.md" "INICIO-RAPIDO.md" "INICIO_RAPIDO.bat" "build.bat" "start-dev.bat" "limpiar.bat" "deploy.bat" "cleanup.ps1" "delete-temp.bat" "INSTRUCCIONES-FINAL.txt" "INICIAR_DASHBOARD.bat" "DEPLOY-TODO.bat" "deploy-github.bat" "setup-github.bat" 2>nul
echo ✓ Limpieza completada

echo.
echo [2/5] Verificando dependencias...
if not exist "node_modules" (
    echo Instalando dependencias...
    call npm install
) else (
    echo ✓ Dependencias ya instaladas
)

echo.
echo [3/5] Iniciando Backend API (Puerto 3001)...
start "AURORE Backend" cmd /k "npm run server"
timeout /t 3 /nobreak >nul

echo.
echo [4/5] Iniciando Frontend (Puerto 5173)...
start "AURORE Frontend" cmd /k "npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo [5/5] Abriendo navegador...
timeout /t 3 /nobreak >nul
start http://localhost:5173

echo.
echo ══════════════════════════════════════════════════════════
echo      ✓ Sistema iniciado correctamente
echo ══════════════════════════════════════════════════════════
echo.
echo  ✅ Backend:  http://localhost:3001
echo  ✅ Frontend: http://localhost:5173
echo.
echo  NOTA: Debes configurar CLIENT_SECRET en server.cjs
echo        y agregar redirect URI en Discord Developer Portal
echo.
echo ══════════════════════════════════════════════════════════
timeout /t 5
