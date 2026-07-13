'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  KeyRound,
  Server,
  Eye,
  FileCheck2,
  AlertTriangle,
  Fingerprint,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../navbar';
import { ScrollReveal } from '../scroll-reveal';

const pillars = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'AES-256 at rest and TLS 1.3 in transit across every request, worker, and backup.'
  },
  {
    icon: Fingerprint,
    title: 'Biometric & MFA',
    description: 'FIDO2, passkeys, TOTP, and device biometrics — no shared secrets, no SMS fallback.'
  },
  {
    icon: Server,
    title: 'Isolated Infrastructure',
    description: 'Per-tenant VPCs, hardware-backed keys, and immutable audit trails on every write.'
  },
  {
    icon: Eye,
    title: 'Real-Time Threat Detection',
    description: '24/7 anomaly detection with automated containment and human-verified response.'
  },
  {
    icon: FileCheck2,
    title: 'Compliance Ready',
    description: 'SOC 2 Type II, ISO 27001, GDPR, and HIPAA-aligned controls out of the box.'
  },
  {
    icon: KeyRound,
    title: 'Granular Access',
    description: 'Role-based permissions, session policies, and just-in-time elevation for admins.'
  }
];

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '< 15m', label: 'Incident response' },
  { value: '256-bit', label: 'Encryption standard' },
  { value: '0', label: 'Data breaches to date' }
];

const certifications = ['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS', 'CCPA'];

const SecurityComponent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <Shield className="h-3.5 w-3.5 text-primary" />
                Trust & Security Center
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Built with{' '}
                <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                  bank-grade security
                </span>{' '}
                at the core.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From encryption to compliance, every layer of DIGI is engineered to protect the assets, identities, and
                reputations of the businesses that depend on us.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="btn-primary-gradient text-sm">Request Security Whitepaper</button>
                <a href="#pillars" className="text-sm text-muted-foreground hover:text-foreground">
                  Explore our controls →
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/60 bg-card/40 p-6 text-center backdrop-blur"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Six pillars of protection</h2>
              <p className="mt-3 text-muted-foreground">
                A defense-in-depth model where every request is authenticated, authorized, and audited.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur transition hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Compliance you can audit, not just claim.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We publish attestation reports quarterly and let your security team run their own tests against a
                  full-featured sandbox. No sales calls required.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'Continuous vulnerability scanning & pen tests',
                    'Immutable, exportable audit logs',
                    'Bring-your-own-key encryption',
                    'Data residency in 12+ regions'
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {certifications.map((c) => (
                  <div
                    key={c}
                    className="flex items-center justify-center rounded-xl border border-border/60 bg-card/40 p-5 text-center text-sm font-medium text-foreground/90 backdrop-blur"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Report */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-card/30 p-10 md:p-14">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/15 text-amber-300">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Found a vulnerability?</h3>
                    <p className="mt-1 text-muted-foreground">
                      Report it through our responsible disclosure program and get rewarded.
                    </p>
                  </div>
                </div>
                <button className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
                  Report an issue <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SecurityComponent;
