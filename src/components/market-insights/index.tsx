'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const cryptos = [
  { symbol: 'B', name: 'Bitcoin', status: 'Trending', price: '$64,231', color: 'bg-orange-500' },
  { symbol: 'E', name: 'Ethereum', status: 'Trending', price: '$3,412', color: 'bg-blue-500' },
  { symbol: 'S', name: 'Solana', status: 'Trending', price: '$145', color: 'bg-purple-500' }
];

const features = [
  'AI-driven portfolio rebalancing',
  'Custom price alert notifications',
  'Institutional grade research reports',
  '24/7 market monitoring'
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
              <h3 className="font-display text-xl font-bold">Market Trends</h3>
              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-semibold text-green-400">
                +12.5%
              </span>
            </div>

            {/* Crypto rows */}
            <div className="space-y-3">
              {cryptos.map((crypto, i) => (
                <motion.div
                  key={crypto.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'hsl(228 20% 14%)' }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${crypto.color} text-white font-bold text-sm`}
                    >
                      {crypto.symbol}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{crypto.name}</p>
                      <span>
                        <Image
                          src={'/trend.gif'}
                          className="bg-transparent"
                          alt=""
                          height={35}
                          width={35}
                          unoptimized
                        />{' '}
                        <p className="text-xs text-muted-foreground">{crypto.status}</p>{' '}
                      </span>
                    </div>
                  </div>
                  <p className="font-display font-bold text-foreground">{crypto.price}</p>
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
            <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              Stay ahead with <span className="gradient-text">real-time insights</span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Our proprietary AI engine analyzes millions of data points every second to give you the most accurate
              market predictions and personalized financial advice.
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
