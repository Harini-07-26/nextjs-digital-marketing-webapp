'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '1',
    title: 'Discovery',
    desc: 'We dive deep into your brand, audience, and goals to build a strategic foundation.'
  },
  {
    step: '2',
    title: 'Strategy',
    desc: 'Data-driven planning that identifies the best channels and tactics for growth.'
  },
  {
    step: '3',
    title: 'Execute',
    desc: 'Launch campaigns with scroll-stopping creative and precision targeting.'
  },
  {
    step: '4',
    title: 'Optimise',
    desc: 'Continuous testing and refinement to maximise performance.'
  },
  {
    step: '5',
    title: 'Scale',
    desc: 'Expand what works to drive sustainable, long-term growth.'
  }
];

export default function TimeLineComponent() {
  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground">How We Work</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-0 max-w-2xl mx-auto mt-4">
            A proven framework that delivers consistent, measurable results through data-driven strategy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-[32px] mx-auto h-[2px] max-w-5xl bg-gradient-to-r from-primary via-fuchsia-500 to-indigo-500" />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center flex flex-col items-center">
                {/* Dangling Number */}
                <motion.div
                  whileHover={{
                    rotate: [0, 12, -10, 6, -4, 0]
                  }}
                  transition={{
                    duration: 0.9,
                    ease: 'easeInOut'
                  }}
                  className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-end))] text-xl font-bold text-white shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.6)]"
                >
                  {item.step}
                </motion.div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-semibold font-display text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mt-2 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
