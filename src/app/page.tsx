import ComparisonSection from '../components/comparison';
import ContactSection from '../components/contact-section';
import { CTA } from '../components/CTA';
import { Features } from '../components/features';
import { Footer } from '../components/footer';
import Hero from '../components/hero';
import MarketInsights from '../components/market-insights';
import Testimonials from '../components/testimonials';
import TimeLineComponent from '../components/timeline';

const Index = () => {
  return (
    <div className="min-h-screen bg-background mx-10 my-10">
      <Hero />
      <Testimonials />
      <Features
        datatestId={'how-we-drive-growth-component'}
        variant="light"
        title={'How We Drive Growth'}
        description={
          'Full-funnel marketing and creative services designed to acquire, convert, and retain your ideal customers at every stage of their journey.'
        }
      />
      <ComparisonSection />
      <MarketInsights />
      <TimeLineComponent />
      <Features
        datatestId={'industries-we-serve-component'}
        title={'Industries We Serve'}
        description={
          'Specialist expertise across diverse sectors, with tailored strategies and deep understanding of each industry’s unique challenges.'
        }
      />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
