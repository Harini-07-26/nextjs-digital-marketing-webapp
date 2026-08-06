import { useState, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {
  SiGoogle,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiGooglegemini,
  SiSemrush,
  SiFacebook,
  SiInstagram,
  SiX,
  SiPinterest,
  SiReddit,
  SiMedium,
  SiMailchimp,
  SiHubspot,
  SiClaude
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import OpenAIIcon from '../icons/Open-Ai';
import BingIcon from '../icons/Bing';
import CanvaIcon from '../icons/Canva';

type Brand = {
  name: string;
  short: string;
  category: string;
  tagline: string;
  color: string;
  Icon?: ComponentType<{ className?: string }>;
};

const innerBrands: Brand[] = [
  {
    name: 'Google',
    short: 'G',
    category: 'Search & Ads',
    tagline: 'Search, Ads and the whole growth ecosystem',
    color: '217 89% 55%',
    Icon: SiGoogle
  },
  {
    name: 'Google Analytics 4',
    short: 'GA4',
    category: 'Analytics',
    tagline: 'Event-based analytics and conversion tracking',
    color: '33 95% 55%',
    Icon: SiGoogleanalytics
  },
  {
    name: 'Google Search Console',
    short: 'GSC',
    category: 'SEO',
    tagline: 'Index coverage, queries and search performance',
    color: '210 90% 52%',
    Icon: SiGooglesearchconsole
  },
  {
    name: 'Google Tag Manager',
    short: 'GTM',
    category: 'Tracking',
    tagline: 'Tag deployment without touching the codebase',
    color: '205 85% 50%',
    Icon: SiGoogletagmanager
  },
  {
    name: 'Bing',
    short: 'B',
    category: 'Search',
    tagline: 'Microsoft search reach and Bing Webmaster Tools',
    color: '190 90% 40%',
    Icon: BingIcon
  },
  {
    name: 'Semrush',
    short: 'SR',
    category: 'SEO Suite',
    tagline: 'Keyword research and competitive intelligence',
    color: '20 95% 55%',
    Icon: SiSemrush
  },
  {
    name: 'Ahrefs',
    short: 'AH',
    category: 'SEO Suite',
    tagline: 'Backlink analysis and content gap discovery',
    color: '215 80% 55%'
  },
  {
    name: 'Screaming Frog',
    short: 'SF',
    category: 'Technical SEO',
    tagline: 'Deep site crawls and technical SEO audits',
    color: '150 60% 40%'
  },
  {
    name: 'Microsoft Clarity',
    short: 'MC',
    category: 'Behaviour',
    tagline: 'Heatmaps and session recordings, free forever',
    color: '260 80% 60%'
  },
  {
    name: 'HubSpot',
    short: 'HS',
    category: 'CRM',
    tagline: 'CRM, lifecycle marketing and automation',
    color: '14 90% 58%',
    Icon: SiHubspot
  }
];

const outerBrands: Brand[] = [
  {
    name: 'Facebook',
    short: 'F',
    category: 'Social Ads',
    tagline: 'Meta ads at scale with pixel-perfect tracking',
    color: '221 85% 50%',
    Icon: SiFacebook
  },
  {
    name: 'Instagram',
    short: 'IG',
    category: 'Social',
    tagline: 'Creative-first campaigns and creator collabs',
    color: '330 80% 55%',
    Icon: SiInstagram
  },
  {
    name: 'LinkedIn',
    short: 'IN',
    category: 'B2B',
    tagline: 'Account-based marketing for B2B pipelines',
    color: '201 100% 35%',
    Icon: FaLinkedin
  },
  {
    name: 'X (Twitter)',
    short: 'X',
    category: 'Social',
    tagline: 'Real-time community building and reach',
    color: '0 0% 12%',
    Icon: SiX
  },
  {
    name: 'Pinterest',
    short: 'P',
    category: 'Discovery',
    tagline: 'Visual discovery that drives commerce intent',
    color: '351 78% 46%',
    Icon: SiPinterest
  },
  {
    name: 'Reddit',
    short: 'R',
    category: 'Community',
    tagline: 'Niche communities and authentic conversations',
    color: '16 100% 50%',
    Icon: SiReddit
  },
  {
    name: 'Medium',
    short: 'M',
    category: 'Content',
    tagline: 'Long-form thought leadership distribution',
    color: '0 0% 10%',
    Icon: SiMedium
  },
  {
    name: 'Mailchimp',
    short: 'MC',
    category: 'Email',
    tagline: 'Lifecycle email campaigns and automations',
    color: '48 95% 55%',
    Icon: SiMailchimp
  },
  {
    name: 'Canva',
    short: 'CV',
    category: 'Design',
    tagline: 'Fast, on-brand creative production',
    color: '186 90% 45%',
    Icon: CanvaIcon
  },
  {
    name: 'ChatGPT',
    short: 'AI',
    category: 'AI',
    tagline: 'AI copy, ideation and workflow acceleration',
    color: '165 60% 40%',
    Icon: OpenAIIcon
  },
  {
    name: 'Gemini',
    short: 'GM',
    category: 'AI',
    tagline: 'Multimodal AI for research and creative',
    color: '225 85% 60%',
    Icon: SiGooglegemini
  },
  {
    name: 'Claude',
    short: 'CL',
    category: 'AI',
    tagline: 'Reasoning-heavy AI for strategy and analysis',
    color: '22 65% 55%',
    Icon: SiClaude
  }
];

const Ring = ({
  brands,
  radius,
  size,
  duration,
  reverse = false,
  onSelect,
  selected
}: {
  brands: Brand[];
  radius: number;
  size: number;
  duration: number;
  reverse?: boolean;
  onSelect: (b: Brand) => void;
  selected: Brand | null;
}) => (
  <motion.div
    className="absolute inset-0"
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, ease: 'linear', repeat: Infinity }}
  >
    {brands.map((brand, i) => {
      const angle = (i / brands.length) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const isActive = selected?.name === brand.name;
      const Icon = brand.Icon;
      return (
        <div
          key={brand.name}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
        >
          <motion.div
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, ease: 'linear', repeat: Infinity }}
          >
            <button
              type="button"
              onClick={() => onSelect(brand)}
              className="group relative block"
              aria-label={brand.name}
            >
              <span
                className={`flex items-center justify-center rounded-full font-display font-bold text-primary-foreground transition-all duration-300 ${
                  isActive
                    ? 'scale-110 opacity-100'
                    : 'opacity-70 grayscale hover:scale-110 hover:opacity-100 hover:grayscale-0'
                }`}
                style={{
                  width: size,
                  height: size,
                  fontSize: size * (brand.short.length > 2 ? 0.26 : 0.34),
                  background: `linear-gradient(140deg, hsl(${brand.color}), hsl(${brand.color} / 0.65))`,
                  boxShadow: isActive ? `0 0 26px hsl(${brand.color} / 0.7)` : '0 6px 18px hsl(228 40% 2% / 0.6)'
                }}
              >
                {Icon ? <Icon className="h-1/2 w-1/2" /> : brand.short}
              </span>
              <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {brand.name}
              </span>
            </button>
          </motion.div>
        </div>
      );
    })}
  </motion.div>
);

