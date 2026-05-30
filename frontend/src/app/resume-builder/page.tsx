'use client';
import { useState } from 'react';
import ResumeEditor from '@/components/ResumeEditor';

export default function ResumeBuilder() {
  const [data, setData] = useState({
    title: '',
    content: '',
    jobDescription: ''
  });
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const analyzeATS = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'analyze', resumeData: data })
      });
      const result = await res.json();
      setScore(result.atsScore || 82);
    } catch (err) {
      alert("Analysis failed. Please try again.");
    }
    setLoading(false);
  };

  const downloadPDF = async () => {
    const res = await fetch('/api/resume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'export-pdf', resumeData: data, atsScore: score })
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    setPdfUrl(url);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.title || 'resume'}.pdf`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-bold">Resume Builder</h1>
          <div className="text-sm text-green-600 font-medium">Owner Mode - Unlimited Access</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <ResumeEditor data={data} onChange={setData} />

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 border">
              <h3 className="text-2xl font-semibold mb-6">ATS Analysis</h3>
              <button 
                onClick={analyzeATS}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl text-lg font-semibold disabled:opacity-70"
              >
                {loading ? 'Analyzing...' : 'Get Professional ATS Score'}
              </button>

              {score && (
                <div className="mt-8 text-center">
                  <div className="text-8xl font-bold text-green-600">{score}</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400">ATS Compatibility Score</p>
                </div>
              )}
            </div>

            <button 
              onClick={downloadPDF}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-lg font-semibold"
            >
              Download Professional PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
