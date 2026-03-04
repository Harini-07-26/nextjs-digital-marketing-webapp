"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ITypingTextProps {
  textBefore: string;
  textGradient: string;
}

const TypingHeadingOnScroll = ({ textBefore, textGradient }: ITypingTextProps) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    margin: "-100px",
    once: false, // 👈 allow replay
  });


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // 👈 reset when out of view
    }
  }, [isInView, controls]);

  return (
    <motion.h1
      className="mt-8 font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.2,
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {/* Normal text */}
      {textBefore.split("").map((char, i) => (
        <motion.span
          key={`normal-${i}`}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          {char}
        </motion.span>
      ))}

      {/* Gradient text */}
      <span className="gradient-text px-3">
        {textGradient.split("").map((char, i) => (
          <motion.span
            key={`gradient-${i}`}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );
}

export default TypingHeadingOnScroll;