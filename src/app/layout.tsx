import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/Layout';
import { Inconsolata, Orbitron } from 'next/font/google';

const orbitron = Orbitron({
  variable: '--font-orbitron',
  weight: ['500', '700'],
  display: 'swap',
  subsets: ['latin'],
});

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  weight: ['500'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '0N1 FORCE',
  description:
    'The original collection, 0N1 Force are 7,777 citizens that had once lived for eternity in the Ethereal Enclave.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inconsolata.className} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
