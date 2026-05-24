import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cron from 'node-cron';
import paymentRoutes from '../payments/src/providers';
import resumeRoutes from './routes/resume';
import { runDailyPayouts } from './cron/payouts';
import { selfHeal } from '../../self-healing/src/healer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/api/payments', paymentRoutes);
app.use('/api/resume', resumeRoutes);

app.get('/health', (req, res) => res.json({ status: 'healthy', version: '1.3.0' }));

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

cron.schedule('0 0 * * *', runDailyPayouts);
cron.schedule('*/15 * * * *', selfHeal);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend v1.3 running on port ${PORT}`));
