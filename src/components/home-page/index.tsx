import ProductShowcase from '../animated-cards';
import { featuresData } from '../common/common-data';
import ComparisonSection from '../comparison';
import ContactSection from '../contact-section';
import { CTA } from '../CTA';
import DevelopmentProcess from '../development-process';
import FAQSection from '../Faq';
import Features from '../features';
import Hero from '../hero';
import IndustriesWeServe from '../industries-serving';
import MarketInsights from '../market-insights';
import ServicesSection from '../services';
import Testimonials from '../testimonials';
import TimeLineComponent from '../timeline';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <IndustriesWeServe />
      <ServicesSection />
      <ProductShowcase />
      <DevelopmentProcess />
      <Testimonials />
      <Features
        features={featuresData}
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
        features={featuresData}
        datatestId={'industries-we-serve-component'}
        title={'Industries We Serve'}
        description={
          'Specialist expertise across diverse sectors, with tailored strategies and deep understanding of each industry’s unique challenges.'
        }
      />
      <CTA />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
