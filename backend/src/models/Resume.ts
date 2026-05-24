import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  jobDescription: String,
  atsScore: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Resume', resumeSchema);
