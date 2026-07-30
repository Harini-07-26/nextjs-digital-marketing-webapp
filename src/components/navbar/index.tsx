'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';
import AiDevelopmentMegaMenu from './ai-development-mega-menu';

const navLinks = [
  { id: 1, href: '/features', label: 'Features' },
  { id: 2, href: '/solutions', label: 'Solutions' },
  { id: 4, href: '/resources', label: 'Resources' },
  { id: 5, href: '/mobile-app', label: 'Mobile App' },
  { id: 6, href: '/security', label: 'Security' }
];

const Navbar = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const closeAiMenu = useCallback(() => setAiMenuOpen(false), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeAiMenu();
        closeMobileMenu();
      }
    };
    if (aiMenuOpen || mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [aiMenuOpen, mobileMenuOpen, closeAiMenu, closeMobileMenu]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  const toggleAiMenu = () => setAiMenuOpen((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 px-2 sm:px-4 py-1 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      >
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => {
              closeAiMenu();
              closeMobileMenu();
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-lg bg-transparent">
              <Image
                src="/logo.png"
                alt="Growth Voice Logo"
                width={200}
                height={200}
                className="text-primary"
                unoptimized
              />
            </div>
            {/* <span className="font-display text-lg font-bold tracking-tight text-foreground">Growth Voice</span> */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} className="nav-link" onClick={closeAiMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
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
            <button className="btn-primary-gradient text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3">Get Started</button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-xl bg-secondary/40 border border-border/80 text-foreground md:hidden flex items-center justify-center cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 right-0 top-16 z-50 border-b border-border bg-background/95 p-6 backdrop-blur-2xl md:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 px-4 py-3.5 text-base font-medium text-foreground transition-all hover:bg-secondary"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href="#"
                    onClick={closeMobileMenu}
                    className="w-full text-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                  >
                    Log in
                  </a>
                  <button onClick={closeMobileMenu} className="btn-primary-gradient w-full py-3 text-sm font-semibold">
                    Get Started Now
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
