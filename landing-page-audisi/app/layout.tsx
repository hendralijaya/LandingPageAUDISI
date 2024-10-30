import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { FontProvider } from './FontContext';

const inter = localFont({
  src: './fonts/Inter.woff',
  variable: '--font-inter',
  weight: '100 200 300 400 500 600 700 800 900',
});

const interItalic = localFont({
  src: './fonts/Inter-Italic.woff',
  variable: '--font-inter-italic',
  weight: '100 200 300 400 500 600 700 800 900',
});

const openDyslexic = localFont({
  src: [
    { path: './fonts/OpenDyslexic-Regular.woff', weight: '400' },
    { path: './fonts/OpenDyslexic-Italic.woff', weight: '400', style: 'italic' },
    { path: './fonts/OpenDyslexic-Bold.woff', weight: '700' },
    { path: './fonts/OpenDyslexic-Bold-Italic.woff', weight: '700', style: 'italic' },
  ],
  variable: '--font-open-dyslexic',
});

export const metadata: Metadata = {
  title: 'AUDISI Foundation',
  description: 'AUDISI Foundation adalah organisasi non profit yang berdiri sejak 2017, berkomitmen untuk mempromosikan inklusi disabilitas di seluruh Indonesia. Bergabunglah dalam upaya kami untuk menciptakan masyarakat yang lebih inklusif.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FontProvider>
      <html lang="en">
        <body className={`${inter.variable} ${interItalic.variable} ${openDyslexic.variable} antialiased`}>{children}</body>
      </html>
    </FontProvider>
  );
}
