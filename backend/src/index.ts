import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';
import paymentRoutes from '../payments/src/routes';
import resumeRoutes from './routes/resume';
import marketingRoutes from '../marketing/src/routes';
import { runDailyPayouts } from '../cron/payouts';
import { selfHeal } from '../self-healing/src/healer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payments', paymentRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/marketing', marketingRoutes);

app.get('/health', (req, res) => res.json({ status: 'healthy', version: '1.3', ai_mode: 'self_running' }));

mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log('✅ MongoDB connected - Self-Healing Active');
});

cron.schedule('0 0 * * *', runDailyPayouts);   // Daily 45/10/45
cron.schedule('*/15 * * * *', selfHeal);       // Health check every 15 min

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 CareerAI v1.3 LIVE - AI Self-Running Business`));
