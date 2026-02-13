import { motion } from 'framer-motion';
import { Shield, Zap, Globe, CreditCard, PieChart, Lock } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';

const features = [
  {
    title: 'Global Payments',
    description: 'Send and receive money anywhere in the world in seconds with our cross-border payment network.',
    icon: Globe,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'Advanced Security',
    description: 'Your assets are protected by multi-signature wallets and institutional-grade encryption.',
    icon: Shield,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Instant Swaps',
    description: 'Exchange assets instantly with zero slippage and the lowest fees in the market.',
    icon: Zap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Smart Analytics',
    description: 'Get deep insights into your spending habits and investment performance with AI-driven reports.',
    icon: PieChart,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Digital Cards',
    description: 'Generate virtual cards instantly for secure online shopping and subscriptions.',
    icon: CreditCard,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10'
  },
  {
    title: 'Vault Storage',
    description: 'Secure your long-term assets in cold storage vaults with time-delayed withdrawals.',
    icon: Lock,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Everything you need to <br />
              <span className="text-gradient">master your finances</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Ditch the old banking system. DIGI provides all the tools you need to manage, grow, and secure your
              digital assets in one place.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div
                className="
          group relative h-full overflow-hidden
          glass-dark p-8 rounded-2xl
          border border-white/5
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:scale-[1.01]
          hover:border-white/10
          hover:brightness-105
          hover:shadow-[0_30px_80px_rgba(0,0,0,0.9)]
          will-change-transform
        "
              >
                {/* Shine sweep */}
                <span
                  className="
            pointer-events-none absolute inset-0
            -translate-x-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            transition-transform duration-900
            group-hover:translate-x-full
          "
                />

                {/* Icon */}
                <div
                  className={`
            relative z-10 mb-6 w-fit p-3 rounded-xl
            ${feature.bg}
            transition-all duration-300
            group-hover:-translate-y-1
            group-hover:scale-110
            group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
          `}
                >
                  <feature.icon
                    className={`h-6 w-6 ${feature.color} transition-transform duration-300 group-hover:rotate-6`}
                  />
                </div>

                {/* Title */}
                <h3
                  className="
            relative z-10 text-xl font-bold text-white mb-3
            transition-colors duration-300
            group-hover:text-white
          "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
            relative z-10 text-slate-400 leading-relaxed
            transition-all duration-300
            group-hover:text-slate-300
            group-hover:translate-x-1
          "
                >
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
