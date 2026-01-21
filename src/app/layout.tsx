import type { Metadata } from 'next';
import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SplashScreen from '../components/ui/SplashScreen';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | XYZ Digital Marketing Firm',
  description: 'Result-driven digital marketing agency helping businesses grow online.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
