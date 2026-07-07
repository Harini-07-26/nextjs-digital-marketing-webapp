'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  ShoppingCart,
  Sparkles,
  Smartphone,
  TrendingUp,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  BarChart3,
  Brain,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { ScrollReveal } from '@/src/components/scroll-reveal';

const goals = [
  {
    id: 'lead-gen',
    title: 'B2B & Enterprise Lead Gen',
    icon: Target,
    metric: '+310% pipeline growth',
    desc: 'Target key decision makers and fill your pipeline with highly qualified marketing and sales opportunities.',
    highlights: ['Account-Based Marketing (ABM)', 'Intent data activation', 'Multichannel outreach pipelines', 'CRM & marketing ops sync'],
    cta: 'Scale my pipeline'
  },
  {
    id: 'ecommerce',
    title: 'High-Scale E-Commerce Growth',
    icon: ShoppingCart,
    metric: '4.5x average ROAS',
    desc: 'Scale direct-to-consumer sales and lifetime value with data-driven creative and performance ads.',
    highlights: ['Dynamic creative optimization (DCO)', 'Retention & lifecycle SMS/Email', 'Multi-touch performance modeling', 'Conversion rate optimization (CRO)'],
    cta: 'Boost online sales'
  },
  {
    id: 'brand',
    title: 'Brand Dominance & Authority',
    icon: Sparkles,
    metric: '12M+ organic impressions',
    desc: 'Establish your brand as an industry leader through viral organic campaigns and creator partnerships.',
    highlights: ['Creator & UGC curation', 'SEO topical authority builds', 'PR & earned media strategies', 'Social media engagement loops'],
    cta: 'Command industry attention'
  },
  {
    id: 'app-growth',
    title: 'App Installs & Engagement',
    icon: Smartphone,
    metric: '62% lower Cost-Per-Install',
    desc: 'Acquire high-intent mobile users and maximize retention with deep-linking & optimized landing flows.',
    highlights: ['App Store Optimization (ASO)', 'Paid user acquisition strategies', 'In-app event optimization (AEO)', 'Lifecycle push notification flows'],
    cta: 'Drive app installs'
  }
];

const industries = [
  {
    id: 'saas',
    name: 'B2B SaaS',
    icon: Cpu,
    challenge: 'Long sales cycles, attribution gaps, and high customer acquisition cost (CAC).',
    solution: 'We deploy multi-channel B2B campaigns tracking key product triggers, combined with custom attribution tools to tie pipeline revenue directly to ad channels.',
    metric: '42% Lower CAC',
    logo: 'SaaS Platform'
  },
  {
    id: 'retail',
    name: 'E-Commerce & Retail',
    icon: ShoppingCart,
    challenge: 'Rising CPA, dependency on third-party cookies, and low repeat purchase rates.',
    solution: 'We construct full-funnel retention loops and lookalike audiences using first-party customer profiles, decreasing dependency on tracking updates.',
    metric: '32% lift in LTV',
    logo: 'Fashion D2C'
  },
  {
    id: 'health',
    name: 'Healthcare & Biotech',
    icon: ShieldCheck,
    challenge: 'Strict compliance regulations, long verification processes, and patient trust barriers.',
    solution: 'HIPAA-compliant ad templates, content hubs establishing clinical authority, and highly secure landing page forms with localized targeting.',
    metric: '8.4x search authority',
    logo: 'Biomedical Care'
  },
  {
    id: 'finance',
    name: 'FinTech & Finance',
    icon: Building2,
    challenge: 'High competition, complex compliance requirements, and skepticism from retail consumers.',
    solution: 'Educational content strategies, programmatic targeting, and optimized registration flows that establish security and build immediate credibility.',
    metric: '+192% Signups',
    logo: 'Wealth Wealth'
  }
];

