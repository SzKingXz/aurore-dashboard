@echo off
title AURORE Dashboard - Sistema Completo
color 0B
echo ================================================
echo    INICIANDO AURORE DASHBOARD
echo ================================================
echo.
echo [1/2] Iniciando servidor backend API...
start cmd /k "title AURORE Backend API && cd /d %~dp0 && npm run server"
timeout /t 3 /nobreak >nul
echo.
echo [2/2] Iniciando interfaz web...
start cmd /k "title AURORE Frontend && cd /d %~dp0 && npm run dev"
echo.
echo ================================================
echo    SISTEMA INICIADO!
echo ================================================
echo.
echo Backend API: http://localhost:3001
echo Dashboard:   http://localhost:5173
echo.
echo IMPORTANTE: El bot de Discord debe estar corriendo
echo             para que la dashboard funcione.
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
