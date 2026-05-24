import express from 'express';
import Resume from '../models/Resume';
import { generateResumePDF, generateZIPPackage } from '../../generators/src/pdfGenerator';

const router = express.Router();

router.post('/', async (req, res) => {
  const resume = await Resume.create(req.body);
  res.json({ resume });
});

router.post('/export-pdf', async (req, res) => {
  const pdfBuffer = await generateResumePDF(req.body.resumeData, req.body.atsScore || 75);
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="resume.pdf"');
  res.send(pdfBuffer);
});

router.post('/export-zip', async (req, res) => {
  const pdfBuffer = await generateResumePDF(req.body.resumeData, req.body.atsScore || 75);
  const zipBuffer = await generateZIPPackage(req.body.resumeData, pdfBuffer);
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="careerai-package.zip"');
  res.send(zipBuffer);
});

export default router;
