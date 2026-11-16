'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { id: 1, href: '/#our-services', label: 'Our Services' },
  { id: 2, href: '/#why-growthvoice', label: 'Why GrowthVoice' },
  { id: 4, href: '/#industries', label: 'Industries' },
  { id: 5, href: '/#testimonials', label: 'Testimonials' },
  { id: 6, href: '/blog', label: 'Blog' },
  { id: 7, href: '/#contact', label: 'Contact Us' }
];

const Navbar = () => {
  // const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      // setTheme(savedTheme);
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

  // const toggleTheme = () => {
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  //   document.documentElement.classList.toggle('light', newTheme === 'light');
  // };

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 px-2 py-1 backdrop-blur-xl sm:px-4"
      >
        <div className="relative flex min-h-[60px] items-center">
          {/* Logo */}
          <Link
            href="/"
            className="
        absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        flex items-center gap-2.5
        lg:static
        lg:translate-x-0
        lg:translate-y-0
      "
            onClick={() => {
              closeAiMenu();
              closeMobileMenu();
            }}
          >
            {/* Your existing logo */}
            <Image
              src="/logo.png"
              alt="GrowthVoice"
              width={190}
              height={50}
              priority
              className="h-auto w-[150px] sm:w-[170px] lg:w-[190px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} className="nav-link text-xs xl:text-sm whitespace-nowrap" onClick={closeAiMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="ml-auto flex items-center gap-2.5 sm:gap-3">
            {/* Desktop Get Started */}
            <Link
              href="/#contact"
              className="btn-primary-gradient hidden px-4 py-2 text-xs sm:inline-block sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3"
            >
              Get Started
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={toggleMobileMenu}
              className="flex cursor-pointer items-center justify-center rounded-xl border border-border/80 bg-secondary/40 p-2 sm:p-2.5 text-foreground lg:hidden"
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
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed left-0 right-0 top-16 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-border bg-background/95 p-5 sm:p-6 backdrop-blur-2xl lg:hidden shadow-2xl"
            >
              <nav className="flex flex-col gap-2.5 sm:gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-secondary"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                ))}
                {/* Mobile Get Started Link */}
                <Link
                  href="/#contact"
                  onClick={closeMobileMenu}
                  className="btn-primary-gradient mt-2 text-center text-sm font-semibold py-3 sm:hidden"
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