const SolutionsPage = () => {
  const [activeTab, setActiveTab] = useState<'goals' | 'industries'>('goals');
  const [hoveredIndustry, setHoveredIndustry] = useState<string>('saas');

  return (
    <div className="relative min-h-screen bg-background pt-24 pb-12 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-[600px] w-[600px] rounded-full opacity-15 blur-[120px]"
          style={{ background: 'radial-gradient(circle, hsl(var(--hero-gradient-end)) 0%, transparent 70%)' }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur"
            >
              <Zap className="h-3.5 w-3.5 fill-current animate-badge" />
              <span>SOLUTIONS PLATFORM</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              Tailored growth systems for <span className="gradient-text">ambitious brands</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              We integrate deep strategy, creative engineering, and AI-powered performance tools to build consistent, predictable funnels for SaaS, E-Commerce, and high-growth startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <button className="btn-primary-gradient px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                Book a strategy call <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('solutions-explore');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-dark px-6 py-3 text-sm font-semibold"
              >
                Explore solutions
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TAB SELECTOR SECTION */}
      <section id="solutions-explore" className="py-12 border-t border-border/40 bg-card/10 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-col items-center">
            <div className="inline-flex rounded-full border border-border bg-secondary/80 p-1.5">
              <button
                onClick={() => setActiveTab('goals')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'goals'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                By Business Goal
              </button>
              <button
                onClick={() => setActiveTab('industries')}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeTab === 'industries'
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                By Industry Vertical
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Select a view to explore tailored strategies and metrics
            </p>
          </div>
        </div>
      </section>

      {/* DYNAMIC CONTENT AREA */}
      <section className="py-16">
        <div className="container">
          <AnimatePresence mode="wait">
            {activeTab === 'goals' ? (
              <motion.div
                key="goals-grid"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8 md:grid-cols-2"
              >
                {goals.map((goal, idx) => {
                  const Icon = goal.icon;
                  return (
                    <ScrollReveal key={goal.id} delay={idx * 0.1}>
                      <div className="relative group overflow-hidden rounded-3xl border border-border bg-card/40 p-8 hover:bg-card/70 hover:border-primary/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between h-full min-h-[380px]">
                        <div
                          className="absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                          style={{ backgroundColor: 'hsl(var(--primary))' }}
                        />
                        <div>
                          {/* Card Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                              <Icon className="h-6 w-6" />
                            </div>
                            <span className="rounded-full bg-primary/15 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                              {goal.metric}
                            </span>
                          </div>

                          {/* Card Content */}
                          <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                            {goal.title}
                          </h3>
                          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                            {goal.desc}
                          </p>

                          {/* Highlights */}
                          <div className="mt-6 space-y-2.5">
                            {goal.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center gap-2.5">
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                                <span className="text-xs text-foreground/80">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Footer Button */}
                        <div className="mt-8">
                          <button className="w-full btn-outline-dark py-2.5 text-xs font-semibold inline-flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                            {goal.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="industries-interactive"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid gap-8 lg:grid-cols-12 lg:items-stretch"
              >
                {/* Industry List Selector (Left) */}
                <div className="lg:col-span-4 space-y-3">
                  {industries.map((ind) => {
                    const IndIcon = ind.icon;
                    const isActive = hoveredIndustry === ind.id;
                    return (
                      <button
                        key={ind.id}
                        onClick={() => setHoveredIndustry(ind.id)}
                        onMouseEnter={() => setHoveredIndustry(ind.id)}
                        className={`w-full text-left flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                          isActive
                            ? 'bg-card border-primary/50 shadow-md shadow-primary/5'
                            : 'bg-card/30 border-border/60 hover:bg-card/50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                              isActive ? 'bg-primary/20 border-primary text-primary' : 'bg-secondary border-border text-muted-foreground'
                            }`}
                          >
                            <IndIcon className="h-5 w-5" />
                          </div>
                          <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>
                            {ind.name}
                          </span>
                        </div>
                        <ArrowRight
                          className={`h-4 w-4 transition-all duration-300 ${isActive ? 'text-primary translate-x-1' : 'text-muted-foreground/30'}`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Industry Details Pane (Right) */}
                <div className="lg:col-span-8">
                  <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-card/40 p-8 md:p-10 backdrop-blur-md flex flex-col justify-between">
                    <div
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        background: 'radial-gradient(400px circle at 80% 20%, hsl(var(--primary) / 0.5), transparent 80%)'
                      }}
                    />
                    <AnimatePresence mode="wait">
                      {industries.map((ind) => {
                        if (ind.id !== hoveredIndustry) return null;
                        const IndIcon = ind.icon;
                        return (
                          <motion.div
                            key={ind.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 flex-1 flex flex-col justify-between"
                          >
                            <div>
                              {/* Header details */}
                              <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3 bg-secondary/80 border border-border px-4 py-2 rounded-xl">
                                  <IndIcon className="h-5 w-5 text-primary" />
                                  <span className="text-sm font-semibold text-foreground">{ind.name} Solutions</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-2xl font-bold text-primary gradient-text font-display">{ind.metric}</div>
                                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Average Verified Outcome</div>
                                </div>
                              </div>

                              {/* Pain point */}
                              <div className="mt-8 space-y-2">
                                <h4 className="text-xs uppercase font-semibold text-primary tracking-wider">The Market Challenge</h4>
                                <p className="text-foreground/90 text-sm leading-relaxed">{ind.challenge}</p>
                              </div>

                              {/* Strategy */}
                              <div className="mt-6 space-y-2">
                                <h4 className="text-xs uppercase font-semibold text-primary tracking-wider">How We Solve It</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{ind.solution}</p>
                              </div>
                            </div>

                            {/* CTA / Proof */}
                            <div className="mt-8 pt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <span className="glow-dot" />
                                <span className="text-xs text-muted-foreground">
                                  Case study: <strong className="text-foreground font-medium">{ind.logo}</strong>
                                </span>
                              </div>
                              <button className="btn-primary-gradient px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-2">
                                View case study <ArrowRight className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* AI ENGINE FEATURETTE */}
      <section className="py-16 md:py-24 border-t border-border/40">
        <div className="container">
          <div className="rounded-3xl border border-border bg-card/30 p-8 md:p-14 backdrop-blur-sm relative overflow-hidden">
            <div
              className="absolute -right-32 -bottom-32 h-[350px] w-[350px] rounded-full opacity-10 pointer-events-none blur-3xl"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
            />
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold text-primary">
                  <Brain className="h-3.5 w-3.5" />
                  <span>AI & DATA STACK</span>
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  Proprietary attribution and creative AI pacing
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We don't rely solely on platform-native dashboards. Our clients get access to proprietary pipelines tracking cross-network conversion signals, and predictive creative optimization engines that pace your budget to the highest yielding creative variations automatically.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Multi-Touch Attribution</h4>
                      <p className="text-xs text-muted-foreground mt-1">First-party server trackers bypassing privacy blocks.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Creative Co-Pilot</h4>
                      <p className="text-xs text-muted-foreground mt-1">Generates performance variants automatically.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Stack Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-square rounded-2xl border border-border bg-background/50 flex items-center justify-center p-6 shadow-2xl">
                  <div className="absolute inset-4 rounded-xl border border-dashed border-border/80 flex items-center justify-center">
                    <div className="relative h-24 w-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary float-animation">
                      <Cpu className="h-10 w-10 animate-pulse" />
                    </div>
                  </div>
                  {/* Floating items around center */}
                  <div className="absolute top-8 left-8 p-2 rounded-lg bg-card border border-border text-foreground text-[10px] font-bold flex items-center gap-1.5 shadow-lg float-animation">
                    <Target className="h-3.5 w-3.5 text-primary" /> PPC Ads
                  </div>
                  <div className="absolute bottom-10 left-6 p-2 rounded-lg bg-card border border-border text-foreground text-[10px] font-bold flex items-center gap-1.5 shadow-lg float-animation-delayed">
                    <ShoppingCart className="h-3.5 w-3.5 text-green-400" /> Shopify
                  </div>
                  <div className="absolute top-14 right-6 p-2 rounded-lg bg-card border border-border text-foreground text-[10px] font-bold flex items-center gap-1.5 shadow-lg float-animation-delayed">
                    <Users className="h-3.5 w-3.5 text-blue-400" /> CRM sync
                  </div>
                  <div className="absolute bottom-6 right-8 p-2 rounded-lg bg-card border border-border text-foreground text-[10px] font-bold flex items-center gap-1.5 shadow-lg float-animation">
                    <BarChart3 className="h-3.5 w-3.5 text-yellow-400" /> Attribution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border p-10 text-center bg-card/10 backdrop-blur-md">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(600px circle at 50% 0%, hsl(var(--primary) / 0.45), transparent 70%)'
              }}
            />
            <div className="relative z-10">
              <Globe className="mx-auto h-12 w-12 text-primary animate-spin" style={{ animationDuration: '20s' }} />
              <h2 className="mt-6 font-display text-3xl font-bold text-foreground md:text-5xl">
                Ready to find your <span className="gradient-text">custom growth engine</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-sm md:text-base">
                Let's discuss your targets. We'll analyze your pipeline data and draft a custom omnichannel roadmap in 48 hours.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <button className="btn-primary-gradient px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                  Get custom audit <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/features" className="btn-outline-dark px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                  Explore features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
