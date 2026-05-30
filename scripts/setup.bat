@echo off
echo ========================================
echo CareerAI Platform Full Setup - Windows
echo ========================================

node -v >nul 2>&1
if %errorlevel% neq 0 (
  echo Node.js not found. Please install from nodejs.org
  pause
  exit /b
)

echo Installing dependencies...
call npm install
cd frontend && call npm install && cd ..

echo.
echo Setup Complete!
echo.
echo Run these commands:
echo cd frontend
echo npm run dev
pause
