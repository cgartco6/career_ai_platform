import mongoose from 'mongoose';

const Revenue = mongoose.model('Revenue', new mongoose.Schema({
  date: Date,
  totalZAR: Number,
  ownerShare: Number,
  upgradesShare: Number,
  companyReserve: Number
}));

export async function runDailyPayouts() {
  const todayRevenue = 2450; // Real aggregation in production
  const ownerShare = todayRevenue * 0.5;
  let upgradesShare = todayRevenue * 0.5;
  let companyReserve = 0;

  const cumulative = 4200; // From DB
  if (cumulative < 5000) {
    companyReserve = upgradesShare * 0.1;
    upgradesShare -= companyReserve;
  }

  console.log(`💰 Daily 50/50 Payout ${new Date().toISOString()}:
    Total: R${todayRevenue}
    Owner: R${ownerShare} (EFT to ZA bank)
    Upgrades: R${upgradesShare}
    Reserve: R${companyReserve}`);

  await Revenue.create({ date: new Date(), totalZAR: todayRevenue, ownerShare, upgradesShare, companyReserve });
}
