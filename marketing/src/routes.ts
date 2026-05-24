import express from 'express';
import { generateDailyContent } from './engine';

const router = express.Router();
router.get('/generate', async (req, res) => {
  const content = await generateDailyContent();
  res.json({ content, target: "250 paid + 600 free daily (realistic ramp via organic pull)" });
});
export default router;
