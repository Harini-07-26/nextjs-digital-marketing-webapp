'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const comparisons = [
  { feature: 'Transaction Speed', traditional: '3-5 business days', digi: 'Near instant' },
  { feature: 'Security', traditional: 'Basic encryption', digi: 'Military-grade encryption' },
  { feature: 'Fees', traditional: 'High hidden fees', digi: 'Transparent & minimal' },
  { feature: 'Accessibility', traditional: 'Limited hours', digi: '24/7 global access' },
  { feature: 'Analytics', traditional: 'Monthly statements', digi: 'Real-time insights' },
  { feature: 'Support', traditional: 'Email only', digi: 'AI + human, 24/7' },
  { feature: 'Integration', traditional: 'Legacy systems', digi: 'Modern API-first' },
  { feature: 'Track Record', traditional: 'Traditional banking', digi: '10M+ users served' }
];

const ComparisonSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-primary uppercase">Why Choose Us</span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Not Your Average Platform</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            See how we stack up against traditional financial services.
          </p>
        </motion.div>

        {/* Table with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          {/* Animated border wrapper */}
          <div className="animated-border-wrapper rounded-2xl p-[2px]">
            <div className="rounded-2xl bg-card/90 backdrop-blur-md overflow-hidden">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-border px-6 py-4">
                <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Feature</span>
                <span className="text-center text-sm font-semibold text-muted-foreground">Traditional</span>
                <span className="text-center font-display text-sm font-bold text-foreground">DIGI</span>
              </div>

              {/* Rows */}
              {comparisons.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="group grid grid-cols-3 items-center border-b border-border/60 px-6 py-3.5 transition-colors hover:bg-secondary/60"
                >
                  <span className="text-sm font-semibold text-foreground">{row.feature}</span>
                  <span className="text-center text-sm text-muted-foreground">{row.traditional}</span>
                  <span className="rounded-lg bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
                    {row.digi}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="animated-border-wrapper-subtle rounded-2xl p-[1.5px]">
            <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 px-8 py-10 text-center backdrop-blur-md">
              <h3 className="font-display text-2xl font-bold gradient-text sm:text-3xl">
                Experience the DIGI difference for yourself
              </h3>
              <button className="btn-primary-gradient mt-6 inline-flex items-center gap-2">
                Book a Strategy Cal <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
