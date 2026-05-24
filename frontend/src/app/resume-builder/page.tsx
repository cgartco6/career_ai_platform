'use client';
import { useState } from 'react';
import ResumeEditor from '@/components/ResumeEditor';

export default function ResumeBuilder() {
  const [data, setData] = useState({ title: '', content: '', jobDescription: '' });

  const exportPDF = async () => {
    const res = await fetch('http://localhost:5000/api/resume/export-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeData: data })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'resume.pdf'; a.click();
  };

  return (
    <div className="p-8">
      <ResumeEditor data={data} onChange={setData} />
      <button onClick={exportPDF} className="mt-6 bg-green-600 text-white px-8 py-4 rounded-xl">
        Download PDF (Free Tier)
      </button>
    </div>
  );
}
