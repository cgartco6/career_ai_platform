import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CareerAI - Professional Resume & Interview Platform',
  description: 'High-quality ATS compliant resumes and AI interview preparation',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-950">{children}</body>
    </html>
  );
}
