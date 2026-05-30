'use client';

interface Props {
  data: any;
  onChange: (data: any) => void;
}

export default function ResumeEditor({ data, onChange }: Props) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-3xl p-10">
      <input
        type="text"
        placeholder="Resume Title"
        className="w-full p-4 border rounded-xl mb-6 text-xl"
        value={data.title}
        onChange={(e) => onChange({ ...data, title: e.target.value })}
      />
      <textarea
        className="w-full h-96 p-6 border rounded-2xl text-base"
        placeholder="Paste your full resume content here..."
        value={data.content}
        onChange={(e) => onChange({ ...data, content: e.target.value })}
      />
    </div>
  );
}
