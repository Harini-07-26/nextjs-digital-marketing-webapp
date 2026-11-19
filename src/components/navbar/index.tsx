'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight, Search, Globe, Target, Megaphone, FileText, Code2 } from 'lucide-react';

interface ServiceMenuItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const serviceItems: ServiceMenuItem[] = [
  {
    title: 'SEO Services',
    href: '/seo-services',
    icon: Search
  },
  {
    title: 'GEO Services',
    href: '/services#services-catalog',
    icon: Globe
  },
  {
    title: 'PPC Advertising',
    href: '/services#services-catalog',
    icon: Target
  },
  {
    title: 'Social Media Marketing',
    href: '/services#services-catalog',
    icon: Megaphone
  },
  {
    title: 'Content Marketing',
    href: '/services#services-catalog',
    icon: FileText
  },
  {
    title: 'Web Development',
    href: '/services#services-catalog',
    icon: Code2
  }
];

const navLinks = [
  { id: 1, href: '/services', label: 'Our Services' },
  { id: 2, href: '/#why-growthvoice', label: 'Why GrowthVoice' },
  { id: 4, href: '/#industries', label: 'Industries' },
  { id: 5, href: '/#testimonials', label: 'Testimonials' },
  { id: 6, href: '/blog', label: 'Blog' },
  { id: 7, href: '/#contact', label: 'Contact Us' }
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [servicesOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        closeMobileMenu();
      }
    };

    if (servicesOpen || mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      if (mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [servicesOpen, mobileMenuOpen, closeMobileMenu]);

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
              setServicesOpen(false);
              closeMobileMenu();
            }}
          >
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
            {navLinks.map((link) => {
              if (link.id === 1) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    ref={servicesDropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href="/services"
                      onClick={() => {
                        setServicesOpen(false);
                        closeMobileMenu();
                      }}
                      className={`nav-link text-xs xl:text-sm whitespace-nowrap flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-2 rounded-lg ${
                        servicesOpen ? 'text-primary font-semibold' : ''
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-primary' : 'text-foreground/70'
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Options Menu */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-0 mt-3 w-[560px] xl:w-[620px] max-w-[calc(100vw-2rem)] rounded-2xl border border-gray-200/90 bg-white p-4 sm:p-5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] dark:border-border dark:bg-[#111622]/98 backdrop-blur-xl z-50"
                        >
                          <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
                            {serviceItems.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={() => setServicesOpen(false)}
                                  className="group flex items-center gap-3.5 rounded-xl border border-gray-200/90 bg-white p-3 sm:p-3.5 transition-all duration-200 hover:border-[#ea580c]/60 hover:bg-[#ffefe7]/30 hover:shadow-sm dark:border-border/60 dark:bg-card/80 dark:hover:border-primary/50 dark:hover:bg-secondary/60 cursor-pointer"
                                >
                                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-[#ffefe8] text-[#ea580c] transition-transform duration-200 group-hover:scale-105 group-hover:bg-[#ffe4d6] dark:bg-orange-500/15 dark:text-orange-400">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <span className="text-[13px] sm:text-[14px] xl:text-[15px] font-semibold text-gray-900 dark:text-foreground group-hover:text-[#ea580c] dark:group-hover:text-primary transition-colors leading-snug">
                                    {item.title}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="nav-link text-xs xl:text-sm whitespace-nowrap"
                  onClick={() => setServicesOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
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

            {/* Mobile Menu Toggle Button */}
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
                {navLinks.map((link) => {
                  if (link.id === 1) {
                    return (
                      <div
                        key={link.id}
                        className="flex flex-col rounded-xl border border-border/50 bg-card/40 overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-secondary cursor-pointer"
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                              mobileServicesOpen ? 'rotate-180 text-primary' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden border-t border-border/40 bg-background/50 px-3 py-3"
                            >
                              <Link
                                href="/services"
                                onClick={closeMobileMenu}
                                className="flex items-center justify-between rounded-lg bg-primary/10 border border-primary/20 px-3 py-2 text-xs font-semibold text-primary mb-2.5 transition-colors hover:bg-primary/20"
                              >
                                <span>Explore All Services Page</span>
                                <ChevronRight className="h-3.5 w-3.5" />
                              </Link>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {serviceItems.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.title}
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className="group flex items-center gap-3 rounded-lg border border-gray-200/90 bg-white p-2.5 transition-all hover:border-[#ea580c]/60 hover:bg-[#ffefe7]/30 dark:border-border/60 dark:bg-card dark:hover:border-primary/50"
                                    >
                                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ffefe8] text-[#ea580c] dark:bg-orange-500/15 dark:text-orange-400">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-foreground group-hover:text-[#ea580c] dark:group-hover:text-primary">
                                        {item.title}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.id}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between rounded-xl border border-border/50 bg-card/40 px-4 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-foreground transition-all hover:bg-secondary"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  );
                })}
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
