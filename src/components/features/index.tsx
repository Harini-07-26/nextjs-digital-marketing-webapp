import { Shield, Zap, Globe, CreditCard, PieChart, Lock, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../scroll-reveal';
import { FC } from 'react';

interface IFeaturesProps {
  datatestId: string;
  title: string;
  description: string;
}

const features = [
  {
    title: 'Paid Social',
    description:
      'Strategic campaigns across Meta (Instagram, Facebook), TikTok, Pinterest, Snapchat, and Reddit that turn scrollers into customers with thumb-stopping creative.',
    icon: Globe,
    desc1: 'Tools: Meta Ads Manager, TikTok Ads, Pinterest Ads, Reddit Ads',
    desc2: 'Perfect for: D2C brands, App installs, Lead generation',
    color: 'text-blue-400',
    bg: 'bg-red-200/20'
  },
  {
    title: 'Creative Production',
    description:
      'Performance-driven creative that converts. From UGC to motion graphics and video production, we produce content designed to perform.',
    icon: Shield,
    desc1: 'Services: Video Production, Photography, UGC, Motion graphics',
    desc2: 'Perfect for: Social content, Product shoots, Brand campaigns',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10'
  },
  {
    title: 'Paid Search & PPC',
    description: 'Capture high-intent demand with Google Ads strategies built for efficiency and scale.',
    icon: Zap,
    desc1: 'Tools: Google Ads, Microsoft Ads, Apple Search Ads',
    desc2: 'Perfect for: High-intent keywords, App installs, Local services',
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Email, CRM & CRO',
    description:
      'Automated flows and campaigns that nurture leads and maximise customer lifetime value, plus conversion rate optimisation to turn more visitors into customers.',
    icon: PieChart,
    desc1: 'Tools: Klaviyo, Customer.io, Mailchimp, HubSpot, ActiveCampaign',
    desc2: 'Perfect for: E-commerce retention, Lead nurturing, CRO, Newsletters',
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

export const Features: FC<IFeaturesProps> = ({ title, description }) => {
  return (
    <section id="features" className="py-24 bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">{description}</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div
                className="
          group relative h-full overflow-hidden
          glass-dark p-8 rounded-2xl
          border border-white/20
          transition-all duration-300 ease-out
          hover:border-[#8b5cf6]
          hover:brightness-105
          hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.4)]
          will-change-transform
        "
              >
                <span
                  className="
      absolute top-0 left-0 h-1 w-full
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      scale-x-0 origin-left
      group-hover:scale-x-100
      transition-transform duration-500 ease-out
    "
                />
                {/* Shine sweep */}
                <span
                  className="
            pointer-events-none absolute inset-0
            -translate-x-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            transition-transform duration-900
          "
                />

                {/* Icon */}
                <div
                  className={`
            relative z-10 mb-6 w-fit p-3 rounded-xl
            transition-all duration-300
            group-hover:-translate-y-1
            group-hover:scale-110
            group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
          `}
                  style={{ '--hover-bg': feature.bg } as React.CSSProperties}
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
            
          "
                >
                  {feature.description}
                </p>
                <hr className="my-4 text-gray-800" />
                <p className="text-slate-400  text-md transition-colors my-1">{feature?.desc1}</p>
                <p className="text-gray-500  text-md transition-colors">{feature?.desc2}</p>
                <div className="mt-3 hover:text-blue-500 cursor-pointer inline-flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4 hover:text-blue-500" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
