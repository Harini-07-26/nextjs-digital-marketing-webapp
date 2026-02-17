import { CTA } from '../components/CTA';
import { Features } from '../components/features';
import { Footer } from '../components/footer';
import Hero from '../components/hero';
import MarketInsights from '../components/market-insights';
import TimeLineComponent from '../components/timeline';

const Index = () => {
  return (
    <div className="min-h-screen bg-background mx-10 my-10">
      <Hero />
      <Features />
      <MarketInsights />
      <TimeLineComponent />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
