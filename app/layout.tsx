import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hasti AI Signal Studio',
  description: 'AI SaaS starter for brand signal analysis and automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
