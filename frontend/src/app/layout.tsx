import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const roboto = localFont({
  src: './fonts/Roboto-Medium.ttf',
  variable: '--font-roboto',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'JSisques Portfolio',
  description: 'JSisques Portfolio desc',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-zinc-50 dark:bg-zinc-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
