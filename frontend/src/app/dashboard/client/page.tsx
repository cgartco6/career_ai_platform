'use client';
export default function ClientDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Your Progress</h1>
      <p>Resumes created: 2/3 (Free)</p>
      <p>AI Calls today: 4/10</p>
      <a href="/resume-builder" className="text-blue-600">Build New Resume</a>
    </div>
  );
}
