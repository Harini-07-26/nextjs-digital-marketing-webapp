'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ScrollReveal({ children, width = '100%', delay = 0, direction = 'up' }: ScrollRevealProps) {
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <div style={{ position: 'relative', width, overflow: 'visible' }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            ...directions[direction]
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for high-end feel
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
