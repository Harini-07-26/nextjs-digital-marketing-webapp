'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  TrendingUp,
  Search,
  Layers,
  Phone
} from 'lucide-react';

import {
  comprehensiveSeoServices,
  seoStrategySteps,
  aiSeoStrategies,
  seoTrends2026,
  industrySeoSolutions,
  whyChooseGrowthVoice,
  seoFaqs
} from '@/src/data/seo-services';
import ContactSection from '../contact-section';

export default function SeoServicesClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(comprehensiveSeoServices[0].id);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const currentService =
    comprehensiveSeoServices.find((s) => s.id === selectedServiceId) || comprehensiveSeoServices[0];
  const currentServiceIndex = comprehensiveSeoServices.findIndex((s) => s.id === selectedServiceId);

  const currentStep = seoStrategySteps[activeStepIndex];

  const toggleFaq = (id: number) => {
    setOpenFaqIndex((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-clip">
      {/* 🌌 Star Field & Ambient Background Glow matching application theme */}
      <div className="stars stars-sm" />
      <div className="stars stars-md" />

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(900px circle at 15% 10%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(800px circle at 85% 45%, hsl(var(--hero-gradient-end) / 0.14), transparent 60%), radial-gradient(700px circle at 50% 85%, hsl(var(--primary) / 0.12), transparent 60%)'
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* ========================================================= */}
      {/* SECTION 1: BANNER / HERO                                 */}
      {/* ========================================================= */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Announcement badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <span className="announcement-badge">
                <span className="glow-dot" />
                Results-Driven SEO &amp; AI Search Agency
              </span>
            </motion.div>

            {/* H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]"
            >
              Your Trusted SEO Company for{' '}
              <span className="gradient-text">Sustainable Online Growth</span>
            </motion.h1>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              Improve your search rankings, attract qualified traffic, and grow your business with
              GrowthVoice SEO services. We combine strategic keyword research, technical SEO, quality
              content, and link building with the latest AI search trends to strengthen your online presence,
              increase organic visibility, and turn website visitors into valuable business opportunities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="btn-primary-gradient w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Get Your Free SEO Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contact"
                className="w-full sm:w-auto rounded-full border border-border/80 bg-secondary/50 px-7 py-3.5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50 flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-primary" />
                <span>Talk to Our SEO Experts</span>
              </Link>
            </motion.div>

            {/* Quick Hero Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              {[
                { label: 'Organic Traffic Growth', val: '+320%', sub: 'Client Average' },
                { label: 'Top 3 Keyword Rankings', val: '88%+', sub: 'Competitive Niches' },
                { label: 'AI Search Visibility', val: '#1 Pick', sub: 'Overviews & Citations' },
                { label: 'Sustainable Strategy', val: '100%', sub: 'White-Hat SEO' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-md text-center transition-all hover:border-primary/40 hover:bg-card/70"
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-primary">{stat.val}</p>
                  <p className="text-xs sm:text-sm font-medium text-foreground mt-1">{stat.label}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: STRATEGIC SEO SERVICES                         */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Strategic Foundation
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Strategic SEO Services for{' '}
              <span className="gradient-text">Sustainable Online Growth</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Search engines remain an important starting point for customers researching products,
              comparing services, and choosing businesses. However, achieving visibility requires more than
              adding keywords to website content. Businesses need a comprehensive SEO strategy that considers
              search intent, website structure, content quality, technical performance, and competitive
              positioning.
            </p>
          </div>

          {/* 3 Narrative Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Targeted Business Discovery
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GrowthVoice provides result-oriented SEO services designed to improve how your website performs
                across organic search. We begin by understanding your business model, target audience, industry,
                and competitors. This helps us identify relevant search opportunities and create an SEO roadmap
                that supports your short-term and long-term objectives.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Complete Optimization Cycle
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our SEO approach covers the complete optimization process, including keyword research, technical
                SEO audits, on-page optimization, content development, off-page SEO, and performance
                monitoring. Each activity is planned to improve your website&apos;s relevance, accessibility,
                and ability to attract qualified visitors.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Real Commercial Outcomes
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instead of focusing only on keyword positions or traffic volume, we consider the business impact
                of organic search. This includes relevant website visits, engagement, enquiries, qualified
                leads, and conversions. With GrowthVoice, SEO becomes an ongoing growth channel supported by
                research and strategic execution.
              </p>
            </div>
          </div>

          {/* Bottom callout quote */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 backdrop-blur-sm text-center max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed">
              &ldquo;Customers increasingly use conversational queries, AI-powered search experiences, and
              multiple digital platforms to find information. Our SEO strategies account for these developments
              while maintaining the foundational practices that support traditional search visibility.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: COMPREHENSIVE SEO SERVICES (INTERACTIVE SHOWCASE) */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Core Capabilities
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Comprehensive SEO Services to{' '}
              <span className="gradient-text">Improve Your Search Rankings</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Every website has different optimization requirements depending on its industry, competition,
              audience, and business objectives. GrowthVoice offers a complete range of SEO services to
              address these requirements and improve your website&apos;s organic search performance.
            </p>
          </div>

          {/* Mobile Tab Selector (Horizontal Swipeable Bar) */}
          <div className="flex gap-2.5 overflow-x-auto pb-4 mb-6 lg:hidden no-scrollbar">
            {comprehensiveSeoServices.map((service) => {
              const isSelected = service.id === selectedServiceId;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-black border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                      : 'bg-card/60 text-muted-foreground border-border/70 hover:bg-card hover:text-foreground'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop & Tablet Master-Detail Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left Navigation Menu (Desktop) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-3">
              {comprehensiveSeoServices.map((service, index) => {
                const Icon = service.icon;
                const isSelected = service.id === selectedServiceId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full group text-left relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'border-primary/50 bg-card/90 shadow-[0_0_30px_hsl(var(--primary)/0.12)]'
                        : 'border-border/50 bg-card/30 hover:border-border hover:bg-card/60'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-primary"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-3.5 pl-2">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${
                          isSelected
                            ? 'bg-primary text-black font-bold shadow-md scale-105'
                            : 'bg-primary/10 border border-primary/20 text-primary group-hover:scale-105'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                          Service 0{index + 1}
                        </span>
                        <p
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isSelected ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                          }`}
                        >
                          {service.title}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isSelected ? 'text-primary translate-x-0.5' : 'text-muted-foreground group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Spotlight Feature Canvas */}
            <div className="lg:col-span-8 flex flex-col">
              <div className="relative flex-1 rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/95 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between">
                {/* Ambient Glow in canvas */}
                <div
                  className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: 'hsl(var(--primary))' }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                        <span className="rounded-full bg-primary/15 border border-primary/30 px-3.5 py-1 text-xs font-semibold text-primary">
                          Service 0{currentServiceIndex + 1} of 06
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          Guaranteed White-Hat SEO
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
                          {(() => {
                            const ServiceIcon = currentService.icon;
                            return <ServiceIcon className="h-7 w-7" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                            {currentService.title}
                          </h3>
                          <p className="text-xs text-primary font-medium mt-0.5">
                            Tailored Strategy &amp; Sustainable Growth
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-4">
                        {currentService.description}
                      </p>

                      {/* Inclusions checklist */}
                      <div className="mt-8 pt-6 border-t border-border/50">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90 mb-4 flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span>Strategic Inclusions &amp; Deliverables</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentService.highlights.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 rounded-xl border border-border/40 bg-secondary/30 p-3 transition-colors hover:border-primary/40 hover:bg-secondary/50"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-medium text-foreground/90 leading-snug">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom action bar */}
                    <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <Link
                        href="#contact"
                        className="btn-primary-gradient w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group"
                      >
                        <span>Inquire About {currentService.title}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <span className="text-xs text-muted-foreground">
                        Custom roadmap designed for your brand
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: OUR SEO STRATEGY (CONNECTED STRATEGY PIPELINE) */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Methodology &amp; Roadmap
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our SEO Strategy –{' '}
              <span className="gradient-text">From Research to Measurable Results</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              A successful SEO campaign starts with a clear understanding of where your website stands and
              where it needs to go. At GrowthVoice, we follow a structured SEO strategy that connects research,
              optimization, content development, and performance analysis.
            </p>
          </div>

          {/* Connected Interactive Stepper Rail */}
          <div className="relative mb-10">
            {/* Background connector bar (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2 bg-border/60 rounded-full z-0" />
            {/* Active progress fill bar (Desktop) */}
            <div
              className="hidden md:block absolute top-1/2 left-8 h-1 -translate-y-1/2 bg-gradient-to-r from-primary via-[hsl(var(--hero-gradient-end))] to-primary rounded-full z-0 transition-all duration-500"
              style={{
                width: `${(activeStepIndex / (seoStrategySteps.length - 1)) * 88}%`
              }}
            />

            {/* Steps Navigation Rail */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {seoStrategySteps.map((step, index) => {
                const isCurrent = index === activeStepIndex;
                const isPassed = index < activeStepIndex;
                const Icon = step.icon;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className={`group flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? 'border-primary/60 bg-card/90 shadow-[0_0_25px_hsl(var(--primary)/0.25)] scale-105'
                        : isPassed
                        ? 'border-primary/30 bg-card/60 hover:bg-card'
                        : 'border-border/50 bg-card/30 hover:border-border hover:bg-card/60'
                    }`}
                  >
                    {/* Step Node Circle */}
                    <div className="relative mb-2">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full font-display font-bold text-sm transition-all ${
                          isCurrent
                            ? 'bg-primary text-black font-extrabold shadow-lg ring-4 ring-primary/20'
                            : isPassed
                            ? 'bg-primary/20 text-primary border border-primary/40'
                            : 'bg-secondary text-muted-foreground border border-border'
                        }`}
                      >
                        {isCurrent ? <Icon className="h-5 w-5" /> : step.number}
                      </div>
                      {isCurrent && (
                        <span className="absolute -inset-1 rounded-full animate-ping bg-primary/30 pointer-events-none" />
                      )}
                    </div>

                    {/* Step Short Title */}
                    <span
                      className={`text-xs font-semibold text-center line-clamp-1 transition-colors ${
                        isCurrent ? 'text-primary font-bold' : 'text-foreground/80 group-hover:text-foreground'
                      }`}
                    >
                      {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-0.5">
                      Phase {step.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage Deep-Dive Showcase Canvas */}
          <div className="relative rounded-3xl border border-primary/30 bg-gradient-to-br from-card/95 via-card/80 to-card/90 p-6 sm:p-9 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Decorative background glow */}
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: 'hsl(var(--hero-gradient-end))' }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="relative z-10"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-primary">
                      {currentStep.number}
                    </span>
                    <div className="h-10 w-px bg-border/60 mx-1" />
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary/80">
                        Execution Phase {currentStep.number} of 06
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-secondary/80 border border-border/60 px-3 py-1 text-xs text-foreground/90 font-medium">
                      Deliverables Included
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl">
                  {currentStep.description}
                </p>

                {/* Deliverables Checklist / Pills */}
                <div className="mt-8 pt-6 border-t border-border/40">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Key Phase Deliverables &amp; Outputs:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {currentStep.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/25 px-4 py-2 text-xs sm:text-sm font-medium text-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase Navigation Controls */}
                <div className="mt-10 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <button
                      type="button"
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-secondary/40 text-xs sm:text-sm font-medium text-foreground transition-all hover:bg-secondary disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous Phase</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveStepIndex((prev) => (prev < seoStrategySteps.length - 1 ? prev + 1 : 0))
                      }
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 text-xs sm:text-sm font-semibold text-primary transition-all hover:bg-primary/20 cursor-pointer"
                    >
                      <span>
                        {activeStepIndex < seoStrategySteps.length - 1
                          ? `Next: Phase 0${activeStepIndex + 2}`
                          : 'Restart Phase 01'}
                      </span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <Link
                    href="#contact"
                    className="btn-primary-gradient w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group"
                  >
                    <span>Start With Phase 01 Audit</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: AI-POWERED SEO STRATEGIES                      */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              AI &amp; Generative Search
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our AI-Powered SEO Strategies for the{' '}
              <span className="gradient-text">Future of Search</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Search is evolving with AI-powered experiences. GrowthVoice combines traditional SEO and
              AI-driven optimisation to improve content visibility, support discovery, and help businesses
              adapt to changing search behaviour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiSeoStrategies.map((ai, index) => {
              const Icon = ai.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-primary/20 bg-card/50 p-6 sm:p-7 backdrop-blur-md hover:border-primary/50 hover:bg-card/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                        {ai.badge}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">
                      {ai.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ai.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: LATEST SEO TRENDS FOR 2026                     */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              2026 Strategic Horizon
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest SEO Trends and Strategies Businesses Should{' '}
              <span className="gradient-text">Adopt in 2026</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              SEO in 2026 requires businesses to look beyond conventional keyword rankings. Search
              experiences are becoming more conversational, AI-assisted, and distributed across multiple
              platforms. GrowthVoice incorporates emerging SEO trends into its strategies to help businesses
              stay relevant and competitive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {seoTrends2026.map((trend) => {
              const Icon = trend.icon;
              return (
                <div
                  key={trend.number}
                  className="rounded-2xl border border-border bg-card/40 p-5 sm:p-6 backdrop-blur-md hover:border-primary/40 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-primary/90 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                        Trend #{trend.number}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2.5">
                      {trend.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40">
                    <span className="text-[11px] text-primary font-medium">#{trend.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: INDUSTRY-SPECIFIC SEO SOLUTIONS                */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Tailored Verticals
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Industry-Specific SEO Solutions for{' '}
              <span className="gradient-text">Every Business</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              SEO strategies should reflect how customers search within a particular industry. A strategy that
              works for an ecommerce store may not deliver the same results for a B2B service provider or a
              technology company. GrowthVoice develops industry-focused SEO services based on business models,
              customer journeys, competition, and relevant search opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySeoSolutions.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md hover:border-primary/40 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">
                      Key Industry Focus:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.keyFocus.map((kf, idx) => (
                        <span
                          key={idx}
                          className="rounded-md bg-secondary/80 px-2 py-1 text-[11px] font-medium text-foreground/80 border border-border/50"
                        >
                          {kf}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 8: WHY CHOOSE GROWTHVOICE                         */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              The GrowthVoice Advantage
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose GrowthVoice as Your{' '}
              <span className="gradient-text">SEO Services Company?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Choosing the right SEO agency can influence how effectively your business competes in organic
              search. You need a partner that understands your business objectives, identifies meaningful search
              opportunities, and develops strategies that adapt as search engines and customer behavior evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseGrowthVoice.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md hover:border-primary/40 hover:bg-card/70 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 9: 10 SEO FREQUENTLY ASKED QUESTIONS              */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40" id="seo-faq">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Frequently Asked Questions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Frequently Asked Questions About{' '}
              <span className="gradient-text">SEO Services</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Clear, transparent answers to help you understand how organic search optimization works and how
              it fuels long-term business growth.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-3.5">
            {seoFaqs.map((faq) => {
              const isOpen = openFaqIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-border/70 bg-card/40 backdrop-blur-md transition-colors hover:border-primary/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/70 bg-secondary/50 text-foreground transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary border-primary/40 bg-primary/10' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed border-t border-border/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: BOTTOM CTA & CONTACT FORM INTEGRATION         */}
      {/* ========================================================= */}
      <section className="relative pt-10 pb-4 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-8">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Start Your Growth Journey
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Ready to Dominate Search &amp;{' '}
              <span className="gradient-text">Grow Your Revenue?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Share your website and business objectives with our SEO strategists. We will evaluate your
              current search footprint and outline high-impact opportunities for sustainable organic growth.
            </p>
          </div>
        </div>

        {/* Reusing existing ContactSection */}
        <ContactSection />
      </section>
    </div>
  );
}
