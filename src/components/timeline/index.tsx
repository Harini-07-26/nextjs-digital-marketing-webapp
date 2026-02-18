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
    <section className="my-5 bg-background">
      <div className="container">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">How We Work</h2>
          <p className="text-slate-400 text-lg mb-0 max-w-2xl mx-auto mt-6">
            A proven framework that delivers consistent, measurable results through data-driven strategy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-[34px] mx-auto h-[2px] max-w-6xl bg-gradient-to-r from-[#6366f1] via-pink-500  to-[#8b5cf6]" />

          <div className="grid grid-cols-1 gap-16 md:grid-cols-5">
            {steps.map((item) => (
              <div key={item.step} className="relative text-center">
                {/* Dangling Number */}
                <motion.div
                  whileHover={{
                    rotate: [0, 12, -10, 6, -4, 0]
                  }}
                  transition={{
                    duration: 0.9,
                    ease: 'easeInOut'
                  }}
                  className="relative z-10 mx-auto flex h-16 w-16 origin-top items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-blue-300 text-xl font-bold text-white shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]"
                >
                  {item.step}
                </motion.div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
