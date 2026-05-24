#!/bin/bash
echo "🚀 Setting up CareerAI Platform v1.3 - Self-Running AI Business"
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..
cd marketing && npm install && cd ..
cd self-healing && npm install && cd ..
echo "✅ Setup complete. AI self-healing, self-evolving, auto-scale enabled."
echo "Daily payouts: 45% Owner | 10% African Bank | 45% Operations"
echo "Run: docker-compose up"
