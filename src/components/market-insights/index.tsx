'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const metrics = [
  { symbol: 'SEO', name: 'Search Visibility', status: 'Active Growth', metric: '+320%', color: 'bg-primary' },
  { symbol: 'PPC', name: 'Blended ROAS', status: 'High Yield', metric: '4.8x', color: 'bg-fuchsia-500' },
  { symbol: 'CRO', name: 'Conversion Rate', status: 'Optimized', metric: '+180%', color: 'bg-purple-600' }
];

const features = [
  'AI-driven campaign budget optimization',
  'Multi-touch revenue attribution modeling',
  'Real-time competitor market teardowns',
  '24/7 automated conversion monitoring'
];

const MarketInsights = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle gradient background transition */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left – Market Trends Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-2xl border border-border bg-card/60 backdrop-blur-md p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-bold text-foreground">Marketing Performance</h3>
              <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-500">
                +24.8% MoM
              </span>
            </div>

            {/* Performance rows */}
            <div className="space-y-3">
              {metrics.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:bg-secondary/60 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-white font-bold text-xs`}
                    >
                      {item.symbol}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <div className="flex items-center gap-2">
                        <Image
                          src={'/trend.gif'}
                          className="bg-transparent"
                          alt=""
                          height={20}
                          width={20}
                          unoptimized
                        />
                        <p className="text-xs text-muted-foreground">{item.status}</p>
                      </div>
                    </div>
                  </div>
                  <p className="font-display font-bold text-primary">{item.metric}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl text-foreground">
              Stay ahead with <span className="gradient-text">real-time insights</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Our proprietary marketing engine analyzes channel data to deliver hyper-targeted campaigns and maximum ROI for your business.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;

