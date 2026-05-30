#!/bin/bash
echo "🚀 CareerAI Platform Full Setup (Linux/macOS)"

if ! command -v node &> /dev/null; then
  echo "Node.js not found. Install from nodejs.org"
  exit 1
fi

echo "Installing dependencies..."
npm install
cd frontend && npm install && cd ..

echo "✅ Setup Complete!"
echo "Run:"
echo "cd frontend && npm run dev"
echo "Open http://localhost:3000"
