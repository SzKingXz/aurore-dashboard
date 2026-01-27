@echo off
title AURORE - Actualización y Deploy a GitHub
color 0B
cls

echo ════════════════════════════════════════════════════════
echo      AURORE Dashboard - Deploy Completo
echo ════════════════════════════════════════════════════════
echo.

echo [PASO 1] Limpiando archivos innecesarios...
echo ─────────────────────────────────────────────────────────
timeout /t 2 >nul

REM Borrar archivos innecesarios
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
echo ✓ Limpieza completada

echo.
echo [PASO 2] Verificando estructura del proyecto...
echo ─────────────────────────────────────────────────────────
if not exist "src" (
    echo ✗ Error: No se encuentra la carpeta src
    pause
    exit
)
echo ✓ Estructura correcta

echo.
echo [PASO 3] Configuración de Git...
echo ─────────────────────────────────────────────────────────
set /p username="Ingresa tu usuario de GitHub: "

if not exist ".git" (
    echo Inicializando repositorio...
    git init
    git add .
    git commit -m "Initial commit - AURORE Dashboard v2"
    git branch -M main
    git remote add origin https://github.com/%username%/aurore-dashboard.git
) else (
    echo Repositorio ya existe, actualizando...
    git add .
    git commit -m "Update: Dashboard limpio con OAuth2"
)

echo.
echo [PASO 4] Subiendo a GitHub...
echo ─────────────────────────────────────────────────────────
git push -u origin main -f

echo.
echo [PASO 5] Construyendo para producción...
echo ─────────────────────────────────────────────────────────
call npm run build

echo.
echo [PASO 6] Desplegando a GitHub Pages...
echo ─────────────────────────────────────────────────────────
call npm run deploy

echo.
echo ════════════════════════════════════════════════════════
echo      ✓ Deploy completado!
echo ════════════════════════════════════════════════════════
echo.
echo Tu dashboard estará disponible en:
echo https://%username%.github.io/aurore-dashboard/
echo.
echo NOTA: La activación puede tomar 2-5 minutos
echo.
echo ════════════════════════════════════════════════════════
pause
