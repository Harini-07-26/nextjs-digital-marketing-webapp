'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  BarChart3,
  Megaphone,
  Search,
  Mail,
  Users,
  Sparkles,
  TrendingUp,
  Zap,
  Globe,
  Shield,
  Rocket,
  LineChart,
  MousePointerClick,
  Palette,
  Bot,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal } from '@/src/components/scroll-reveal';
import Features from '@/src/components/features';

const heroStats = [
  { value: '3.4x', label: 'Avg. ROAS' },
  { value: '+187%', label: 'Organic Traffic' },
  { value: '62%', label: 'Lower CPA' },
  { value: '24/7', label: 'Campaign Ops' }
];

const capabilities = [
  {
    icon: Target,
    title: 'Precision Targeting',
    desc: 'Layered audience signals across intent, behavior, and lookalike models to reach buyers, not browsers.'
  },
  {
    icon: BarChart3,
    title: 'Attribution Dashboards',
    desc: 'Unified reporting across every channel with multi-touch attribution and revenue-first KPIs.'
  },
  {
    icon: Megaphone,
    title: 'Omnichannel Campaigns',
    desc: 'Coordinated storytelling across search, social, display, and email — one narrative, every touchpoint.'
  },
  {
    icon: Search,
    title: 'SEO & Content Engine',
    desc: 'Topical authority builds, technical audits, and content ops tuned for AI-era search.'
  },
  {
    icon: Mail,
    title: 'Lifecycle Automation',
    desc: 'Behavioral email, SMS, and push flows that nurture pipeline and revive dormant customers.'
  },
  {
    icon: Users,
    title: 'Creator & UGC Network',
    desc: 'Vetted creators produce thumb-stopping content at the volume performance media demands.'
  },
  {
    icon: Sparkles,
    title: 'AI Creative Studio',
    desc: 'Rapidly iterate ad variants with generative tooling grounded in your brand guidelines.'
  },
  {
    icon: LineChart,
    title: 'Predictive Budgeting',
    desc: 'Forecast pacing, ROAS, and channel mix before the quarter starts — not after.'
  },
  {
    icon: MousePointerClick,
    title: 'CRO & Landing Pages',
    desc: 'High-velocity experiments on landing pages, offers, and checkout flows to lift conversion rate.'
  }
];

const workflow = [
  {
    step: '01',
    title: 'Audit & Benchmark',
    desc: 'We map your funnel, pull historical performance, and benchmark against category leaders.'
  },
  {
    step: '02',
    title: 'Strategy Blueprint',
    desc: 'A quarterly roadmap with channel mix, creative themes, forecasts, and clear KPIs.'
  },
  {
    step: '03',
    title: 'Launch & Optimize',
    desc: 'Campaigns go live with weekly optimization rituals across creative, audience, and bidding.'
  },
  {
    step: '04',
    title: 'Scale & Report',
    desc: 'What works gets amplified. You get a transparent dashboard and a monthly executive review.'
  }
];

const included = [
  'Dedicated growth strategist',
  'Weekly performance reviews',
  'Creative production sprints',
  'Slack + email support',
  'Full-funnel attribution',
  'Landing page experiments',
  'Monthly executive report',
  'Custom analytics dashboard'
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(600px circle at 20% 10%, hsl(var(--primary) / 0.25), transparent 60%), radial-gradient(500px circle at 80% 20%, hsl(var(--hero-gradient-end) / 0.2), transparent 60%)'
          }}
        />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="announcement-badge">
              <span className="glow-dot" /> Platform Capabilities
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Every feature your growth team <span className="gradient-text">actually uses</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              DIGI unifies performance media, creative production, SEO, CRO, and lifecycle marketing into one operating
              system — engineered for teams that measure marketing in pipeline, not impressions.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button className="btn-primary-gradient text-sm">Start a project</button>
              <Link href="/digi" className="btn-outline-dark text-sm">
                Back to overview
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
            {heroStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur"
              >
                <div className="stat-value gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="py-20">
        <div className="container">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
                A complete <span className="gradient-text">growth stack</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Nine core capabilities, one integrated team. No agency ping-pong, no siloed vendors.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.25)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <span className="announcement-badge">
                <Bot className="h-4 w-4 text-primary" /> AI-native workflows
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-foreground md:text-4xl">
                Ship 10x more creative — without losing brand control
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our AI Creative Studio turns briefs into on-brand ad variants in minutes. Strategists curate the
                winners, then push them straight into Meta, TikTok, and Google — with performance feeding back into the
                next generation of assets.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Brand-locked prompts and design tokens',
                  'Automated resizing for every placement',
                  'A/B testing hooks built into every launch',
                  'Creative fatigue alerts before performance drops'
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {t}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Palette, label: 'Brand tokens', val: 'Locked' },
                    { icon: Rocket, label: 'Assets / week', val: '142' },
                    { icon: TrendingUp, label: 'Winning variants', val: '38' },
                    { icon: Shield, label: 'Approval rate', val: '94%' }
                  ].map((k) => (
                    <div key={k.label} className="rounded-2xl border border-border bg-background/60 p-5">
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                        <k.icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground">{k.label}</p>
                      <p className="mt-1 font-display text-2xl font-bold text-foreground">{k.val}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Live campaign</p>
                  <p className="mt-2 font-display text-lg text-foreground">Spring Collection — Meta + TikTok</p>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--hero-gradient-end))]" />
                  </div>
                  <div className="mt-3 flex justify-between text-xs text-muted-foreground">
                    <span>Pacing 74%</span>
                    <span>ROAS 4.1x</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reuse existing Features grid */}
      <Features
        title="Services inside the platform"
        description="From paid social to CRO — every capability plugs into the same dashboard."
        variant="dark"
      />

      {/* WORKFLOW */}
      <section className="py-20">
        <div className="container">
          <div className="mb-14 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
                How we <span className="gradient-text">operate</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                A predictable rhythm from onboarding to scale.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w, i) => (
              <ScrollReveal key={w.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-border bg-card/60 p-7 backdrop-blur">
                  <div className="font-display text-4xl font-bold gradient-text">{w.step}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card/60 p-10 backdrop-blur md:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  Everything included in every plan
                </h2>
                <p className="mt-4 text-muted-foreground">
                  No add-ons for basics. You get a full-stack team, tooling, and reporting from day one.
                </p>
                <button className="btn-primary-gradient mt-6 text-sm">Book a strategy call</button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {included.map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border p-12 text-center">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: 'radial-gradient(600px circle at 50% 0%, hsl(var(--primary) / 0.35), transparent 70%)'
              }}
            />
            <div className="relative">
              <Globe className="mx-auto h-10 w-10 text-primary" />
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                Ready to grow with <span className="gradient-text">DIGI</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your goals. We'll build a custom growth plan within 48 hours.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <button className="btn-primary-gradient text-sm inline-flex items-center gap-2">
                  Get started <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/digi" className="btn-outline-dark text-sm inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Explore platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
