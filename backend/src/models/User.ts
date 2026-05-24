import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  tier: { type: String, default: 'free' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
