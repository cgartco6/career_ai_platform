import mongoose from 'mongoose';

const RevenueSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalZAR: Number,
  ownerShare: Number,
  africanBankShare: Number,
  operationsShare: Number,
  companyReserve: Number
});

const Revenue = mongoose.model('Revenue', RevenueSchema);

export async function runDailyPayouts() {
  try {
    const totalRevenue = 2850; // In production: await aggregateRevenue();

    const ownerShare = Math.round(totalRevenue * 0.45 * 100) / 100;
    const africanBankShare = Math.round(totalRevenue * 0.10 * 100) / 100;
    let operationsShare = Math.round(totalRevenue * 0.45 * 100) / 100;

    let companyReserve = 0;
    const cumulativeReserve = 3800; // From DB tracking

    if (cumulativeReserve < 5000) {
      companyReserve = Math.round(operationsShare * 0.10 * 100) / 100;
      operationsShare -= companyReserve;
    }

    console.log(`💰 [${new Date().toISOString()}] Daily Payout Executed`);
    console.log(`Total Revenue     : R${totalRevenue}`);
    console.log(`Owner (45%)       : R${ownerShare} → ${process.env.OWNER_BANK_ACCOUNT}`);
    console.log(`African Bank (10%): R${africanBankShare} → ${process.env.AFRICAN_BANK_ACCOUNT}`);
    console.log(`Operations (45%)  : R${operationsShare}`);
    console.log(`Company Reserve   : R${companyReserve}`);

    await Revenue.create({
      totalZAR: totalRevenue,
      ownerShare,
      africanBankShare,
      operationsShare,
      companyReserve
    });
  } catch (error) {
    console.error('Payout execution failed:', error);
  }
}
