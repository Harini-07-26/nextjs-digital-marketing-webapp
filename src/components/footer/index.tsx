import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { ScrollReveal } from '../scroll-reveal';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-row align-center justify-center  mb-12">
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
