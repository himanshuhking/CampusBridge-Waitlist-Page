import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });

export const metadata: Metadata = {
  title: 'CampusBridge — Talk to real students before you decide',
  description: 'Book free one-on-one video calls with current students and alumni at colleges you\'re considering. Honest answers, no sales pitch.',
  openGraph: {
    title: 'CampusBridge — Talk to real students before you decide',
    description: 'Book free one-on-one video calls with current students and alumni at colleges you\'re considering.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
