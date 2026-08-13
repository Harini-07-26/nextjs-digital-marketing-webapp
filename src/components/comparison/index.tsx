'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';

const comparisons = [
  {
    feature: 'Strategy',
    traditional: 'One-size-fits-all',
    growthVoice: 'Tailored growth strategy'
  },
  {
    feature: 'SEO',
    traditional: 'Basic optimisation',
    growthVoice: 'Continuous search growth'
  },
  {
    feature: 'Content',
    traditional: 'Inconsistent content',
    growthVoice: 'Content built to convert'
  },
  {
    feature: 'Paid Ads',
    traditional: 'Set and monitor',
    growthVoice: 'Test, optimise & scale'
  },
  {
    feature: 'Lead Generation',
    traditional: 'Traffic focused',
    growthVoice: 'Quality lead focused'
  },
  {
    feature: 'Optimisation',
    traditional: 'Occasional changes',
    growthVoice: 'Continuous optimisation'
  }
];

const ComparisonSection = () => {
  return (
    <section className="relative py-12 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative px-4 sm:px-6">
        {/* Header */}
        <ScrollReveal variant="slide" direction="up">
          <div className="text-center mb-14">
            <span className="announcement-badge">
              <span className="glow-dot" /> Why Choose Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Not Your Average <span className="gradient-text">Marketing Agency</span>
            </h2>
            <p className="text-lg mx-auto mt-4 max-w-xl text-muted-foreground">
              See how Growth Voice stacks up against traditional marketing agencies.
            </p>
          </div>
        </ScrollReveal>

        {/* Table with animated border */}
        <ScrollReveal variant="slide" direction="left">
          <div className="mx-auto max-w-4xl">
            {/* Animated border wrapper */}
            <div className="animated-border-wrapper rounded-2xl p-[2px]">
              <div className="rounded-2xl bg-card/90 backdrop-blur-md overflow-hidden">
                {/* Table header */}
                <div className="grid grid-cols-3 border-b border-border px-3 sm:px-6 py-4 gap-2">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                    Capability
                  </span>
                  <span className="text-center text-xs sm:text-sm font-semibold text-muted-foreground">
                    Traditional Agency
                  </span>
                  <span className="text-center font-display text-xs sm:text-sm font-bold text-primary">
                    Growth Voice
                  </span>
                </div>

                {/* Rows */}
                {comparisons.map((row, i) => (
                  <ScrollReveal
                    key={row.feature}
                    variant="slide"
                    direction={i % 2 === 0 ? 'right' : 'left'}
                    delay={i * 0.06}
                  >
                    <div className="group grid grid-cols-3 items-center border-b border-border/60 px-3 sm:px-6 py-3.5 gap-2 transition-colors hover:bg-secondary/60">
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{row.feature}</span>
                      <span className="text-center text-xs sm:text-sm text-muted-foreground">{row.traditional}</span>
                      <div className="flex justify-center">
                        <span className="rounded-lg bg-primary/15 border border-primary/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-primary text-center">
                          {row.growthVoice}
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

{
  /* CTA Banner */
}
{
  /* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="animated-border-wrapper-subtle rounded-2xl p-[1.5px]">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-6 sm:px-8 py-10 text-center backdrop-blur-md">
              <h3 className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                Experience the Growth Voice difference for yourself
              </h3>
              <button className="btn-primary-gradient mt-6 inline-flex items-center gap-2 text-sm px-6 py-3">
                Book a Strategy Call <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div> */
}

export default ComparisonSection;
