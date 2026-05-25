import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    version: '1.3.0',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    message: 'CareerAI API is running successfully on Vercel',
    location: 'Cape Town, ZA'
  });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    message: 'POST method also supported'
  });
}
