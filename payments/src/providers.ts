import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createPaymentSession(amount: number, provider: string) {
  return {
    url: provider === 'payfast' ? `https://www.payfast.co.za/eng/process?amount=${amount}` : '#',
    status: 'redirect'
  };
}
