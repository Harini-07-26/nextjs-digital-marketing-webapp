'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  { feature: 'Campaign Setup', traditional: '2-4 weeks delay', growthVoice: 'Launched in 48 hrs' },
  { feature: 'Attribution', traditional: 'Last-click only', growthVoice: 'Multi-touch AI attribution' },
  { feature: 'Creative Asset Variety', traditional: '1-2 ad variants/mo', growthVoice: '30+ fresh variants/mo' },
  { feature: 'Reporting', traditional: 'Monthly PDF summary', growthVoice: 'Real-time dashboard' },
  { feature: 'ROAS Optimization', traditional: 'Manual weekly check', growthVoice: 'Automated 24/7 AI tuning' },
  { feature: 'Account Lead', traditional: 'Junior account manager', growthVoice: 'Senior Growth Strategist' }
];

const ComparisonSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Why Choose Us</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-5xl text-foreground">
            Not Your Average Marketing Agency
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See how Growth Voice stacks up against traditional marketing agencies.
          </p>
        </motion.div>

        {/* Table with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-4xl"
        >
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
                <span className="text-center font-display text-xs sm:text-sm font-bold text-primary">Growth Voice</span>
              </div>

              {/* Rows */}
              {comparisons.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="group grid grid-cols-3 items-center border-b border-border/60 px-3 sm:px-6 py-3.5 gap-2 transition-colors hover:bg-secondary/60"
                >
                  <span className="text-xs sm:text-sm font-semibold text-foreground">{row.feature}</span>
                  <span className="text-center text-xs sm:text-sm text-muted-foreground">{row.traditional}</span>
                  <div className="flex justify-center">
                    <span className="rounded-lg bg-primary/15 border border-primary/30 px-2.5 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-primary text-center">
                      {row.growthVoice}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default ComparisonSection;
