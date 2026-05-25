import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    version: '1.3.0',
    message: 'CareerAI Backend Running'
  });
});

// TODO: Add your routes later
// app.use('/api/resume', resumeRouter);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('MongoDB Error:', err));

cron.schedule('0 0 * * *', () => {
  console.log('Daily payout cron triggered');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
