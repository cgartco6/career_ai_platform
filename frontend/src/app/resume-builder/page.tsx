'use client';
import { useState } from 'react';

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    title: '',
    content: '',
    jobDescription: ''
  });
  const [atsScore, setAtsScore] = useState<number | null>(null);

  const handleAnalyze = async () => {
    const res = await fetch('http://localhost:5000/api/resume/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(resumeData)
    });
    const data = await res.json();
    setAtsScore(data.score);
  };

  const downloadPDF = async () => {
    const res = await fetch('http://localhost:5000/api/resume/export-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumeData })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-resume.pdf';
    a.click();
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Resume Builder (Free Tier Active)</h1>
      
      <textarea
        className="w-full h-96 p-4 border rounded-xl mb-6"
        placeholder="Paste or type your resume content here..."
        value={resumeData.content}
        onChange={(e) => setResumeData({ ...resumeData, content: e.target.value })}
      />

      <button 
        onClick={handleAnalyze}
        className="bg-blue-600 text-white px-8 py-4 rounded-xl mr-4"
      >
        Get ATS Score
      </button>

      <button 
        onClick={downloadPDF}
        className="bg-green-600 text-white px-8 py-4 rounded-xl"
      >
        Download PDF
      </button>

      {atsScore && <p className="mt-6 text-2xl">ATS Score: {atsScore}%</p>}
    </div>
  );
}
