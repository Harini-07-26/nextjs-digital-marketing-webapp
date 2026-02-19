'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../scroll-reveal';

const testimonials = [
  {
    badge: '+49% Sales Growth',
    badgeColor: 'text-red-400 bg-red-400/15',
    stars: 3,
    quote:
      "Devoured transformed our digital marketing. They don't just run ads, they become an extension of your team and genuinely care about driving results.",
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Luxe Figs • E-commerce'
  },
  {
    badge: '10K+ Installs, -48% CPI',
    badgeColor: 'text-yellow-400 bg-yellow-400/15',
    stars: 5,
    quote: "10k+ downloads and a 48% decrease in cost per install. The team's expertise in app marketing is unmatched.",
    name: 'James Chen',
    role: 'CEO',
    company: 'Belong • FinTech App'
  },
  {
    badge: '13.5M Views Generated',
    badgeColor: 'text-green-400 bg-green-400/15',
    stars: 5,
    quote: 'They turned our TikTok into a vibrant hub, significantly boosting engagement. True social media wizards.',
    name: 'Priya Kapoor',
    role: 'Social Media Manager',
    company: 'Go Ape UK • Hospitality'
  },
  {
    badge: '+120% ROI in 6 Months',
    badgeColor: 'text-blue-400 bg-blue-400/15',
    stars: 5,
    quote:
      "Their data-driven approach doubled our return on ad spend. We've never seen this level of performance from any agency.",
    name: 'Tom Bradley',
    role: 'Head of Growth',
    company: 'NovaPay • Fintech'
  },
  {
    badge: '3x Conversion Rate',
    badgeColor: 'text-purple-400 bg-purple-400/15',
    stars: 4,
    quote:
      'The CRO work alone tripled our checkout conversions. Combined with their paid strategy, results were outstanding.',
    name: 'Elena Rossi',
    role: 'COO',
    company: 'StyleVault • Fashion'
  }
];

// Double the array for seamless infinite scroll
const doubled = [...testimonials, ...testimonials];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-yellow-400' : 'text-muted-foreground/30'}>
        ★
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 overflow-hidden bg-gradient-to-br from-blue-500/10 via-pink-500/10 to-purple-500/10">
      <div className="container mb-14">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground">
            What Our Clients Say
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal infinite scroll */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear'
            }
          }}
        >
          {doubled.map((t, i) => (
            <div key={i} className="animated-border-wrapper-subtle rounded-2xl p-[1px] shrink-0 w-[420px]">
              <div className="rounded-2xl bg-card p-8 h-full flex flex-col gap-4">
                {/* Badge */}
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit ${t.badgeColor}`}>{t.badge}</span>

                {/* Stars */}
                <StarRating count={t.stars} />

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed flex-1">{t.quote}</p>

                {/* Author */}
                <div className="mt-2">
                  <p className="font-semibold text-foreground">{t.role}</p>
                  <p className="text-sm text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
