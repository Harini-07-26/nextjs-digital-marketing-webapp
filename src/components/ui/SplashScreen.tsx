'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem('seenSplash');

    if (hasSeenSplash) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('seenSplash', 'true');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [setShow]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="text-4xl font-bold" initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
            Your Brand
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
