import mongoose from 'mongoose';
import Revenue from '../models/Revenue';

export async function runDailyPayouts() {
  const totalRevenue = 2850;

  const ownerShare = Math.round(totalRevenue * 0.45 * 100) / 100;
  const africanBankShare = Math.round(totalRevenue * 0.10 * 100) / 100;
  let operationsShare = Math.round(totalRevenue * 0.45 * 100) / 100;

  let companyReserve = 0;
  if (3800 < 5000) {
    companyReserve = Math.round(operationsShare * 0.10 * 100) / 100;
    operationsShare -= companyReserve;
  }

  console.log(`💰 Daily Payout Executed - ${new Date().toISOString()}`);
  console.log(`Total: R\( {totalRevenue} | Owner: R \){ownerShare} | African Bank: R\( {africanBankShare} | Operations: R \){operationsShare}`);

  await Revenue.create({
    totalZAR: totalRevenue,
    ownerShare,
    africanBankShare,
    operationsShare,
    companyReserve
  });
}
