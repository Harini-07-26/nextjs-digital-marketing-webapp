import { Shield, Zap, Globe, CreditCard, PieChart, Lock, ArrowRight } from 'lucide-react';
import { FC } from 'react';
import { ScrollReveal } from '../scroll-reveal';

interface IFeaturesProps {
  title: string;
  description: string;
  variant?: 'dark' | 'light';
  datatestId?: string;
  features: any;
  showCTAButton?: boolean;
}


export const Features: FC<IFeaturesProps> = ({ title, description, variant = 'dark', datatestId, features, showCTAButton = false }) => {
  const isLight = variant === 'light';

  // Theme classes
  const sectionBg = isLight ? 'bg-white' : 'bg-background';
  const headingColor = isLight ? 'text-gray-900' : 'text-foreground';
  const subtitleColor = isLight ? 'text-gray-500' : 'text-muted-foreground';
  const cardBg = isLight
    ? 'bg-gray-50/80 border-gray-200 hover:border-primary hover:shadow-lg'
    : 'bg-card/60 backdrop-blur-md border-border hover:border-primary hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.4)]';
  const cardTitle = isLight ? 'text-gray-900' : 'text-foreground';
  const cardDesc = isLight
    ? 'text-gray-600 group-hover:text-gray-700'
    : 'text-muted-foreground group-hover:text-foreground/80';
  const metaText = isLight ? 'text-gray-500' : 'text-muted-foreground';
  const metaText2 = isLight ? 'text-gray-400' : 'text-muted-foreground/70';
  const hrColor = isLight ? 'border-gray-200' : 'border-border';
  const ctaColor = isLight ? 'text-primary hover:text-primary/80' : 'text-primary hover:text-primary/80';
  const topBarGradient = 'from-pink-500 via-purple-500 to-indigo-500';

  return (
    <section datatest-id={datatestId} className={`py-24 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className={`font-display text-3xl md:text-5xl font-bold ${headingColor} mb-4`}>{title}</h2>
            <p className={`${subtitleColor} text-lg max-w-2xl mx-auto`}>{description}</p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any, index: number) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div
                className={`
                  group relative h-full overflow-hidden
                  p-8 rounded-2xl border 
                  transition-all duration-300 ease-out
                  will-change-transform
                  hover:brightness-105
                  ${cardBg}
                `}
              >
                {/* Top gradient bar on hover */}
                <span
                  className={`
                    absolute top-0 left-0 h-1 w-full
                    bg-gradient-to-r ${topBarGradient}
                    scale-x-0 origin-left
                    group-hover:scale-x-100
                    transition-transform duration-500 ease-out
                  `}
                />

                {/* Shine sweep */}
                <span
                  className={`
                    pointer-events-none absolute inset-0
                    -translate-x-full
                    bg-gradient-to-r from-transparent ${isLight ? 'via-black/5' : 'via-white/10'} to-transparent
                    group-hover:translate-x-full
                    transition-transform duration-700
                  `}
                />

                {/* Icon */}
                <div
                  className="relative border border-blue-100/35 group-hover:bg-amber-200/40
                  group-hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                  z-10 mb-6 w-fit p-3 rounded-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                  style={{ '--hover-bg': feature.bg } as React.CSSProperties}
                >
                  <feature.icon
                    className={`h-6 w-6  ${feature.color} transition-transform duration-300 group-hover:rotate-6`}
                  />
                </div>

                {/* Title */}
                <h3 className={`relative z-10 text-xl font-bold ${cardTitle} mb-3 font-display`}>{feature.title}</h3>

                {/* Description */}
                <p className={`relative z-10 leading-relaxed transition-all duration-300 ${cardDesc}`}>
                  {feature.description}
                </p>

                {(feature.desc1 || feature.desc2) && (
                  <>
                    <hr className={`my-4 ${hrColor}`} />
                    {feature.desc1 && <p className={`${metaText} text-sm transition-colors my-1`}>{feature.desc1}</p>}
                    {feature.desc2 && <p className={`${metaText2} text-sm transition-colors`}>{feature.desc2}</p>}
                  </>
                )}
                {
                  showCTAButton && <div
                    className={`mt-3 ${ctaColor} cursor-pointer inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300`}
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </div>
                }
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
