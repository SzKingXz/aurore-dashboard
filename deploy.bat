@echo off
echo ============================================
echo   AURORE Dashboard - GitHub Deployment
echo ============================================
echo.

REM Check if we're in a git repository
if not exist ".git" (
    echo [ERROR] Not a Git repository!
    echo Run setup.bat first to initialize Git
    pause
    exit /b 1
)

REM Check for uncommitted changes
git diff-index --quiet HEAD --
if %ERRORLEVEL% NEQ 0 (
    echo You have uncommitted changes.
    set /p COMMIT_MSG="Enter commit message (or press Enter to skip): "
    if not "!COMMIT_MSG!"=="" (
        git add .
        git commit -m "!COMMIT_MSG!"
    )
)

echo.
echo [1/3] Building production version...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo [2/3] Deploying to GitHub Pages...
call npm run deploy
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Deployment failed!
    echo.
    echo Make sure you have:
    echo 1. Created the repository on GitHub
    echo 2. Set up the remote: git remote add origin [URL]
    echo 3. Pushed at least once: git push -u origin main
    pause
    exit /b 1
)

echo.
echo [3/3] Deployment successful!
echo.
echo ============================================
echo   Your dashboard is now live!
echo ============================================
echo.
echo It may take a few minutes to appear at:
echo   https://YOUR_USERNAME.github.io/aurore-dashboard/
echo.
pause
