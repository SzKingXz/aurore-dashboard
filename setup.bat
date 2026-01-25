@echo off
echo ============================================
echo   AURORE Dashboard - Setup Script
echo ============================================
echo.

REM Check if Git is installed
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Git is not installed!
    echo.
    echo Please install Git first:
    echo 1. Download from: https://git-scm.com/download/win
    echo 2. Install with default settings
    echo 3. Restart this script
    echo.
    pause
    exit /b 1
)

echo [1/6] Git detected...
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js is not installed!
    echo.
    echo Please install Node.js first:
    echo 1. Download from: https://nodejs.org/
    echo 2. Install LTS version
    echo 3. Restart this script
    echo.
    pause
    exit /b 1
)

echo [2/6] Node.js detected...
node --version
echo.

REM Navigate to project directory
cd /d "%~dp0"

REM Install dependencies
echo [3/6] Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Failed to install dependencies!
    pause
    exit /b 1
)
echo.

REM Initialize Git repository
echo [4/6] Initializing Git repository...
if not exist ".git" (
    git init
    git add .
    git commit -m "Initial commit: AURORE Dashboard"
) else (
    echo Git repository already initialized
)
echo.

REM Setup GitHub
echo [5/6] GitHub Setup
echo.
echo To upload to GitHub:
echo 1. Create a new repository on GitHub (https://github.com/new)
echo 2. Name it: aurore-dashboard
echo 3. Do NOT initialize with README, .gitignore, or license
echo.
set /p GITHUB_USERNAME="Enter your GitHub username: "
if "%GITHUB_USERNAME%"=="" (
    echo Skipping GitHub remote setup
) else (
    git remote remove origin 2>nul
    git remote add origin https://github.com/%GITHUB_USERNAME%/aurore-dashboard.git
    echo.
    echo Remote added! You can now push with:
    echo   git push -u origin main
)
echo.

REM Done
echo [6/6] Setup complete!
echo.
echo ============================================
echo   Next steps:
echo ============================================
echo.
echo 1. Run development server:
echo    npm run dev
echo.
echo 2. Build for production:
echo    npm run build
echo.
echo 3. Push to GitHub:
echo    git push -u origin main
echo.
echo 4. Deploy to GitHub Pages:
echo    npm run deploy
echo.
pause
