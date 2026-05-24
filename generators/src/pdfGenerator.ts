import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export async function generateResumePDF(resumeData: any, atsScore: number): Promise<Buffer> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawText(resumeData.title || "Professional Resume", { x: 50, y: 780, size: 26, font: bold });
  page.drawText(`ATS Score: ${atsScore}%`, { x: 50, y: 740, size: 16, font: bold, color: rgb(0, 0.6, 0) });

  let y = 680;
  const lines = (resumeData.content || "").split('\n');
  for (const line of lines) {
    if (y < 50) break;
    page.drawText(line, { x: 50, y, size: 12, font });
    y -= 18;
  }

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function generateZIPPackage(resumeData: any, pdfBuffer: Buffer) {
  const JSZip = (await import('jszip')).default;
  const zip = new JSZip();
  zip.file("resume.pdf", pdfBuffer);
  zip.file("resume.json", JSON.stringify(resumeData, null, 2));
  return await zip.generateAsync({ type: "nodebuffer" });
}
