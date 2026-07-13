'use client';

import { motion } from 'framer-motion';
import { Smartphone, Bell, Fingerprint, Wifi, Zap, BarChart3, Apple, Play, Star, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';
import Navbar from '../navbar';
import { Footer } from '../footer';

const features = [
  {
    icon: Bell,
    title: 'Live Alerts',
    description: 'Push notifications for every price move, deposit, or team action.'
  },
  {
    icon: Fingerprint,
    title: 'Face & Touch ID',
    description: 'Sign in and approve transactions with biometrics only.'
  },
  { icon: Wifi, title: 'Offline Mode', description: 'View portfolios and drafts even when the network drops.' },
  { icon: Zap, title: 'One-Tap Trades', description: 'Pre-authorized shortcuts for your most-used flows.' },
  { icon: BarChart3, title: 'Widgets', description: 'Home-screen widgets for markets, KPIs and team activity.' },
  { icon: Smartphone, title: 'Cross-Device Sync', description: 'Continue on desktop right where you left off.' }
];

const reviews = [
  {
    name: 'Ava R.',
    role: 'Founder',
    quote: 'The mobile app is faster than the web dashboard I used to run my ops on.'
  },
  {
    name: 'Marcus L.',
    role: 'Investor',
    quote: 'Face ID, widgets, alerts — it feels like a native banking app, not a plugin.'
  },
  { name: 'Priya S.', role: 'PM', quote: 'Offline mode saved me during a flight demo. Everything just… worked.' }
];

const MobileApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
          <div className="absolute left-1/4 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
        </div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <Smartphone className="h-3.5 w-3.5 text-primary" />
                Mobile App · iOS & Android
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Your business,{' '}
                <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                  in your pocket.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                The DIGI mobile app brings the full power of the platform to your phone — fast, biometric-secured, and
                beautifully designed for on-the-go decisions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-background transition hover:opacity-90"
                >
                  <Apple className="h-6 w-6" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-70">Download on the</div>
                    <div className="font-display text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-xl border border-border/60 bg-card/40 px-5 py-3 text-foreground backdrop-blur transition hover:border-primary/50"
                >
                  <Play className="h-6 w-6 text-primary" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-70">GET IT ON</div>
                    <div className="font-display text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 font-medium text-foreground">4.9</span>
                </div>
                <span>·</span>
                <span>120k+ downloads</span>
                <span>·</span>
                <span>Editor's Choice</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Phone Mockup */}
          <ScrollReveal delay={0.2}>
            <div className="relative mx-auto flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[560px] w-[280px] rounded-[44px] border-[10px] border-foreground/90 bg-gradient-to-br from-slate-900 to-slate-800 shadow-[0_40px_100px_-20px_rgba(139,92,246,0.5)]"
              >
                <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
                <div className="h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-background via-background to-primary/10 p-5 pt-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-muted-foreground">Good morning</div>
                      <div className="font-display text-base font-bold text-foreground">Ava</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary/30" />
                  </div>

                  <div className="mt-5 rounded-2xl bg-gradient-to-br from-primary/30 to-fuchsia-500/20 p-4">
                    <div className="text-[10px] text-foreground/70">Portfolio</div>
                    <div className="font-display text-2xl font-bold text-foreground">$284,193</div>
                    <div className="mt-1 text-[10px] text-emerald-300">+ 12.4% this week</div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {['BTC · Bitcoin', 'ETH · Ethereum', 'SOL · Solana'].map((t, i) => (
                      <div
                        key={t}
                        className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 p-2.5"
                      >
                        <div className="text-[11px] font-medium text-foreground">{t}</div>
                        <div className="text-[10px] text-emerald-300">+{(2 + i * 0.7).toFixed(1)}%</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {['Send', 'Buy', 'Swap'].map((a) => (
                      <div
                        key={a}
                        className="rounded-xl border border-border/50 bg-card/40 py-2 text-center text-[10px] font-medium text-foreground"
                      >
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating alert card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-4 top-16 hidden md:flex w-52 items-start gap-2 rounded-2xl border border-border/60 bg-card/80 p-3 backdrop-blur-xl"
              >
                <Bell className="h-4 w-4 flex-shrink-0 text-primary" />
                <div>
                  <div className="text-xs font-semibold text-foreground">Price alert</div>
                  <div className="text-[10px] text-muted-foreground">BTC crossed $72,000</div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Everything you love, redesigned for touch.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Native performance with the same familiar workflow you use on desktop.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground">
              Loved by mobile-first teams
            </h2>
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/90">"{r.quote}"</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{r.name}</span> · {r.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/20 via-card/60 to-fuchsia-500/10 p-10 md:p-14 text-center">
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Ready to take DIGI everywhere?
              </h3>
              <p className="mt-3 text-muted-foreground">Scan, download, and sign in with your existing account.</p>
              <div className="mt-6 flex justify-center gap-3">
                <button className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
                  Get the app <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;
