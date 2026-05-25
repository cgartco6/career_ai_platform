import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, currency = 'ZAR', provider = 'payfast', tier } = body;

    // Free tier enforcement
    if (!amount || amount === 0) {
      return NextResponse.json({
        status: 'free_tier',
        message: 'Free tier active. Limits: 3 resumes/month, 10 AI calls/day',
        upgradeOptions: [
          { name: 'Starter', price: 149, currency: 'ZAR' },
          { name: 'Pro', price: 299, currency: 'ZAR' }
        ]
      });
    }

    // Simulate payment session
    let sessionUrl = '';

    if (provider === 'payfast') {
      sessionUrl = `https://www.payfast.co.za/eng/process?merchant_id=\( {process.env.PAYFAST_MERCHANT_ID || 'test'}&amount= \){amount}&item_name=CareerAI_${tier}`;
    } else if (provider === 'stripe') {
      sessionUrl = `https://checkout.stripe.com/c/pay/${Date.now()}`; // Real integration needed
    }

    return NextResponse.json({
      success: true,
      status: 'redirect',
      url: sessionUrl,
      provider: provider,
      amount: amount,
      tier: tier
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Payment session creation failed'
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json({
    availableProviders: ['payfast', 'ozow', 'stripe'],
    message: 'Payment API is active'
  });
}
