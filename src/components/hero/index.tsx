'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import Navbar from '../navbar';
import FloatingCard from '../floating-card';
import Image from 'next/image';
import TypingTextMotion from '../typing-text-motion';
import TypingHeadingOnScroll from '../typing-text-motion';

export default function Hero() {
  const stats = [
    { value: '$10B+', label: 'PROCESSED' },
    { value: '10M+', label: 'ACTIVE USERS' },
    { value: '0.01s', label: 'LATENCY' }
  ];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28 pb-20">
        {/* 🌌 Star Field */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="stars stars-sm" />
          <div className="stars stars-md" />
          <div className="stars stars-lg" />
        </div>

        {/* 🚀 Rocket Animation (Realistic Gravity Turn Trajectory) */}
        <motion.div
          initial={{ x: '-10vw', y: '45vh', rotate: -38, opacity: 0 }}
          animate={{
            x: ['-10vw', '-5vw', '15vw', '50vw', '105vw', '170vw'],
            y: ['45vh', '25vh', '-5vh', '-50vh', '-100vh', '-140vh'],
            rotate: [-38, -31, -11, 3, 14, 25],
            opacity: [0, 1, 1, 1, 1, 0]
          }}
          transition={{
            duration: 8,
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="pointer-events-none absolute bottom-0 -left-40 z-0"
        >
          <div className="relative">
            {/* 🔥 Flickering Thruster Flame */}
            <motion.div
              animate={{
                scaleY: [1, 1.3, 0.9, 1.2, 1],
                scaleX: [1, 1.1, 0.95, 1.05, 1],
                opacity: [0.8, 1, 0.75, 0.95, 0.8]
              }}
              transition={{
                duration: 0.15,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute -bottom-7 -left-7 -z-10 origin-top-right"
              style={{
                transform: 'rotate(625deg)'
              }}
            >
              {/* Outer hot flame */}
              {/* <div
                className="h-14 w-5 rounded-b-full bg-gradient-to-t from-red-600 via-orange-500 to-yellow-300 blur-[1.5px] filter drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                style={{ transform: 'rotate(925deg)' }}
              /> */}
              {/* Inner bright yellow flame */}
              <div className="absolute inset-x-1 top-0 h-9 rounded-b-full bg-yellow-300 blur-[0.5px]" />
              {/* Hot white engine core */}
              <div className="absolute inset-x-2 top-0 h-5 rounded-b-full bg-white opacity-95" />
            </motion.div>

            {/* 🌌 Engine Glow Aura */}
            <div className="absolute -bottom-5 -left-5 -z-20 h-12 w-12 rounded-full bg-orange-500/25 blur-md animate-pulse" />

            <Image src="/hero-rocket.png" alt="Moving-Rocket" width={110} height={110} priority />
          </div>
        </motion.div>

        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, hsl(265 90% 60%), transparent 70%)'
          }}
        />

        <div className="container relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Announcement */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="announcement-badge">
                  <span className="glow-dot" />
                  New: Crypto-native savings account launched
                </span>
              </motion.div>

              {/* Heading */}
              {/* <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
              >
                The Future of <span className="gradient-text">Digital Finance</span>
              </motion.h1> */}

              <TypingHeadingOnScroll textBefore="The Future of" textGradient="Digital Finance" />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
              >
                Experience the next generation of banking. Secure, lightning-fast, and global by design. Join 10M+ users
                shaping the future.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <div className="btn-primary-gradient inline-flex items-center gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </div>
                <button className="btn-outline-dark">View Demo</button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-14 flex flex-wrap gap-12"
              >
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Floating Cards */}
            <div className="relative hidden h-[400px] lg:block">
              <FloatingCard
                icon={Zap}
                label="Transaction Speed"
                value="Near Instant"
                iconColor="text-primary"
                delay={0}
                className="absolute top-16 left-0"
              />
              <FloatingCard
                icon={ShieldCheck}
                label="Security Level"
                value="Military Grade"
                iconColor="text-green-500"
                delay={0.2}
                className="absolute top-44 right-0"
              />
            </div>
          </div>
        </div>

        {/* Trusted bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="container mt-24"
        >
          <div className="border-t border-border pt-12">
            <p className="text-center text-lg font-bold tracking-[0.25em] text-muted-foreground uppercase">
              Trusted by industry leaders worldwide
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-10 sm:gap-16">
              {['Coinbase', 'Binance', 'Stripe', 'Revolut', 'Gemini'].map((name) => (
                <span key={name} className="font-display text-xl font-bold italic gradient-text sm:text-2xl">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
