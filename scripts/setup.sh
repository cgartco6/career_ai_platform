#!/bin/bash
echo "🚀 CareerAI v1.3 Full Setup - Self-Running AI Business"
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
cd marketing && npm install && cd ..
cd self-healing && npm install && cd ..
cd generators && npm install && cd ..
cd payments && npm install && cd ..
echo "✅ Complete. Run: docker-compose up"
