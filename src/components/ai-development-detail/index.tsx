'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/src/components/scroll-reveal';
import type { AiDevelopmentTopic } from '@/src/data/ai-development-topics';
import { getAiTopicIcon } from '@/src/data/ai-topic-icons';

interface AiDevelopmentDetailProps {
  topic: AiDevelopmentTopic;
}

const AiDevelopmentDetail = ({ topic }: AiDevelopmentDetailProps) => {
  const Icon = getAiTopicIcon(topic.iconName);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden pt-32 pb-20">
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
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="mt-8 flex items-start gap-5">
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${topic.iconBg}`}>
                <Icon className={`h-8 w-8 ${topic.iconColor}`} />
              </div>
              <div>
                <span className="announcement-badge">
                  <span className="glow-dot" /> AI Development
                </span>
                <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                  {topic.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{topic.shortDescription}</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
                Get a quote <ArrowRight className="h-4 w-4" />
              </button>
              <Link href="/contact" className="btn-outline-dark text-sm">
                Schedule a call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Overview
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{topic.description}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-card/60 p-8 backdrop-blur">
                <h3 className="font-display text-xl font-semibold text-foreground">What we deliver</h3>
                <ul className="mt-5 space-y-3">
                  {topic.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Common <span className="gradient-text">use cases</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Real-world applications where {topic.title.toLowerCase()} drives measurable business impact.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topic.useCases.map((useCase, i) => (
              <ScrollReveal key={useCase} delay={i * 0.05}>
                <div className="flex h-full items-center rounded-xl border border-border bg-card/60 px-5 py-4 backdrop-blur transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)_/_0.15)]">
                  <span className="text-sm font-medium text-foreground">{useCase}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Ready to build with <span className="gradient-text">AI</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Tell us about your project and we&apos;ll craft a tailored {topic.title.toLowerCase()} solution within 48
                hours.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <button className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
                  Start your project <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="/" className="btn-outline-dark text-sm">
                  Explore all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiDevelopmentDetail;
