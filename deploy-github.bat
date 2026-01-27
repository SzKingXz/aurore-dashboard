@echo off
echo ==================================================
echo     AURORE Dashboard - Deploy to GitHub Pages
echo ==================================================
echo.
echo Building production version...
call npm run build
echo.
echo Deploying to GitHub Pages...
call npm run deploy
echo.
echo ==================================================
echo     Deploy completed!
echo ==================================================
pause
