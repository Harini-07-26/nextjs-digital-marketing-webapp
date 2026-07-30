'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Smartphone,
  ShoppingCart,
  Sparkles,
  Target
} from 'lucide-react';
import Navbar from '../navbar';
import FloatingCard from '../floating-card';
import Image from 'next/image';
import TypingTextMotion from '../typing-text-motion';
import TypingHeadingOnScroll from '../typing-text-motion';
import Features from '../features';
import { whybusinessChoose } from '../home-page/data';
import { ScrollReveal } from '../scroll-reveal';

export default function Hero() {
  const stats = [
    { value: '500+', label: 'PROJECTS DELIVERED' },
    { value: '150+', label: 'HAPPY CLIENTS' },
    { value: '50M+', label: 'IMPRESSIONS GENERATED' },
    { value: '300%+', label: 'AVERAGE TRAFFIC GROWTH' }
  ];

  // const goals = [
  //   {
  //     id: 'seo',
  //     title: 'SEO (Search Engine Optimization)',
  //     icon: Target,
  //     metric: '+320% Organic Traffic Growth',
  //     desc: 'Improve your search visibility with data-driven SEO strategies that increase rankings, attract qualified traffic, and generate sustainable business growth through technical optimization, content improvements, and ongoing performance monitoring.',
  //     highlights: [
  //       'Technical SEO',
  //       'On-Page & Off-Page SEO',
  //       'Local & Ecommerce SEO',
  //       'Keyword Research & Content Optimization',
  //       'Link Building, Schema & SEO Audits'
  //     ],
  //     cta: 'Boost Rankings'
  //   },
  //   {
  //     id: 'ppc',
  //     title: 'Pay-Per-Click (PPC) Advertising',
  //     icon: ShoppingCart,
  //     metric: 'Up to 8× ROAS',
  //     desc: 'Drive instant traffic and high-quality leads with optimized PPC campaigns across major advertising platforms. We continuously refine targeting, bidding, and creatives to maximize conversions while reducing advertising costs.',
  //     highlights: [
  //       'Google & Bing Ads',
  //       'Search, Display & Shopping Ads',
  //       'YouTube & Performance Max Campaigns',
  //       'Remarketing & Audience Targeting',
  //       'Landing Page & Conversion Optimization'
  //     ],
  //     cta: 'Maximize ROAS'
  //   },
  //   {
  //     id: 'smm',
  //     title: 'Social Media Marketing',
  //     icon: Sparkles,
  //     metric: '50M+ Brand Impressions',
  //     desc: 'Strengthen your brand with engaging social media campaigns that increase reach, build customer relationships, and drive measurable business results through strategic content and paid advertising.',
  //     highlights: [
  //       'Content Creation & Scheduling',
  //       'Community Management',
  //       'Paid Social Advertising',
  //       'Performance Analytics & Reporting',
  //       'Multi-Platform Growth Strategy'
  //     ],
  //     cta: 'Grow Your Audience'
  //   },
  //   {
  //     id: 'content-marketing',
  //     title: 'Content Marketing',
  //     icon: Smartphone,
  //     metric: '+250% Organic Leads',
  //     desc: 'Build trust and attract customers with valuable content that improves search visibility, educates audiences, and positions your business as an industry authority across digital channels.',
  //     highlights: [
  //       'Blog & Website Content',
  //       'Landing Pages & Copywriting',
  //       'Case Studies & Whitepapers',
  //       'Email Campaigns & Newsletters',
  //       'Product Descriptions & Industry Guides'
  //     ],
  //     cta: 'Build Authority'
  //   },
  //   {
  //     id: 'geo-aeo',
  //     title: 'AI Search Optimization (GEO & AEO)',
  //     icon: Globe,
  //     metric: 'Top AI Search Visibility',
  //     desc: 'Increase your brand visibility across AI-powered search platforms by creating structured, authoritative content optimized for answer engines, voice search, semantic search, and AI-driven discovery.',
  //     highlights: [
  //       'AI Search Optimization',
  //       'Answer & Voice Search',
  //       'Featured Snippet Optimization',
  //       'Entity & Semantic SEO',
  //       'Citation & Knowledge Panel Optimization'
  //     ],
  //     cta: 'Dominate AI Search'
  //   },
  //   {
  //     id: 'web-design',
  //     title: 'Web Design & Conversion Optimization',
  //     icon: Globe,
  //     metric: '+180% Conversion Rate',
  //     desc: 'Create fast, responsive websites designed to deliver exceptional user experiences, improve engagement, and convert visitors into qualified leads through modern design and optimization.',
  //     highlights: [
  //       'UI/UX Design',
  //       'Corporate & Ecommerce Websites',
  //       'Landing Page Development',
  //       'Website Speed & Mobile Optimization',
  //       'CRO & A/B Testing'
  //     ],
  //     cta: 'Increase Conversions'
  //   }
  //   { value: '500+', label: 'PROJECTS DELIVERED' },
  //   { value: '150+', label: 'HAPPY CLIENTS' },
  //   { value: '50M+', label: 'IMPRESSIONS GENERATED' },
  //   { value: '300%+', label: 'AVERAGE TRAFFIC GROWTH' },
  // ];

  const goals = [
    {
      id: 'seo',
      title: 'SEO (Search Engine Optimization)',
      icon: Target,
      metric: '+320% Organic Traffic Growth',
      desc: 'Improve your search visibility with data-driven SEO strategies that increase rankings, attract qualified traffic, and generate sustainable business growth through technical optimization, content improvements, and ongoing performance monitoring.',
      highlights: [
        'Technical SEO',
        'On-Page & Off-Page SEO',
        'Local & Ecommerce SEO',
        'Keyword Research & Content Optimization',
        'Link Building, Schema & SEO Audits'
      ],
      cta: 'Boost Rankings'
    },
    {
      id: 'ppc',
      title: 'Pay-Per-Click (PPC) Advertising',
      icon: ShoppingCart,
      metric: 'Up to 8× ROAS',
      desc: 'Drive instant traffic and high-quality leads with optimized PPC campaigns across major advertising platforms. We continuously refine targeting, bidding, and creatives to maximize conversions while reducing advertising costs.',
      highlights: [
        'Google & Bing Ads',
        'Search, Display & Shopping Ads',
        'YouTube & Performance Max Campaigns',
        'Remarketing & Audience Targeting',
        'Landing Page & Conversion Optimization'
      ],
      cta: 'Maximize ROAS'
    },
    {
      id: 'smm',
      title: 'Social Media Marketing',
      icon: Sparkles,
      metric: '50M+ Brand Impressions',
      desc: 'Strengthen your brand with engaging social media campaigns that increase reach, build customer relationships, and drive measurable business results through strategic content and paid advertising.',
      highlights: [
        'Content Creation & Scheduling',
        'Community Management',
        'Paid Social Advertising',
        'Performance Analytics & Reporting',
        'Multi-Platform Growth Strategy'
      ],
      cta: 'Grow Your Audience'
    },
    {
      id: 'content-marketing',
      title: 'Content Marketing',
      icon: Smartphone,
      metric: '+250% Organic Leads',
      desc: 'Build trust and attract customers with valuable content that improves search visibility, educates audiences, and positions your business as an industry authority across digital channels.',
      highlights: [
        'Blog & Website Content',
        'Landing Pages & Copywriting',
        'Case Studies & Whitepapers',
        'Email Campaigns & Newsletters',
        'Product Descriptions & Industry Guides'
      ],
      cta: 'Build Authority'
    },
    {
      id: 'geo-aeo',
      title: 'AI Search Optimization (GEO & AEO)',
      icon: Globe,
      metric: 'Top AI Search Visibility',
      desc: 'Increase your brand visibility across AI-powered search platforms by creating structured, authoritative content optimized for answer engines, voice search, semantic search, and AI-driven discovery.',
      highlights: [
        'AI Search Optimization',
        'Answer & Voice Search',
        'Featured Snippet Optimization',
        'Entity & Semantic SEO',
        'Citation & Knowledge Panel Optimization'
      ],
      cta: 'Dominate AI Search'
    },
    {
      id: 'web-design',
      title: 'Web Design & Conversion Optimization',
      icon: Globe,
      metric: '+180% Conversion Rate',
      desc: 'Create fast, responsive websites designed to deliver exceptional user experiences, improve engagement, and convert visitors into qualified leads through modern design and optimization.',
      highlights: [
        'UI/UX Design',
        'Corporate & Ecommerce Websites',
        'Landing Page Development',
        'Website Speed & Mobile Optimization',
        'CRO & A/B Testing'
      ],
      cta: 'Increase Conversions'
    }
  ];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
        {/* 🌌 Star Field */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="stars stars-sm" />
          <div className="stars stars-md" />
          <div className="stars stars-lg" />
        </div>
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(265 90% 60%), transparent 70%)'
          }}
        />

        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Announcement */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="announcement-badge">
                  <span className="glow-dot" />
                  Growth Voice
                </span>
              </motion.div>

              {/* Heading */}
              {/* <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              >
                The Future of <span className="gradient-text">Digital Finance</span>
              </motion.h1> */}

              <TypingHeadingOnScroll
                textBefore="Digital Marketing Agency"
                textGradient="That Drives Real Business Growth"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              >
                At GrowthVoice, we help businesses increase online visibility, drive qualified traffic, generate leads,
                and grow revenue with data-driven digital marketing strategies. From startups to enterprises, we create
                customized campaigns backed by market research, competitor analysis, and performance insights to
                maximize ROI. At GrowthVoice, we help businesses increase online visibility, drive qualified traffic,
                generate leads, and grow revenue with data-driven digital marketing strategies. From startups to
                enterprises, we create customized campaigns backed by market research, competitor analysis, and
                performance insights to maximize ROI.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <div className="btn-primary-gradient inline-flex items-center gap-2">
                  Get Free Marketing Consultation <ArrowRight className="h-4 w-4" />
                </div>
                <button className="btn-outline-dark">Grow Your Business Today</button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-14 flex flex-wrap gap-6"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Floating Cards */}
            <div className="relative hidden h-[400px] lg:block">
              <FloatingCard
                icon={Zap}
                label="Transaction Speed"
                value="Near Instant"
                iconColor="text-primary"
                delay={0}
                className="absolute top-16 left-0"
              />
              <FloatingCard
                icon={ShieldCheck}
                label="Security Level"
                value="Military Grade"
                iconColor="text-green-500"
                delay={0.2}
                className="absolute top-44 right-0"
              />
            </div>
          </div>
        </div>

        {/* our services */}
        <div className="pt-8">
          <h1 className="text-3xl font-bold font-display text-center mt-10">
            Our Digital Marketing Services
            <span className="gradient-text mx-2">
              {'That Generate Measurable Results'.split('').map((char, i) => (
                <motion.span
                  key={`gradient-${i}`}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 container px-4 sm:px-6">
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
                      <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{goal.title}</h3>
                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{goal.desc}</p>

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
          </div>
        </div>

        <Features
          variant="dark"
          title="Why Businesses Choose GrowthVoice"
          description="Thousands of marketing agencies promise results. We focus on delivering measurable business outcomes."
          datatestId="why-businesses-choose-growthvoice"
          features={whybusinessChoose}
        />

        {/* Trusted bar */}
        {/* <motion.div
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="container mt-24"
        >
          <div className="border-t border-border pt-12">
            <p className="text-center text-lg font-bold tracking-[0.25em] text-muted-foreground uppercase">
              Trusted by industry leaders worldwide
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
              {['Coinbase', 'Binance', 'Stripe', 'Revolut', 'Gemini'].map((name) => (
                <span key={name} className="font-display text-xl font-bold italic gradient-text sm:text-2xl">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div> */}
      </section>
    </>
  );
}
