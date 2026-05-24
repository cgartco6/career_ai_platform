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
  const totalRevenue = 2850;

  const ownerShare = totalRevenue * 0.45;
  const africanBankShare = totalRevenue * 0.10;
  let operationsShare = totalRevenue * 0.45;

  let companyReserve = 0;
  if (3800 < 5000) {
    companyReserve = operationsShare * 0.10;
    operationsShare -= companyReserve;
  }

  console.log(`💰 Daily Payout ${new Date().toISOString()}:
    Total: R${totalRevenue}
    Owner (45%): R${ownerShare}
    African Bank (10%): R${africanBankShare}
    Operations (45%): R${operationsShare}
    Reserve: R${companyReserve}`);

  await Revenue.create({ date: new Date(), totalZAR: totalRevenue, ownerShare, africanBankShare, operationsShare, companyReserve });
}
