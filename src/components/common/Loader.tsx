'use client';

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative flex flex-col items-center">
        {/* Glow */}
        <motion.div
          className="absolute h-32 w-32 rounded-full bg-[#17b965]/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Loader ring */}
        <div className="relative h-24 w-24">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #17b965, #8B4DFF, transparent 75%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '2px'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* Inner circle */}
          <div className="absolute inset-[6px] flex items-center justify-center rounded-full border border-white/10 bg-background">
            <motion.div
              className="h-3 w-3 rounded-full bg-[#17b965]"
              animate={{
                scale: [1, 1.5, 1],
                boxShadow: ['0 0 0px #17b965', '0 0 18px #17b965', '0 0 0px #17b965']
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </div>

        {/* Brand */}
        <motion.div
          className="mt-6 text-sm font-semibold tracking-[0.3em]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-foreground">GROWTH</span>
          <span className="text-[#17b965]">VOICE</span>
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="mt-2 text-xs tracking-widest text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        >
          GROWING...
        </motion.p>

        {/* Progress bar */}
        <div className="mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#17b965] to-[#8B4DFF]"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
