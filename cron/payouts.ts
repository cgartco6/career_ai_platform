import mongoose from 'mongoose';

const Revenue = mongoose.model('Revenue', new mongoose.Schema({
  date: Date,
  totalZAR: Number,
  ownerShare: Number,
  africanBankShare: Number,
  operationsShare: Number,
  companyReserve: Number
}));

export async function runDailyPayouts() {
  const totalRevenue = 2850; // Real DB aggregation in production

  const ownerShare = totalRevenue * 0.45;
  const africanBankShare = totalRevenue * 0.10;
  let operationsShare = totalRevenue * 0.45;

  let companyReserve = 0;
  const cumulative = 3800; // From DB
  if (cumulative < 5000) {
    companyReserve = operationsShare * 0.10;
    operationsShare -= companyReserve;
  }

  console.log(`💰 Daily Payouts v1.3 (${new Date().toISOString()}):
    Total Revenue     : R${totalRevenue}
    Owner (45%)       : R${ownerShare} → ${process.env.OWNER_BANK_ACCOUNT}
    African Bank (10%): R${africanBankShare} → ${process.env.AFRICAN_BANK_ACCOUNT}
    Operations (45%)  : R${operationsShare}
    Company Reserve   : R${companyReserve} (until R5000)`);

  await Revenue.create({
    date: new Date(),
    totalZAR: totalRevenue,
    ownerShare,
    africanBankShare,
    operationsShare,
    companyReserve
  });
}
