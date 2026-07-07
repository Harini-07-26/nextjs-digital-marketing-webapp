import type { Metadata } from 'next';
import SolutionsPage from '@/src/components/solutions-page';

export const metadata: Metadata = {
  title: 'Growth Marketing Solutions | DIGI',
  description: 'Explore tailored B2B SaaS, E-Commerce, Healthcare, and Fintech growth marketing solutions designed to scale your pipeline and boost ROAS.',
};

const SolutionsPageComponent = () => {
  return (
    <div>
      <SolutionsPage />
    </div>
  );
};

export default SolutionsPageComponent;
