import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Brand = {
  name: string;
  short: string;
  followers: string;
  tagline: string;
  color: string;
};

const innerBrands: Brand[] = [
  {
    name: 'Avalanche',
    short: 'A',
    followers: '1.2M Followers',
    tagline: 'The fastest smart contracts platform',
    color: '0 84% 55%'
  },
  {
    name: 'Polygon',
    short: 'P',
    followers: '2.1M Followers',
    tagline: 'The value layer of the internet',
    color: '265 90% 60%'
  },
  {
    name: 'Ronin',
    short: 'R',
    followers: '270.7K Followers',
    tagline: 'Ronin is THE blockchain forged for gamers',
    color: '228 12% 22%'
  },
  {
    name: 'Rarible',
    short: 'R',
    followers: '410K Followers',
    tagline: 'Create, sell and collect digital items',
    color: '250 70% 55%'
  },
  {
    name: 'NEAR',
    short: 'N',
    followers: '1.5M Followers',
    tagline: 'Blockchain built for usability',
    color: '160 60% 35%'
  },
  {
    name: 'Chex',
    short: 'C',
    followers: '88K Followers',
    tagline: 'On-chain rewards for real players',
    color: '80 90% 55%'
  },
  {
    name: 'Tezos',
    short: 'T',
    followers: '620K Followers',
    tagline: 'Energy-efficient smart contracts',
    color: '215 90% 55%'
  },
  {
    name: 'Jade',
    short: 'J',
    followers: '154K Followers',
    tagline: 'Green finance for web3 natives',
    color: '150 80% 45%'
  }
];

const outerBrands: Brand[] = [
  {
    name: 'Axie Infinity',
    short: 'AX',
    followers: '980K Followers',
    tagline: "The world's most popular web3 game",
    color: '20 90% 55%'
  },
  {
    name: 'XGEN',
    short: 'XG',
    followers: '76K Followers',
    tagline: 'Next generation gaming guild',
    color: '100 80% 50%'
  },
  {
    name: 'Pirate Nation',
    short: 'PN',
    followers: '212K Followers',
    tagline: 'A fully on-chain RPG adventure',
    color: '200 80% 55%'
  },
  {
    name: 'Kraken',
    short: 'K',
    followers: '3.1M Followers',
    tagline: 'Trade crypto with confidence',
    color: '18 85% 55%'
  },
  {
    name: 'Wemix',
    short: 'W',
    followers: '540K Followers',
    tagline: 'Gaming-first blockchain ecosystem',
    color: '0 0% 90%'
  },
  {
    name: 'Nakamoto',
    short: 'NK',
    followers: '132K Followers',
    tagline: 'Culture-first crypto community',
    color: '330 80% 55%'
  },
  {
    name: 'Sui',
    short: 'S',
    followers: '1.8M Followers',
    tagline: 'A high performance L1 for builders',
    color: '195 90% 55%'
  },
  {
    name: 'Stellar',
    short: 'ST',
    followers: '760K Followers',
    tagline: 'Move money across borders instantly',
    color: '270 80% 65%'
  },
  {
    name: 'Pundi',
    short: 'PU',
    followers: '94K Followers',
    tagline: 'Payments for the on-chain economy',
    color: '175 80% 50%'
  },
  {
    name: 'XSwap',
    short: 'X',
    followers: '61K Followers',
    tagline: 'Cross-chain liquidity, simplified',
    color: '0 0% 15%'
  },
  {
    name: 'Honeycomb',
    short: 'H',
    followers: '48K Followers',
    tagline: 'Infrastructure for web3 games',
    color: '40 95% 55%'
  },
  {
    name: 'Pudgy',
    short: 'PG',
    followers: '1.1M Followers',
    tagline: 'Memes, merch and good vibes',
    color: '220 60% 70%'
  },
  {
    name: 'Bitstack',
    short: 'B',
    followers: '39K Followers',
    tagline: 'Stack sats automatically',
    color: '228 12% 25%'
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
                    : 'opacity-60 grayscale hover:scale-110 hover:opacity-100 hover:grayscale-0'
                }`}
                style={{
                  width: size,
                  height: size,
                  fontSize: size * 0.36,
                  background: `linear-gradient(140deg, hsl(${brand.color}), hsl(${brand.color} / 0.65))`,
                  boxShadow: isActive ? `0 0 26px hsl(${brand.color} / 0.7)` : '0 6px 18px hsl(228 40% 2% / 0.6)'
                }}
              >
                {brand.short}
              </span>
              <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
            Brands we've worked with
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
                  <h3 className="font-display text-3xl font-bold text-foreground">{selected.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted-foreground">{selected.followers}</p>
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">{selected.tagline}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      <X className="h-3.5 w-3.5" /> Profile
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      className="rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Close
                    </button>
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
                    Click on our clients logo to see what kind of brands we work with.
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
