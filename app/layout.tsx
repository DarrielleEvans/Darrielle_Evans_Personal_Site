import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Darrielle Evans | Software Engineer Turned Founder',
  description: 'Technical founder solving trust and safety in beauty services through Bea\'Viewed. Available for speaking engagements on beauty-tech, entrepreneurship, and building in public.',
  keywords: 'software engineer, founder, beauty tech, Bea\'Viewed, technical founder, speaker, entrepreneur',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
