@echo off
echo Setting up CareerAI Platform v1.3 - Self-Running
call npm install
cd backend && call npm install && cd ..
cd frontend && call npm install && cd ..
cd marketing && call npm install && cd ..
cd self-healing && call npm install && cd ..
echo Setup complete. AI running business.
pause
