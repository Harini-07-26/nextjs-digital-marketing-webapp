'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  BookOpen,
  FileText,
  Video,
  Headphones,
  Download,
  GraduationCap,
  Newspaper,
  Wrench,
  TrendingUp,
  ArrowRight,
  Search,
  Calendar,
  Clock,
  Users,
  Sparkles,
  Play,
  Mic,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';
import Navbar from '@/src/components/navbar';
import { ScrollReveal } from '@/src/components/scroll-reveal';

const categories = [
  { icon: BookOpen, label: 'Guides', count: 48 },
  { icon: Video, label: 'Videos', count: 62 },
  { icon: Headphones, label: 'Podcasts', count: 24 },
  { icon: FileText, label: 'Reports', count: 31 },
  { icon: Wrench, label: 'Tools', count: 17 },
  { icon: GraduationCap, label: 'Courses', count: 9 }
];

const featured = {
  tag: 'Featured Report',
  title: 'The 2026 State of Performance Marketing',
  desc: '180 pages of benchmarks, channel breakdowns, and CMO interviews across 2,400 brands. The definitive reference for growth teams planning next quarter.',
  meta: ['PDF · 180 pages', 'Updated Feb 2026', '12,400 downloads']
};

const articles = [
  {
    tag: 'Playbook',
    title: 'Building a creative testing framework that scales past $1M/mo ad spend',
    author: 'Priya Anand',
    read: '12 min read',
    icon: Target
  },
  {
    tag: 'Case Study',
    title: 'How Loam DTC hit 5.2x ROAS by rebuilding their post-purchase flow',
    author: 'Marcus Vale',
    read: '8 min read',
    icon: TrendingUp
  },
  {
    tag: 'Analysis',
    title: 'The end of last-click: attribution models for the AI search era',
    author: 'Elena Ortiz',
    read: '15 min read',
    icon: BarChart3
  },
  {
    tag: 'Guide',
    title: 'SEO topical authority in 2026: from keywords to knowledge graphs',
    author: 'Sam Whitfield',
    read: '18 min read',
    icon: Search
  }
];

const tools = [
  { icon: BarChart3, name: 'ROAS Calculator', desc: 'Model blended ROAS across channels with custom margin inputs.' },
  {
    icon: Target,
    name: 'Audience Sizer',
    desc: 'Estimate reachable audiences on Meta, TikTok, and Google in seconds.'
  },
  { icon: TrendingUp, name: 'LTV Forecaster', desc: 'Predict 12-month cohort LTV from your first 90 days of orders.' },
  {
    icon: Zap,
    name: 'Creative Brief Generator',
    desc: 'Turn a product URL into a full brand-safe creative brief with AI.'
  }
];

const podcasts = [
  { ep: 'Ep. 47', title: 'Rethinking full-funnel with the CMO of Notion', host: 'Sasha Reeve', len: '42 min' },
  { ep: 'Ep. 46', title: 'Why creator content beats studio ads on TikTok', host: 'Devon Park', len: '38 min' },
  { ep: 'Ep. 45', title: "Inside Klaviyo's 2026 email deliverability shift", host: 'Sasha Reeve', len: '51 min' }
];

