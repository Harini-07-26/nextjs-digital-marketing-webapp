'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-10 flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <motion.span
        className="h-3 w-3 rounded-full bg-cyan-400"
        animate={{ x: [0, 80, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="h-px w-40 bg-slate-700" />
    </motion.div>
  );
}
