'use client';

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function ResumeEditor({ data, onChange }: Props) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-xl">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-white">Professional Resume Editor</h2>
      
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Resume Title</label>
          <input
            type="text"
            className="w-full px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Software Engineer Resume"
            value={data.title || ''}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Job Description (Optional - Improves ATS Score)</label>
          <textarea
            className="w-full h-32 px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste the job description here for better keyword matching..."
            value={data.jobDescription || ''}
            onChange={(e) => onChange({ ...data, jobDescription: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Resume Content</label>
          <textarea
            className="w-full h-96 px-5 py-4 border border-gray-300 dark:border-gray-600 rounded-2xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Paste or write your full resume here..."
            value={data.content || ''}
            onChange={(e) => onChange({ ...data, content: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}
