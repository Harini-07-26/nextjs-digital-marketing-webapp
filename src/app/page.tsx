import type { Metadata } from 'next';
import StructuredData from '../components/common/StructuredData';
import HomePage from '../components/home-page';

export const metadata: Metadata = {
  alternates: {
    canonical: '/'
  }
};

const Index = () => {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-background pt-16 sm:pt-20">
        <HomePage />
      </div>
    </>
  );
};

export default Index;
