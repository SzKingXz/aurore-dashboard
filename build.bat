@echo off
echo ============================================
echo   AURORE Dashboard - Build for Production
echo ============================================
echo.
echo Building production version...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================
    echo   Build successful!
    echo ============================================
    echo.
    echo Files are in the 'dist' folder
    echo.
    echo To deploy to GitHub Pages:
    echo   npm run deploy
    echo.
) else (
    echo.
    echo [ERROR] Build failed!
    echo.
)
pause
