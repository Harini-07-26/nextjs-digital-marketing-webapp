'use client';

import { FC, useState } from 'react';
import {
  Search,
  Monitor,
  ShoppingCart,
  Play,
  Smartphone,
  Compass,
  MapPin,
  Rocket,
  Facebook,
  Instagram,
  MessageCircle,
  Twitter,
  Globe,
  Layout,
  Code,
  Server,
  Database,
  Palette,
  PenTool,
  Image,
  Layers,
  BarChart3,
  TrendingUp,
  FileText,
  Link,
  ArrowRight,
  Megaphone,
  Mail,
  Video,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { ScrollReveal } from '../scroll-reveal';

const categories = [
  {
    id: 'google-ads',
    label: 'Google Ads',
    icon: 'G',
    iconColor: 'text-red-500',
    iconBg: 'bg-primary',
    items: [
      { title: 'Search Ads', icon: Search, color: 'text-blue-400' },
      { title: 'Display Ads', icon: Monitor, color: 'text-green-400' },
      { title: 'Shopping Ads', icon: ShoppingCart, color: 'text-yellow-400' },
      { title: 'Video Ads', icon: Play, color: 'text-red-400' },
      { title: 'App Ads', icon: Smartphone, color: 'text-purple-400' },
      { title: 'Discovery Ads', icon: Compass, color: 'text-pink-400' },
      { title: 'Local Services Ads', icon: MapPin, color: 'text-orange-400' },
      { title: 'Performance Max', icon: Rocket, color: 'text-teal-400' }
    ]
  },
  {
    id: 'social-ads',
    label: 'Social Ads',
    icon: 'f',
    iconColor: 'text-white',
    iconBg: 'bg-blue-600',
    items: [
      { title: 'Facebook Ads', icon: Facebook, color: 'text-blue-500' },
      { title: 'Instagram Ads', icon: Instagram, color: 'text-pink-500' },
      { title: 'TikTok Ads', icon: Video, color: 'text-cyan-400' },
      { title: 'LinkedIn Ads', icon: Users, color: 'text-blue-400' },
      { title: 'Pinterest Ads', icon: Image, color: 'text-red-500' },
      { title: 'Snapchat Ads', icon: MessageCircle, color: 'text-yellow-400' },
      { title: 'Twitter/X Ads', icon: Twitter, color: 'text-gray-300' },
      { title: 'Reddit Ads', icon: Megaphone, color: 'text-orange-500' }
    ]
  },
  {
    id: 'web-dev',
    label: 'Web Development',
    icon: '🖥',
    iconColor: 'text-white',
    iconBg: 'bg-indigo-600',
    items: [
      { title: 'Landing Pages', icon: Layout, color: 'text-indigo-400' },
      { title: 'E-Commerce Sites', icon: ShoppingCart, color: 'text-green-400' },
      { title: 'Custom Web Apps', icon: Code, color: 'text-cyan-400' },
      { title: 'CMS Development', icon: Server, color: 'text-purple-400' },
      { title: 'API Integration', icon: Database, color: 'text-yellow-400' },
      { title: 'UI/UX Design', icon: Palette, color: 'text-pink-400' },
      { title: 'Performance Optimization', icon: Rocket, color: 'text-orange-400' },
      { title: 'Maintenance & Support', icon: Globe, color: 'text-teal-400' }
    ]
  },
  {
    id: 'seo',
    label: 'SEO Services',
    icon: '🔍',
    iconColor: 'text-white',
    iconBg: 'bg-green-600',
    items: [
      { title: 'On-Page SEO', icon: FileText, color: 'text-green-400' },
      { title: 'Off-Page SEO', icon: Link, color: 'text-blue-400' },
      { title: 'Technical SEO', icon: Code, color: 'text-cyan-400' },
      { title: 'Local SEO', icon: MapPin, color: 'text-orange-400' },
      { title: 'SEO Audits', icon: Search, color: 'text-yellow-400' },
      { title: 'Keyword Research', icon: BarChart3, color: 'text-purple-400' },
      { title: 'Content Strategy', icon: TrendingUp, color: 'text-pink-400' },
      { title: 'Link Building', icon: Globe, color: 'text-teal-400' }
    ]
  },
  {
    id: 'graphic-design',
    label: 'Graphic Design',
    icon: '✏',
    iconColor: 'text-white',
    iconBg: 'bg-pink-600',
    items: [
      { title: 'Brand Identity', icon: PenTool, color: 'text-pink-400' },
      { title: 'Social Media Graphics', icon: Image, color: 'text-purple-400' },
      { title: 'Print Design', icon: Layers, color: 'text-indigo-400' },
      { title: 'Packaging Design', icon: Palette, color: 'text-yellow-400' },
      { title: 'Motion Graphics', icon: Play, color: 'text-red-400' },
      { title: 'Infographics', icon: BarChart3, color: 'text-green-400' },
      { title: 'Email Templates', icon: Mail, color: 'text-cyan-400' },
      { title: 'Ad Creatives', icon: Monitor, color: 'text-orange-400' }
    ]
  }
];

const ServicesSection: FC = () => {
  const [activeTab, setActiveTab] = useState('google-ads');
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section className="py-24 bg-fuchsia-300/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-12">
            Comprehensive digital solutions to grow your business across every channel.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 cursor-pointer rounded-xl border text-sm font-semibold transition-all duration-300
                  ${
                    activeTab === cat.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                      : 'bg-card/60 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }
                `}
              >
                <span
                  className={`w-6 h-6 rounded-md ${cat.iconBg} flex items-center justify-center text-xs text-white font-bold`}
                >
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-gradient-to-br from-blue-500/10 via-pink-500/10 to-purple-500/10 p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-lg ${activeCategory.iconBg} flex items-center justify-center text-white font-bold`}
                >
                  {activeCategory.icon}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground">{activeCategory.label}</h3>
              </div>
              {/* <button className="flex items-center gap-1 px-4 py-2 rounded-lg border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                View All <ArrowRight className="h-4 w-4" />
              </button> */}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeCategory.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border bg-background/50 hover:border-primary/50 hover:bg-card transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">Learn more</p>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
