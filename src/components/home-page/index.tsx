import ComparisonSection from '../comparison';
import ContactSection from '../contact-section';
import DevelopmentProcess from '../development-process';
import FAQSection from '../Faq';
import Hero from '../hero';
import IndustriesWeServe from '../industries-serving';
import Testimonials from '../testimonials';

const HomePage = () => {
  return (
    <div className="p-2">
      <Hero />
      <IndustriesWeServe />
      {/* <ServicesSection /> */}
      {/* <ProductShowcase /> */}
      <DevelopmentProcess />
      <Testimonials />
      {/* <Features
        features={newUpdatedFeaturesData}
        datatestId={'how-we-drive-growth-component'}
        variant="light"
        title={'How We Drive Growth'}
        description={
          'Full-funnel marketing and creative services designed to acquire, convert, and retain your ideal customers at every stage of their journey.'
        }
      /> */}
      <ComparisonSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
