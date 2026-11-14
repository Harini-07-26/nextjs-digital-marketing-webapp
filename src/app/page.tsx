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
      <div className="min-h-screen bg-background my-10">
        <HomePage />
      </div>
    </>
  );
};

export default Index;
