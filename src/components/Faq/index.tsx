'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone, Plus, Minus } from 'lucide-react';

import { ScrollReveal } from '../scroll-reveal';

const faqs = [
  {
    question: 'What digital marketing services do you offer?',
    answer:
      'We offer full-stack growth marketing including paid social, search advertising, SEO, content strategy, lifecycle email & SMS, CRO, landing page development, creator & UGC production, and AI-powered creative studios — all unified under one dashboard and one team.'
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We specialize in fintech, SaaS, e-commerce, fashion, health & wellness, and B2B marketplaces. Our playbooks are built from $100M+ in managed ad spend across these verticals.'
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We build custom attribution dashboards around your north-star metrics — typically ROAS, LTV/CAC, pipeline velocity, and organic revenue share. Every weekly review ties channel activity back to business outcomes.'
  },
  {
    question: 'How much do your digital marketing services cost?',
    answer:
      "Our engagements are tailored to your growth stage and channel mix. We offer managed service retainers and performance-based options. Book a strategy call and we'll deliver a transparent proposal within 48 hours."
  },
  {
    question: "Can I review content before it's published?",
    answer:
      'Absolutely. Our workflow includes creative briefs, copy decks, and asset galleries for approval before any campaign goes live. You stay in control of your brand voice.'
  },
  {
    question: 'Is there a minimum contract period?',
    answer:
      'We recommend a 90-day runway to prove channel-market fit and gather enough data. That said, we offer flexible terms and quarterly strategy reviews so you can scale or pivot confidently.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-24 bg-background">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(500px circle at 20% 30%, hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(400px circle at 85% 70%, hsl(var(--hero-gradient-end) / 0.14), transparent 60%)'
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="mb-14 text-center">
          <ScrollReveal>
            <span className="announcement-badge">
              <HelpCircle className="h-4 w-4 text-primary" />
              FAQs
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold text-foreground md:text-5xl">
              Question? <span className="gradient-text">Look here</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Everything you need to know about working with DIGI. Can't find the answer? Our team is online.
            </p>
          </ScrollReveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <ScrollReveal key={faq.question} delay={i * 0.05}>
                    <div
                      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? 'border-primary/50 bg-card/80 shadow-[0_0_30px_hsl(var(--primary)_/_0.12)]'
                          : 'border-border bg-card/40 hover:border-primary/30 hover:bg-card/60'
                      }`}
                    >
                      <button
                        onClick={() => toggle(i)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="font-display text-base font-semibold text-foreground md:text-lg">
                          {faq.question}
                        </span>
                        <span
                          className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                            isOpen ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                          }`}
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="border-t border-border/60 px-6 pb-5 pt-3">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <ScrollReveal delay={0.1}>
              {/* Contact Card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
                {/* Subtle animated gradient border overlay */}
                <div className="animated-border-wrapper-subtle absolute inset-[-2px] -z-10 rounded-3xl opacity-20" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">You have different questions?</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Our team will answer all your questions. We ensure a quick response.
                  </p>
                  <button className="btn-primary-gradient mt-6 text-sm">Contact Us</button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {/* 24/7 Service Card */}
              <div className="rounded-3xl border border-border bg-card/40 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your Growth, Our Mission</p>
                    <p className="font-display text-xl font-bold text-foreground">24/7 Service</p>
                    <p className="text-sm text-muted-foreground">(000) 000-0000</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
