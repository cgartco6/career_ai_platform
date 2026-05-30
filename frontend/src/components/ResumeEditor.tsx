'use client';

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function ResumeEditor({ data, onChange }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-xl">
      <h2 className="text-3xl font-bold mb-8">Professional Resume Editor</h2>
      
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-medium mb-3">Resume Title</label>
          <input
            type="text"
            className="w-full px-6 py-4 border border-gray-300 rounded-2xl text-lg"
            value={data.title}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Job Description (for better matching)</label>
          <textarea
            className="w-full h-32 px-6 py-4 border border-gray-300 rounded-2xl"
            value={data.jobDescription}
            onChange={(e) => onChange({ ...data, jobDescription: e.target.value })}
            placeholder="Paste job description here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3">Full Resume Content</label>
          <textarea
            className="w-full h-96 px-6 py-5 border border-gray-300 rounded-2xl font-mono text-sm leading-relaxed"
            value={data.content}
            onChange={(e) => onChange({ ...data, content: e.target.value })}
            placeholder="Paste or type your full resume here..."
          />
        </div>
      </div>
    </div>
  );
}
