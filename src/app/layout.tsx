import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import { Footer } from '../components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Digital Marketing Services | XYZ Digital Marketing Firm',
  description: 'Result-driven digital marketing agency helping businesses grow online.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
