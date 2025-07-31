@echo off
REM Portfolio Deployment Script for Windows

echo 🚀 Deploying Portfolio to GitHub Pages...

REM Test build locally first
echo 📦 Testing build...
call npm run build:client

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    
    REM Add all changes
    git add .
    
    REM Commit with timestamp
    for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
    for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a:%%b)
    git commit -m "Update portfolio - %mydate% %mytime%"
    
    REM Push to GitHub (this triggers automatic deployment)
    git push origin main
    
    echo ✅ Pushed to GitHub!
    echo 🌐 Your site will be live at: https://synnbad.github.io/Portfolio-20Website/
    echo ⏱️  Deployment usually takes 2-3 minutes
) else (
    echo ❌ Build failed! Please fix errors before deploying.
)
