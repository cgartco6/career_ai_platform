import mongoose from 'mongoose';

const revenueSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  totalZAR: Number,
  ownerShare: Number,
  africanBankShare: Number,
  operationsShare: Number,
  companyReserve: Number
});

export default mongoose.model('Revenue', revenueSchema);
