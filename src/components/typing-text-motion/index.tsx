'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ITypingTextProps {
  textBefore: string;
  textGradient: string;
}

const charVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const TypingHeadingOnScroll = ({ textBefore, textGradient }: ITypingTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    margin: '-100px',
    once: false // 👈 allow replay
  });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // 👈 reset when out of view
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="mt-8 text-center">
      {/* Heading — h1 */}
      <motion.h1
        className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.2,
              staggerChildren: 0.05
            }
          }
        }}
      >
        {textBefore.split('').map((char, i) => (
          <motion.span key={`normal-${i}`} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subheading — p */}
      <motion.p
        className="gradient-text text-3xl sm:text-4xl font-semibold mt-2"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay: 0.4,
              staggerChildren: 0.04
            }
          }
        }}
      >
        {textGradient.split('').map((char, i) => (
          <motion.span key={`gradient-${i}`} variants={charVariants}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TypingHeadingOnScroll;
