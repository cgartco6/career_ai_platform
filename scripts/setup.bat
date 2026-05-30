@echo off
echo ========================================
echo   CareerAI - Clean Full Setup
echo ========================================

cd /d C:\Users\i5\Documents\GitHub\career_ai_platform\frontend

echo Cleaning old files...
rd /s /q node_modules 2>nul
rd /s /q .next 2>nul

echo Installing fresh dependencies...
npm cache clean --force
npm install --legacy-peer-deps

echo.
echo ✅ Setup Complete!
echo.
echo Starting app...
npm run dev

pause
