import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const navLinks = ['Features', 'Solutions', 'Resources', 'Pricing'];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 px-1 py-1 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">DIGI</span>
        </div>

        {/* Center Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
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
