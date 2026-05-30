import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-7xl font-bold mb-6">CareerAI</h1>
        <p className="text-3xl mb-10">Professional ATS Resume Builder + AI Interview Tutor</p>
        <div className="flex gap-6 justify-center">
          <Link href="/resume-builder" className="bg-white text-black px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-100">
            Build Resume Free
          </Link>
          <Link href="/dashboard/owner" className="border-2 border-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white/10">
            Owner Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