const upcoming = [
  { date: 'Mar 12', title: 'Live workshop: AI creative ops for lean teams', type: 'Workshop', seats: '312 registered' },
  { date: 'Mar 21', title: 'Roundtable: CFO-approved marketing measurement', type: 'Roundtable', seats: '48 seats' },
  { date: 'Apr 04', title: 'Masterclass: Landing pages that convert cold traffic', type: 'Masterclass', seats: 'Open' }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO — search-forward library entry */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(700px circle at 15% 0%, hsl(var(--primary) / 0.28), transparent 60%), radial-gradient(500px circle at 85% 10%, hsl(var(--hero-gradient-end) / 0.22), transparent 60%)'
          }}
        />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="announcement-badge">
              <span className="glow-dot" /> The DIGI Library
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Resources for teams that <span className="gradient-text">grow with intent</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Playbooks, benchmarks, tools, and a live event calendar — everything our strategists use with clients,
              published for the community.
            </p>

            {/* Search bar */}
            <div className="mx-auto mt-9 flex max-w-xl items-center gap-2 rounded-2xl border border-border bg-card/70 p-2 backdrop-blur">
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  className="w-full bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground"
                  placeholder="Search 190+ guides, reports, and tools…"
                />
              </div>
              <button className="btn-primary-gradient text-sm py-2.5 px-5">Search</button>
            </div>
          </motion.div>

          {/* Category pills */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((c, i) => (
              <motion.button
                key={c.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.2)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15">
                  <c.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.label}</p>
                  <p className="text-xs text-muted-foreground">{c.count} items</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED REPORT — asymmetric split */}
      <section className="py-16">
        <div className="container">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    'radial-gradient(500px circle at 100% 0%, hsl(var(--hero-gradient-end) / 0.3), transparent 60%)'
                }}
              />
              <div className="relative grid gap-10 p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-14">
                <div>
                  <span className="announcement-badge">
                    <Sparkles className="h-4 w-4 text-primary" /> {featured.tag}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-bold text-foreground md:text-5xl">{featured.title}</h2>
                  <p className="mt-5 text-muted-foreground md:text-lg">{featured.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.meta.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button className="btn-primary-gradient text-sm inline-flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download report
                    </button>
                    <button className="btn-outline-dark text-sm">Preview chapters</button>
                  </div>
                </div>

                {/* Mock report cover */}
                <div className="relative mx-auto w-full max-w-sm">
                  <div className="rounded-[2rem] p-[2px] animated-border-wrapper-subtle">
                    <div className="rounded-[calc(2rem-2px)] bg-background p-8">
                      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
                        <span>DIGI</span>
                        <span>2026</span>
                      </div>
                      <div className="mt-10">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Annual Report</p>
                        <p className="mt-3 font-display text-2xl font-bold leading-tight text-foreground">
                          The State of Performance Marketing
                        </p>
                      </div>
                      <div className="mt-10 grid grid-cols-3 gap-3">
                        {[
                          { k: 'Brands', v: '2.4k' },
                          { k: 'Channels', v: '12' },
                          { k: 'Pages', v: '180' }
                        ].map((s) => (
                          <div key={s.k} className="rounded-lg border border-border bg-card/60 p-3 text-center">
                            <p className="font-display text-lg font-bold text-foreground">{s.v}</p>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--hero-gradient-end))]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LATEST ARTICLES — magazine list */}
      <section className="py-16">
        <div className="container">
          <div className="mb-10 flex items-end justify-between gap-6">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Latest from the <span className="gradient-text">blog</span>
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Deep dives, teardowns, and frameworks — written by the strategists actually running the accounts.
              </p>
            </ScrollReveal>
            <a href="#" className="hidden nav-link md:inline-flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4">
            {articles.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.05}>
                <a
                  href="#"
                  className="group flex flex-col gap-5 rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)_/_0.2)] md:flex-row md:items-center"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/15">
                    <a.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-primary">{a.tag}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {a.read}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground group-hover:text-primary md:text-xl">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">by {a.author}</p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary md:block" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FREE TOOLS — bento grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <ScrollReveal>
              <span className="announcement-badge">
                <Wrench className="h-4 w-4 text-primary" /> Free tools
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-foreground md:text-5xl">
                Calculators & <span className="gradient-text">generators</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Purpose-built utilities you can bookmark. No signup, no email wall.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-card/80 to-card/40 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-primary">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                      <t.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{t.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Open tool <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST + EVENTS — two column */}
      <section className="py-16">
        <div className="container grid gap-8 lg:grid-cols-2">
          {/* Podcast */}
          <ScrollReveal>
            <div className="h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <Mic className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">Growth in Public</p>
                  <p className="text-xs text-muted-foreground">Weekly podcast · 47 episodes</p>
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {podcasts.map((p) => (
                  <li
                    key={p.ep}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4 transition-all hover:border-primary"
                  >
                    <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                      <Play className="h-4 w-4 fill-current" />
                    </button>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-semibold text-primary">{p.ep}</span>
                        <span>·</span>
                        <span>{p.host}</span>
                      </div>
                      <p className="mt-0.5 truncate text-sm font-medium text-foreground">{p.title}</p>
                    </div>
                    <span className="hidden text-xs text-muted-foreground sm:inline">{p.len}</span>
                  </li>
                ))}
              </ul>

              <a href="#" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                All episodes <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Events */}
          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-foreground">Upcoming events</p>
                  <p className="text-xs text-muted-foreground">Live sessions with the DIGI team</p>
                </div>
              </div>

              <ul className="mt-7 space-y-3">
                {upcoming.map((e) => (
                  <li
                    key={e.title}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-4"
                  >
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-[hsl(var(--hero-gradient-end)/0.25)] font-display">
                      <span className="text-[10px] uppercase tracking-widest text-primary">{e.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold leading-none text-foreground">{e.date.split(' ')[1]}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full border border-border px-2 py-0.5 text-primary">{e.type}</span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3 w-3" /> {e.seats}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-foreground">{e.title}</p>
                    </div>
                    <button className="hidden rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:border-primary hover:text-primary sm:inline">
                      RSVP
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border p-12 md:p-16">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: 'radial-gradient(600px circle at 50% 100%, hsl(var(--primary) / 0.3), transparent 70%)'
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div>
                <Newspaper className="h-9 w-9 text-primary" />
                <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">
                  The <span className="gradient-text">Monday Memo</span>
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  One email every Monday. Three tactical growth ideas, one benchmark chart, and the campaigns worth
                  stealing from this week. Join 42,000 marketers.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card/70 p-3 backdrop-blur sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-xl bg-background/60 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                />
                <button className="btn-primary-gradient text-sm inline-flex items-center justify-center gap-2">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="nav-link inline-flex items-center gap-1">
              <Zap className="h-4 w-4" /> Back to platform overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
