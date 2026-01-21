'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GLOBAL_CONSTANTS } from '@/src/utils/constants';

export default function SplashScreenDark() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem('seenSplash');
    if (seen) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('seenSplash', 'true');
      setShow(false);
    }, 2000); // 2 seconds;

    return () => clearTimeout(timer);
  }, [setShow]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f172a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">{GLOBAL_CONSTANTS.COMPANY_NAME}</h1>
            <p className="mt-2 text-sm text-slate-400">Digital Marketing Solutions</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
