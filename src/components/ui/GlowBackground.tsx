'use client';

import { motion } from 'framer-motion';

export default function GlowBackground() {
  return (
    <>
      <motion.div
        className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 opacity-20 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </>
  );
}
