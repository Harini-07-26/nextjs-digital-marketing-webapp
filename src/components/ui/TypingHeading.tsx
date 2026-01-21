'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

interface headingTextProps {
  heading: string;
}

export const TypingHeading: FC<headingTextProps> = ({ heading }) => {
  return (
    <motion.h1
      className="whitespace-pre-line text-5xl font-bold leading-tight md:text-7xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.06
          }
        }
      }}
    >
      {heading.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
