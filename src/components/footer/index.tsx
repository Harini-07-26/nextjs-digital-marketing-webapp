import { Rocket, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { ScrollReveal } from '../scroll-reveal';

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <div className="p-2 bg-primary rounded-lg group-hover:rotate-12 transition-transform">
                  <Rocket className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">DIGI</span>
              </Link>
              <p className="text-slate-400 max-w-xs mb-6">
                Empowering the next generation of digital finance with secure, fast, and transparent solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 glass rounded-full text-slate-400 hover:text-white transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 glass rounded-full text-slate-400 hover:text-white transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 glass rounded-full text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Mobile App
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} DIGI Financial Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 hover:text-white text-xs transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
