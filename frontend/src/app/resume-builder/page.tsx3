'use client';
import { useState } from 'react';
import ResumeEditor from '@/components/ResumeEditor';

export default function ResumeBuilderPage() {
  const [data, setData] = useState({ title: '', content: '', jobDescription: '' });
  const [score, setScore] = useState<number | null>(null);

  const analyze = async () => {
    const res = await fetch('http://localhost:5000/api/resume/analyze', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    const result = await res.json();
    setScore(result.score);
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Resume Builder (Free Tier)</h1>
      <ResumeEditor data={data} onChange={setData} />
      <button onClick={analyze} className="mt-6 bg-blue-600 text-white px-8 py-4 rounded-xl">Analyze ATS Score</button>
      {score && <p className="mt-4 text-2xl">ATS Score: {score}%</p>}
    </div>
  );
}
