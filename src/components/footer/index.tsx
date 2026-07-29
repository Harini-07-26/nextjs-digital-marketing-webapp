import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <Image
                  src="/logo.png"
                  alt="Growth Voice Logo"
                  width={200}
                  height={200}
                  className="text-primary"
                  unoptimized
                />
              </Link>
              <p className="text-muted-foreground max-w-xs mb-6 text-sm leading-relaxed">
                Empowering businesses to grow online with data-driven digital marketing, creative strategy, and
                performance optimization.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mobile-app"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs text-center md:text-left">
              © {new Date().getFullYear()} Growth Voice Agency. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
