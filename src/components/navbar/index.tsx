'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

const navLinks = [
  { id: 1, href: '/features', label: 'Features' },
  { id: 2, href: '/solutions', label: 'Solutions' },
  { id: 3, href: '/resources', label: 'Resources' },
  { id: 4, href: '/pricing', label: 'Pricing' }
];

const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 px-1 py-1 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/40">
            <Image src="/rocket.gif" alt="DIGI Logo" width={50} height={50} className="text-primary" unoptimized />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">DIGI</span>
        </Link>

        {/* Center Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link?.id} href={link?.href} className="nav-link">
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/40 border border-border/80 text-foreground hover:bg-secondary transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-yellow-400 fill-yellow-400/10" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600 fill-indigo-600/10" />
            )}
          </button>
          <a href="#" className="nav-link hidden sm:block">
            Log in
          </a>
          <button className="btn-primary-gradient text-sm">Get Started</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
