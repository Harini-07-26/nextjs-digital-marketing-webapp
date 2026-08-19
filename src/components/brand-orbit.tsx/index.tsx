import { useState, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
import AHrefsIcon from '../icons/AHrefs';
import { ScreamingFrog } from '../icons/ScreamingFrog';

type Brand = {
  name: string;
  short: string;
  category: string;
  tagline: string;
  color: string;
  activeColor?: string;
  /** React component icon */
  Icon?: ComponentType<{ className?: string }>;
  /** PNG/image src — use when no SVG icon is available */
  imgSrc?: string;
};

const innerBrands: Brand[] = [
  {
    name: 'Google',
    short: 'G',
    category: 'Search & Ads',
    tagline: 'Search, Ads and the whole growth ecosystem',
    color: '217 89% 61%', // #4285F4
    Icon: SiGoogle
  },
  {
    name: 'Google Analytics 4',
    short: 'GA4',
    category: 'Analytics',
    tagline: 'Event-based analytics and conversion tracking',
    color: '24 100% 50%', // #FF6100 (GA4 orange)
    Icon: SiGoogleanalytics
  },
  {
    name: 'Google Search Console',
    short: 'GSC',
    category: 'SEO',
    tagline: 'Index coverage, queries and search performance',
    color: '217 89% 61%', // #4285F4
    Icon: SiGooglesearchconsole
  },
  {
    name: 'Google Tag Manager',
    short: 'GTM',
    category: 'Tracking',
    tagline: 'Tag deployment without touching the codebase',
    color: '44 100% 50%', // #FBBC04
    Icon: SiGoogletagmanager
  },
  {
    name: 'Bing',
    short: 'B',
    category: 'Search',
    tagline: 'Microsoft search reach and Bing Webmaster Tools',
    color: '206 100% 40%', // #0078D4
    Icon: BingIcon
  },
  {
    name: 'Semrush',
    short: 'SR',
    category: 'SEO Suite',
    tagline: 'Keyword research and competitive intelligence',
    color: '21 100% 53%', // #FF642D
    Icon: SiSemrush
  },
  {
    name: 'Ahrefs',
    short: 'AH',
    category: 'SEO Suite',
    tagline: 'Backlink analysis and content gap discovery',
    color: '216 100% 47%', // #0073EF
    Icon: AHrefsIcon
  },
  {
    name: 'Screaming Frog',
    short: 'SF',
    category: 'Technical SEO',
    tagline: 'Deep site crawls and technical SEO audits',
    color: '84 61% 38%', // #539E2D (green frog),
    Icon: ScreamingFrog
    color: '84 61% 38%', // #539E2D (green frog),
    Icon: ScreamingFrog
  },
  {
    name: 'Microsoft Clarity',
    short: 'MC',
    category: 'Behaviour',
    tagline: 'Heatmaps and session recordings, free forever',
    color: '206 100% 40%', // #0078D4 (Microsoft blue)
    imgSrc: '/MSClarity.png'
  },
  {
    name: 'HubSpot',
    short: 'HS',
    category: 'CRM',
    tagline: 'CRM, lifecycle marketing and automation',
    color: '17 100% 46%', // #EB6123
    Icon: SiHubspot
  }
];

const outerBrands: Brand[] = [
  {
    name: 'Facebook',
    short: 'F',
    category: 'Social Ads',
    tagline: 'Meta ads at scale with pixel-perfect tracking',
    color: '221 44% 41%', // #1877F2
    Icon: SiFacebook
  },
  {
    name: 'Instagram',
    short: 'IG',
    category: 'Social',
    tagline: 'Creative-first campaigns and creator collabs',
    color: '330 68% 45%', // #C13584
    Icon: SiInstagram
  },
  {
    name: 'LinkedIn',
    short: 'IN',
    category: 'B2B',
    tagline: 'Account-based marketing for B2B pipelines',
    color: '201 100% 35%', // #0A66C2
    Icon: FaLinkedin
  },
  {
    name: 'X (Twitter)',
    short: 'X',
    category: 'Social',
    tagline: 'Real-time community building and reach',
    color: '0 0% 50%', // gray at rest
    activeColor: '0 0% 0%', // #000000 on hover/active
    Icon: SiX
  },
  {
    name: 'Pinterest',
    short: 'P',
    category: 'Discovery',
    tagline: 'Visual discovery that drives commerce intent',
    color: '0 76% 40%', // #E60023
    Icon: SiPinterest
  },
  {
    name: 'Reddit',
    short: 'R',
    category: 'Community',
    tagline: 'Niche communities and authentic conversations',
    color: '16 100% 50%', // #FF4500
    Icon: SiReddit
  },
  {
    name: 'Medium',
    short: 'M',
    category: 'Content',
    tagline: 'Long-form thought leadership distribution',
    color: '0 0% 50%', // gray at rest
    activeColor: '0 0% 0%', // #000000 on hover/active
    Icon: SiMedium
  },
  {
    name: 'Mailchimp',
    short: 'MC',
    category: 'Email',
    tagline: 'Lifecycle email campaigns and automations',
    color: '46 100% 45%', // #FFE01B (yellow-gold)
    Icon: SiMailchimp
  },
  {
    name: 'Canva',
    short: 'CV',
    category: 'Design',
    tagline: 'Fast, on-brand creative production',
    color: '168 100% 38%', // #00C4B4
    Icon: CanvaIcon
  },
  {
    name: 'ChatGPT',
    short: 'AI',
    category: 'AI',
    tagline: 'AI copy, ideation and workflow acceleration',
    color: '159 55% 38%', // #10A37F
    Icon: OpenAIIcon
  },
  {
    name: 'Gemini',
    short: 'GM',
    category: 'AI',
    tagline: 'Multimodal AI for research and creative',
    color: '217 89% 61%', // #4285F4
    Icon: SiGooglegemini
  },
  {
    name: 'Claude',
    short: 'CL',
    category: 'AI',
    tagline: 'Reasoning-heavy AI for strategy and analysis',
    color: '22 72% 62%', // #D97757
    Icon: SiClaude
  }
];

// ─── Brand logo button — tracks hover locally so we can drive inline styles ──
const BrandButton = ({
  brand,
  size,
  isActive,
  onSelect
}: {
  brand: Brand;
  size: number;
  isActive: boolean;
  onSelect: (b: Brand) => void;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = brand.Icon;

  const highlighted = isActive || hovered;
  const resolvedColor = highlighted && brand.activeColor ? brand.activeColor : brand.color;

  return (
    <button
      type="button"
      onClick={() => onSelect(brand)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group pointer-events-auto relative block"
      aria-label={brand.name}
    >
      <span
        style={{
          width: size,
          height: size,
          fontSize: size * (brand.short.length > 2 ? 0.26 : 0.34),
          background: highlighted
            ? `linear-gradient(140deg, hsl(${resolvedColor}), hsl(${resolvedColor} / 0.8))`
            : `linear-gradient(140deg, hsl(${brand.color} / 0.45), hsl(${brand.color} / 0.25))`,
          boxShadow: highlighted
            ? `0 0 28px hsl(${resolvedColor} / 0.75), 0 0 8px hsl(${resolvedColor} / 0.5)`
            : '0 4px 14px hsl(228 40% 2% / 0.5)',
          filter: highlighted ? 'none' : 'grayscale(1)',
          opacity: highlighted ? 1 : 0.65,
          transform: highlighted ? 'scale(1.12)' : 'scale(1)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        className="flex items-center justify-center rounded-full font-display font-bold text-white"
      >
        {brand.imgSrc ? (
          <Image
            src={brand.imgSrc}
            alt={brand.name}
            width={size}
            height={size}
            className="h-1/2 w-1/2 object-contain"
            unoptimized
          />
        ) : Icon ? (
          <Icon className="h-1/2 w-1/2" />
        ) : (
          brand.short
        )}
      </span>
      {/* Tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {brand.name}
      </span>
    </button>
  );
};

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
    className="pointer-events-none absolute inset-0"
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, ease: 'linear', repeat: Infinity }}
  >
    {brands.map((brand, i) => {
      const angle = (i / brands.length) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const isActive = selected?.name === brand.name;
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
            <BrandButton brand={brand} size={size} isActive={isActive} onSelect={onSelect} />
          </motion.div>
        </div>
      );
    })}
  </motion.div>
);

const BrandOrbit = () => {
  const [selected, setSelected] = useState<Brand | null>(null);
  // Track container width so all pixel values scale with it
  const [orbitSize, setOrbitSize] = useState(560);

  const setRef = (el: HTMLDivElement | null) => {
    if (!el) return;
    const update = () => setOrbitSize(Math.min(el.offsetWidth, 640));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
  };

  // Design baseline = 640px — everything scales proportionally from there
  const scale = orbitSize / 640;
  const innerRadius = Math.round(172 * scale);
  const outerRadius = Math.round(280 * scale);
  const innerSize = Math.max(28, Math.round(56 * scale));
  const outerSize = Math.max(30, Math.round(62 * scale));
  const centerW = Math.max(120, Math.round(200 * scale));

  return (
    <section className="relative overflow-hidden py-12 mt-12">
    <section className="relative overflow-hidden py-12 mt-12">
      <div className="container relative">
        <div className="flex justify-center">
          <span className="announcement-badge">
            <span className="glow-dot" /> Tools & platforms we work with
          <span className="announcement-badge">
            <span className="glow-dot" /> Tools & platforms we work with
          </span>
        </div>
        <h2 className="mt-3 justify-center items-center text-center font-display text-3xl font-bold leading-tight text-foreground md:text-5xl mb-4">
          Our <span className="gradient-text">Ecosystem</span>
        </h2>

        {/* aspect-square keeps height = width so the orbit never clips vertically */}
        <div ref={setRef} className="relative mx-auto mt-12 aspect-square w-full max-w-[640px]">
          {/* orbit guides */}
          <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/50" />
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[90px]"
            style={{ background: 'radial-gradient(circle, hsl(var(--primary)), transparent 70%)' }}
          />

          <Ring
            brands={innerBrands}
            radius={innerRadius}
            size={innerSize}
            duration={44}
            onSelect={setSelected}
            selected={selected}
          />
          <Ring
            brands={outerBrands}
            radius={outerRadius}
            size={outerSize}
            duration={64}
            reverse
            onSelect={setSelected}
            selected={selected}
          />

          {/* Center content — width and font sizes all scale with the orbit */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ width: centerW }}
          >
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
                  <h3
                    className="font-display font-bold gradient-text leading-tight"
                    style={{ fontSize: Math.max(12, Math.round(26 * scale)) }}
                  >
                    {selected.name}
                  </h3>
                  <p
                    className="mt-1 font-semibold text-foreground"
                    style={{ fontSize: Math.max(9, Math.round(12 * scale)) }}
                  >
                    {selected.category}
                  </p>
                  <p
                    className="mt-1 leading-snug text-muted-foreground"
                    style={{ fontSize: Math.max(8, Math.round(11 * scale)) }}
                  >
                    {selected.tagline}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="default"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="font-display font-bold gradient-text"
                    style={{ fontSize: Math.max(20, Math.round(38 * scale)) }}
                  >
                    2.5B+
                  </p>
                  <p
                    className="mt-1 font-display font-bold text-foreground"
                    style={{ fontSize: Math.max(13, Math.round(22 * scale)) }}
                  >
                    Impressions
                  </p>
                  <p
                    className="mx-auto mt-2 text-muted-foreground"
                    style={{
                      fontSize: Math.max(8, Math.round(11 * scale)),
                      maxWidth: Math.round(180 * scale)
                    }}
                  >
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
