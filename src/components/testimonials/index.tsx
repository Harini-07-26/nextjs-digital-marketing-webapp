'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../scroll-reveal';

const testimonials = [
  {
    badge: '+68% Qualified Leads',
    badgeColor: 'text-green-400 bg-green-400/15',
    stars: 5,
    quote:
      'GrowthVoice completely changed the way we approach digital marketing. Their strategy brought us more qualified leads and gave us a clear path to sustainable growth.',
    name: 'Ananya Sharma',
    role: 'Marketing Head',
    company: 'UrbanNest • Real Estate'
  },
  {
    badge: '+52% Organic Traffic',
    badgeColor: 'text-blue-400 bg-blue-400/15',
    stars: 5,
    quote:
      'Within a few months, we saw a significant improvement in our search visibility. The SEO team understood our industry and delivered results that actually translated into enquiries.',
    name: 'Rahul Mehta',
    role: 'Founder',
    company: 'TechNova • SaaS'
  },
  {
    badge: '2.4x More Leads',
    badgeColor: 'text-yellow-400 bg-yellow-400/15',
    stars: 5,
    quote:
      'The team helped us completely rethink our paid advertising strategy. Our campaigns are now more focused, our leads have improved, and we finally understand where our budget is going.',
    name: 'Priya Nair',
    role: 'Growth Manager',
    company: 'FinEdge • Financial Services'
  },
  {
    badge: '+85% Social Engagement',
    badgeColor: 'text-purple-400 bg-purple-400/15',
    stars: 5,
    quote:
      'GrowthVoice brought a fresh perspective to our social media. From content ideas to campaign execution, everything feels more consistent and aligned with our brand.',
    name: 'Karan Malhotra',
    role: 'Brand Manager',
    company: 'StyleCraft • Fashion & Lifestyle'
  },
  {
    badge: '3x More Website Enquiries',
    badgeColor: 'text-red-400 bg-red-400/15',
    stars: 5,
    quote:
      'What impressed us most was their focus on business outcomes. They improved our website, campaigns, and messaging, resulting in a steady increase in genuine customer enquiries.',
    name: 'Meera Iyer',
    role: 'Business Director',
    company: 'HomeAura • Interior Design'
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
    <section
      id="testimonials"
      className="py-24 overflow-hidden bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 scroll-mt-20"
    >
      <div className="container mb-14">
        <ScrollReveal variant="slide" direction="up">
          <h2 className="mt-6 font-display text-center text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Hear It From<span className="gradient-text"> Our Clients</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Horizontal infinite scroll */}
      <ScrollReveal variant="slide" direction="right" delay={0.2}>
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
              duration: 10,
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
      </ScrollReveal>
    </section>
  );
};

export default Testimonials;
