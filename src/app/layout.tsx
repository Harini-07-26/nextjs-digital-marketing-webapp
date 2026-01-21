import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SplashScreenDark from '../components/ui/SplashScreenDark';
import AnimatedLayout from './AnimatedLayout';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | XYZ Digital Marketing Firm',
  description: 'Result-driven digital marketing agency helping businesses grow online.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedLayout>
          <SplashScreenDark />
          <Navbar />
          {children}
          <Footer />
        </AnimatedLayout>
      </body>
    </html>
  );
}
