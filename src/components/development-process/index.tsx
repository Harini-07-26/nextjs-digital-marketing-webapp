'use client';
import { motion } from 'framer-motion';
import { Search, Compass, PenTool, Code2, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Requirement Analysis',
    desc: 'We start with deep-dive workshops to understand your goals, audience, and technical constraints — then translate them into a crisp project scope and success metrics.',
    tags: ['Workshops', 'Scope', 'KPIs']
  },
  {
    icon: Compass,
    title: 'Research & Strategic Planning',
    desc: 'Market research, competitor teardown, and channel modeling shape a data-backed roadmap that aligns growth strategy with product reality.',
    tags: ['Market fit', 'Roadmap', 'Forecast']
  },
  {
    icon: PenTool,
    title: 'UI/UX Design & Architecture',
    desc: 'Human-centered design paired with a scalable system architecture. Every screen and every service is built to grow with you.',
    tags: ['Design system', 'Prototypes', 'Architecture']
  },
  {
    icon: Code2,
    title: 'Development & Integration',
    desc: 'Modular, well-tested builds using modern stacks — shipped in tight sprints with continuous integration and full transparency.',
    tags: ['Sprints', 'CI/CD', 'APIs']
  },
  {
    icon: ShieldCheck,
    title: 'Testing & Quality Assurance',
    desc: 'Automated and manual QA, performance audits, and security reviews eliminate regressions before a single user sees them.',
    tags: ['QA', 'Security', 'Performance']
  },
  {
    icon: Rocket,
    title: 'Deployment & Launch',
    desc: 'Zero-downtime rollout, observability from day one, and a launch playbook that keeps the momentum going long after go-live.',
    tags: ['Launch', 'Monitoring', 'Support']
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(700px circle at 15% 20%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(600px circle at 85% 80%, hsl(var(--hero-gradient-end) / 0.15), transparent 60%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="announcement-badge">
              <span className="glow-dot" /> How we build
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Our Development <span className="gradient-text">Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A structured, transparent, and results-driven workflow — from the first conversation to post-launch scale.
              Six phases engineered for quality, velocity, and long-term success.
            </p>
          </ScrollReveal>
        </div>

        {/* Vertical rail with staggered cards */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Center rail (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block"
            style={{
              background:
                'linear-gradient(180deg, transparent, hsl(var(--primary) / 0.5), hsl(var(--hero-gradient-end) / 0.5), transparent)'
            }}
          />

          <div className="space-y-10 lg:space-y-16">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.title} className="relative grid gap-6 lg:grid-cols-2 lg:gap-16">
                  {/* Rail node */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 lg:block"
                  >
                    <div className="relative h-4 w-4">
                      <div className="absolute inset-0 rounded-full bg-primary" />
                      <div className="absolute -inset-2 animate-ping rounded-full bg-primary/40" />
                    </div>
                  </div>

                  {/* Card */}
                  <ScrollReveal delay={i * 0.05}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className={`group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-7 backdrop-blur-xl md:p-8 ${
                        isLeft ? 'lg:mr-auto lg:w-[92%]' : 'lg:col-start-2 lg:ml-auto lg:w-[92%]'
                      }`}
                    >
                      {/* Rotating gradient border on hover */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            'conic-gradient(from 0deg, hsl(var(--primary) / 0.6), transparent 30%, hsl(var(--hero-gradient-end) / 0.6), transparent 70%, hsl(var(--primary) / 0.6))',
                          maskImage: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                          padding: 1
                        }}
                      />

                      <div className="relative flex items-start gap-5">
                        {/* Step chip */}
                        <div className="relative shrink-0">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-[hsl(var(--hero-gradient-end))]/20 ring-1 ring-primary/30">
                            <s.icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="absolute -right-2 -top-2 flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-background px-2 font-display text-xs font-bold text-foreground">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">{s.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{s.desc}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="relative mt-6">
                        <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${((i + 1) / steps.length) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--hero-gradient-end))]"
                          />
                        </div>
                        <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                          <span>Phase {i + 1}</span>
                          <span>{Math.round(((i + 1) / steps.length) * 100)}%</span>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur md:flex-row">
            <div>
              <p className="font-display text-lg font-semibold text-foreground">Ready to kick off phase one?</p>
              <p className="text-sm text-muted-foreground">
                Book a discovery call and get a tailored roadmap within a week.
              </p>
            </div>
            <button className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
              Start discovery <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
