Write-Host "🚀 CareerAI Platform Full Setup" -ForegroundColor Green

# Check Node
try {
  node -v | Out-Null
  Write-Host "Node.js detected" -ForegroundColor Green
} catch {
  Write-Host "Node.js not found. Install from nodejs.org" -ForegroundColor Red
  exit 1
}

Write-Host "Installing root dependencies..." 
npm install

Write-Host "Installing frontend dependencies..." 
Set-Location frontend
npm install
Set-Location ..

Write-Host "`n✅ Setup Complete!" -ForegroundColor Green
Write-Host "To start:" -ForegroundColor Yellow
Write-Host "cd frontend" 
Write-Host "npm run dev"
Write-Host "Open: http://localhost:3000" -ForegroundColor Cyan
