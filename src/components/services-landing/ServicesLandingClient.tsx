'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, LayoutGrid, CreditCard } from 'lucide-react';

import {
  digitalMarketingServices,
  growthApproachSteps,
  whyChooseBenefits,
  businessNeedsAudiences
} from '@/src/data/services-landing';
import ContactSection from '../contact-section';

export default function ServicesLandingClient() {
  const [catalogView, setCatalogView] = useState<'grid' | 'showcase'>('showcase');
  const [selectedServiceId, setSelectedServiceId] = useState<string>(digitalMarketingServices[0].id);
  const [activeAudienceIndex, setActiveAudienceIndex] = useState<number>(0);

  const activeService = digitalMarketingServices.find((s) => s.id === selectedServiceId) || digitalMarketingServices[0];

  const activeAudience = businessNeedsAudiences[activeAudienceIndex];

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-clip">
      {/* 🌌 Star Field & Ambient Background Glow matching application theme */}
      <div className="stars stars-sm" />
      <div className="stars stars-md" />

      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(900px circle at 15% 10%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(850px circle at 85% 40%, hsl(var(--hero-gradient-end) / 0.15), transparent 60%), radial-gradient(800px circle at 50% 80%, hsl(var(--primary) / 0.12), transparent 60%)'
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
      {/* SECTION 1: HERO / BANNER                                 */}
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
                Full-Funnel Digital Growth Agency
              </span>
            </motion.div>

            {/* H1 Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.18]"
            >
              Digital Marketing Services to Build Visibility,{' '}
              <span className="gradient-text">Generate Leads, and Drive Growth</span>
            </motion.h1>

            {/* Subtitle Paragraphs from Word Doc */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              <p>
                Your business needs more than an online presence to compete in a crowded digital market. It needs a
                clear strategy to reach the right audience, communicate its value, and turn interest into meaningful
                business opportunities.
              </p>
              <p className="hidden sm:block">
                At GrowthVoice, we bring together strategy, creativity, technology, and performance insights to help
                businesses grow online. From improving search visibility and running targeted advertising campaigns to
                building stronger social media connections and creating conversion-focused websites, we focus on
                activities that support your business goals.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="btn-primary-gradient w-full sm:w-auto px-8 py-3.5 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 group shadow-xl cursor-pointer"
              >
                <span>Get Your Growth Plan</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services-catalog"
                className="w-full sm:w-auto rounded-full border border-border/80 bg-secondary/50 px-7 py-3.5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore All Services</span>
                <ChevronRight className="h-4 w-4 text-primary" />
              </Link>
            </motion.div>

            {/* Quick Hero Highlights Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
            >
              {[
                { label: 'Organic Traffic Lift', val: '+350%', sub: 'SEO & Content' },
                { label: 'Average Ad ROAS', val: '8.5x', sub: 'Targeted PPC' },
                { label: 'Client Retention', val: '98%', sub: 'Long-Term Growth' },
                { label: 'Multi-Channel Reach', val: '360°', sub: 'Integrated Strategy' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/60 bg-card/40 p-4 sm:p-5 backdrop-blur-md text-center transition-all hover:border-primary/40 hover:bg-card/70"
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
      {/* SECTION 2: SERVICES OVERVIEW WITH DYNAMIC VIEW SWITCHER   */}
      {/* ========================================================= */}
      <section id="services-catalog" className="relative py-20 border-t border-border/40 scroll-mt-20">
        <div className="container relative z-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center mb-10">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Connected Marketing Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Digital <span className="gradient-text">Marketing Services</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Every business has different marketing requirements. Some need stronger search visibility, while others
              want to generate immediate enquiries or build an active online community. GrowthVoice offers connected
              marketing services that address these needs and support your business at different stages of growth.
            </p>

            {/* Dynamic View Switcher Pills */}
            <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-full border border-border/70 bg-card/60 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setCatalogView('showcase')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  catalogView === 'showcase'
                    ? 'bg-primary text-black font-bold shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <CreditCard className="h-3.5 w-3.5" />
                <span>Showcase View</span>
              </button>
              <button
                type="button"
                onClick={() => setCatalogView('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  catalogView === 'grid'
                    ? 'bg-primary text-black font-bold shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Grid Catalog View</span>
              </button>
            </div>
          </div>

          {/* VIEW A: INTERACTIVE SHOWCASE VIEW */}
          {catalogView === 'showcase' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
            >
              {/* Left Selector Rail */}
              <div className="lg:col-span-5 flex flex-col gap-2.5">
                {digitalMarketingServices.map((service) => {
                  const Icon = service.icon;
                  const isSelected = service.id === selectedServiceId;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`w-full group text-left relative flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-primary/50 bg-card/90 shadow-[0_0_30px_hsl(var(--primary)/0.12)]'
                          : 'border-border/50 bg-card/30 hover:border-border hover:bg-card/60'
                      }`}
                    >
                      {isSelected && (
                        <motion.div
                          layoutId="activeCatalogIndicator"
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
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
                              Service {service.number}
                            </span>
                            <span className="text-[10px] text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full border border-border/40">
                              {service.tag}
                            </span>
                          </div>
                          <p
                            className={`text-sm sm:text-base font-bold transition-colors mt-0.5 ${
                              isSelected ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'
                            }`}
                          >
                            {service.title}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSelected
                            ? 'text-primary translate-x-0.5'
                            : 'text-muted-foreground group-hover:translate-x-0.5'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Right Showcase Detail Canvas */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative flex-1 rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/95 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col justify-between">
                  {/* Ambient Canvas Glow */}
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-3xl"
                    style={{ backgroundColor: 'hsl(var(--primary))' }}
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 flex flex-col justify-between h-full"
                    >
                      <div>
                        {/* Meta header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                          <span className="rounded-full bg-primary/15 border border-primary/30 px-3.5 py-1 text-xs font-semibold text-primary">
                            Service {activeService.number} of 08 • {activeService.tag}
                          </span>
                          {activeService.dedicatedUrl && (
                            <Link
                              href={activeService.dedicatedUrl}
                              className="text-xs text-primary font-semibold hover:underline flex items-center gap-1"
                            >
                              <span>View Dedicated SEO Page</span>
                              <ChevronRight className="h-3 w-3" />
                            </Link>
                          )}
                        </div>

                        {/* Title & Icon */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 border border-primary/30 text-primary shadow-[0_0_25px_hsl(var(--primary)/0.2)]">
                            {(() => {
                              const ServiceIcon = activeService.icon;
                              return <ServiceIcon className="h-7 w-7" />;
                            })()}
                          </div>
                          <div>
                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                              {activeService.title}
                            </h3>
                            <p className="text-xs text-primary font-medium mt-0.5">
                              Strategic Growth &amp; Scalable Impact
                            </p>
                          </div>
                        </div>

                        {/* Descriptions */}
                        <div className="mt-4 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {activeService.fullDesc.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>

                        {/* Primary Strategic Objective Box */}
                        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                            Primary Strategic Objective:
                          </p>
                          <p className="text-xs sm:text-sm text-foreground/90 font-medium">{activeService.objective}</p>
                        </div>

                        {/* Inclusions checklist */}
                        <div className="mt-6 pt-5 border-t border-border/50">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90 mb-3.5 flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-primary" />
                            <span>Execution Focus &amp; Inclusions</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {activeService.inclusions.map((item, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 rounded-xl border border-border/40 bg-secondary/30 p-2.5 transition-colors hover:border-primary/40 hover:bg-secondary/50"
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
                          href={activeService?.dedicatedUrl || ''}
                          className="btn-primary-gradient w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>Explore {activeService.title}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        {activeService.dedicatedUrl ? (
                          <Link
                            href={activeService.dedicatedUrl}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                          >
                            <span>Learn more on full SEO page →</span>
                          </Link>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            Custom execution aligned with your business goals
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW B: BALANCED 8-CARD GRID CATALOG VIEW */}
          {catalogView === 'grid' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
            >
              {digitalMarketingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl"
                  >
                    <div>
                      {/* Card Header: Icon + Number */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary transition-transform group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                          {service.number}
                        </span>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">{service.tag}</span>
                      <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/40">
                      <ul className="space-y-1.5 mb-5">
                        {service.inclusions.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between gap-2">
                        <Link
                          href="#contact"
                          className="btn-primary-gradient w-full text-center py-2.5 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 group cursor-pointer"
                        >
                          <span>Explore Service</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: OUR 5-STEP APPROACH TO DIGITAL GROWTH          */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Structured Execution
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Approach to <span className="gradient-text">Digital Growth</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              A successful marketing strategy should connect individual activities rather than treat every channel as a
              separate effort. GrowthVoice follows a structured approach that keeps your business objectives at the
              centre of every decision.
            </p>
          </div>

          {/* 5-Step Connected Process Track */}
          <div className="relative mx-auto max-w-5xl">
            {/* Center rail for desktop */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-[hsl(var(--hero-gradient-end))] to-primary/40 z-0" />

            <div className="space-y-6 sm:space-y-10 relative z-10">
              {growthApproachSteps.map((step, index) => {
                const isEven = index % 2 === 0;
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-1/2">
                      <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-display text-2xl font-extrabold text-primary">Phase {step.number}</span>
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Milestone Center Node for Desktop */}
                    <div className="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full bg-background border-2 border-primary text-primary font-bold shadow-lg shadow-primary/20">
                      <span>{step.number}</span>
                    </div>

                    {/* Spacer for symmetrical balance */}
                    <div className="hidden lg:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHY CHOOSE GROWTHVOICE?                        */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              The GrowthVoice Advantage
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose <span className="gradient-text">GrowthVoice?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Choosing a marketing partner means finding a team that understands your business priorities and can
              translate them into practical action. GrowthVoice focuses on combining strategic planning with consistent
              execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-card/70 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2.5">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary callout quote */}
          <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8 backdrop-blur-sm text-center max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
              &ldquo;Our aim is to help your business make better use of its digital channels and build a marketing
              foundation that can support long-term growth.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: DIGITAL MARKETING FOR DIFFERENT BUSINESS NEEDS */}
      {/* ========================================================= */}
      <section className="relative py-20 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Tailored Audience Mix
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Digital Marketing for <span className="gradient-text">Different Business Needs</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Marketing priorities vary depending on the type of business, its customers, and its growth stage. A
              startup may need to establish brand awareness, while an established company may want to improve lead
              quality or expand into new markets.
            </p>
          </div>

          {/* Interactive Audience Pill Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
            {businessNeedsAudiences.map((aud, index) => {
              const isActive = index === activeAudienceIndex;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveAudienceIndex(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-primary text-black font-bold shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                      : 'bg-card/50 text-muted-foreground border-border/70 hover:bg-card hover:text-foreground'
                  }`}
                >
                  <span>{aud?.shortName}</span>
                </button>
              );
            })}
          </div>

          {/* Active Audience Spotlight Showcase */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAudience.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-primary/30 bg-gradient-to-br from-card/90 via-card/70 to-card/95 p-6 sm:p-9 md:p-11 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="rounded-full bg-primary/15 border border-primary/30 px-3 py-0.5 text-xs font-semibold text-primary">
                      {activeAudience.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    {activeAudience.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                    {activeAudience.description}
                  </p>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/90 mb-3 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Customized Strategic Tactics:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeAudience.keyTactics.map((tactic, idx) => (
                        <span
                          key={idx}
                          className="rounded-xl bg-secondary/80 border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {tactic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/40 border border-border/60 text-center w-full md:w-56">
                  {(() => {
                    const AudIcon = activeAudience.icon;
                    return (
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4">
                        <AudIcon className="h-8 w-8" />
                      </div>
                    );
                  })()}
                  <span className="text-xs font-semibold text-foreground">Tailored Mix</span>
                  <Link
                    href="#contact"
                    className="mt-4 text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Request Strategy</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: FINAL CTA & CONTACT FORM INTEGRATION           */}
      {/* ========================================================= */}
      <section className="relative pt-16 pb-4 border-t border-border/40">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-10">
            <span className="announcement-badge mb-3 inline-block">
              <span className="glow-dot" />
              Build Your Marketing Strategy
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Build a Marketing Strategy Around <span className="gradient-text">Your Business Goals</span>
            </h2>
            <div className="mt-4 space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <p>
                Digital growth does not happen through isolated campaigns or short-term promotional activities. It comes
                from understanding your audience, choosing the right channels, delivering consistent communication, and
                improving your approach over time.
              </p>
              <p className="font-medium text-foreground/90">
                Ready to take the next step? Let’s discuss your business goals, understand your current challenges, and
                identify the marketing activities that can help move your business forward.
              </p>
            </div>
          </div>
        </div>

        {/* Integrated Contact Section */}
        <ContactSection />
      </section>
    </div>
  );
}
