@echo off
title AURORE Backend + Frontend
color 0B

echo.
echo ══════════════════════════════════════════════
echo      AURORE Dashboard - Iniciando Sistema
echo ══════════════════════════════════════════════
echo.

echo [1/3] Limpiando archivos temporales...
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
echo ✓ Archivos temporales eliminados

echo.
echo [2/3] Iniciando Backend API (Puerto 3001)...
start "AURORE Backend" cmd /k "npm run server"
timeout /t 5 /nobreak >nul

echo.
echo [3/3] Iniciando Frontend (Puerto 5173)...
start "AURORE Frontend" cmd /k "npm run dev"

echo.
echo ══════════════════════════════════════════════
echo      ✓ Sistema iniciado correctamente
echo ══════════════════════════════════════════════
echo.
echo  Backend:  http://localhost:3001
echo  Frontend: http://localhost:5173
echo.
echo  Mantén ambas ventanas abiertas
echo.
echo ══════════════════════════════════════════════
timeout /t 3 >nul