const BrandOrbit = () => {
  const [selected, setSelected] = useState<Brand | null>(null);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container relative">
        <div className="flex justify-center">
          <span className="announcement-badge text-[11px] font-bold uppercase tracking-[0.25em] text-foreground">
            Tools & platforms we work with
          </span>
        </div>

        <div className="relative mx-auto mt-12 aspect-square w-full max-w-[640px]">
          {/* orbit guides */}
          <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50" />
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)' }}
          />

          <Ring brands={innerBrands} radius={172} size={56} duration={44} onSelect={setSelected} selected={selected} />
          <Ring
            brands={outerBrands}
            radius={280}
            size={62}
            duration={64}
            reverse
            onSelect={setSelected}
            selected={selected}
          />

          {/* Center content */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 text-center">
            <AnimatePresence mode="wait">
              {selected ? (
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-auto"
                >
                  <h3 className="font-display text-2xl font-bold text-foreground">{selected.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{selected.category}</p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{selected.tagline}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <X className="h-3.5 w-3.5" /> Profile
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-display text-4xl font-bold gradient-text">2.5B+</p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">Impressions</p>
                  <p className="mx-auto mt-3 max-w-[220px] text-sm text-muted-foreground">
                    Click on a platform logo to see how we use it in your growth stack.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandOrbit;
