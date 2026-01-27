@echo off
echo ================================================
echo    AURORE DASHBOARD - INSTALACION COMPLETA
echo ================================================
echo.
echo Instalando dependencias del dashboard...
call npm install
echo.
echo Instalando dependencias adicionales para servidor...
call npm install express cors concurrently
echo.
echo ================================================
echo    INSTALACION COMPLETADA!
echo ================================================
echo.
echo Para iniciar:
echo   1. Ejecuta INICIAR_DASHBOARD.bat para iniciar la dashboard
echo   2. Ejecuta el bot de Discord desde la carpeta Discord
echo.
pause
