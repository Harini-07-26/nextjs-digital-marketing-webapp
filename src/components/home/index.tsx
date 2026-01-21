'use client';

import { motion } from 'framer-motion';
import GlowBackground from '../ui/GlowBackground';
import ScrollIndicator from '../ui/ScrollIndicator';
import { GLOBAL_CONSTANTS } from '@/src/utils/constants';
import { TypingHeading } from '../ui/TypingHeading';

export default function HomePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0f172a]" />
      <GlowBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40">
        <TypingHeading heading={GLOBAL_CONSTANTS.COMPANY_NAME} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300"
        >
          {GLOBAL_CONSTANTS.COMPANY_DESCRIPTION}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 cursor-pointer rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black"
        >
          {GLOBAL_CONSTANTS.START_YOUR_AUDIT}
        </motion.button>
      </div>

      <ScrollIndicator />
    </section>
  );
}
