'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { cn } from '@/src/utils';

export type ScrollRevealVariant =
  | 'blur-up'
  | 'fade-up'
  | 'scale-up'
  | '3d-flip'
  | 'slide'
  | 'glow'
  | 'fade-scale'
  | 'slide-blur'
  | 'clip-glow'
  | 'fade';

export interface ScrollRevealProps {
  children: ReactNode;
  variant?: ScrollRevealVariant;
  width?: 'fit-content' | '100%' | 'auto';
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  blur?: boolean | string;
  scale?: number;
  rotate?: number;
  once?: boolean;
  threshold?: number;
  glowEffect?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({
  children,
  variant = 'blur-up',
  width = '100%',
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 35,
  blur = true,
  scale,
  rotate = 0,
  once = true,
  threshold = 0.15,
  glowEffect = false,
  className,
  style
}: ScrollRevealProps) {
  // Compute directional offsets
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getDirectionOffset();
  const blurValue = typeof blur === 'string' ? blur : blur ? '12px' : '0px';

  // Base variants based on effect preset
  const getVariants = (): Variants => {
    switch (variant) {
      case 'fade-scale':
        return {
          hidden: {
            opacity: 0,
            scale: scale ?? 0.9,
            ...offset
          },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0
          }
        };

      case 'slide-blur':
        return {
          hidden: {
            opacity: 0,
            filter: `blur(${blurValue})`,
            ...offset
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            x: 0,
            y: 0
          }
        };

      case 'clip-glow':
        return {
          hidden: {
            opacity: 0,
            scale: scale ?? 0.95,
            clipPath: 'inset(8% 8% 8% 8% round 24px)',
            filter: `blur(${blurValue})`
          },
          visible: {
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0% 0% 0% 0% round 24px)',
            filter: 'blur(0px)'
          }
        };

      case 'fade':
        return {
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1
          }
        };

      case 'blur-up':
        return {
          hidden: {
            opacity: 0,
            filter: blur ? `blur(${blurValue})` : 'blur(0px)',
            scale: scale ?? 0.94,
            rotate: rotate,
            ...offset
          },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            rotate: 0,
            x: 0,
            y: 0
          }
        };

      case '3d-flip':
        return {
          hidden: {
            opacity: 0,
            rotateX: 16,
            scale: scale ?? 0.92,
            filter: blur ? `blur(${blurValue})` : 'blur(0px)',
            ...offset
          },
          visible: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            filter: 'blur(0px)',
            x: 0,
            y: 0
          }
        };

      case 'scale-up':
        return {
          hidden: {
            opacity: 0,
            scale: scale ?? 0.85,
            filter: blur ? `blur(${blurValue})` : 'blur(0px)',
            ...offset
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            x: 0,
            y: 0
          }
        };

      case 'glow':
        return {
          hidden: {
            opacity: 0,
            scale: scale ?? 0.95,
            filter: blur ? `blur(${blurValue})` : 'blur(0px)',
            boxShadow: '0 0 0px rgba(124, 58, 237, 0)',
            ...offset
          },
          visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            boxShadow: [
              '0 0 0px rgba(124, 58, 237, 0)',
              '0 0 30px rgba(124, 58, 237, 0.35)',
              '0 0 10px rgba(124, 58, 237, 0.1)'
            ],
            x: 0,
            y: 0
          }
        };

      case 'slide':
      case 'fade-up':
      default:
        return {
          hidden: {
            opacity: 0,
            scale: scale ?? 1,
            ...offset
          },
          visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0
          }
        };
    }
  };

  const isClipGlow = variant === 'clip-glow' || glowEffect;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: width === 'fit-content' ? 'fit-content' : width,
    perspective: variant === '3d-flip' ? 1200 : undefined,
    ...style
  };

  return (
    <div style={containerStyle}>
      <motion.div
        className={cn(className)}
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: threshold, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {isClipGlow && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none z-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.7, 0.2] }}
            viewport={{ once }}
            transition={{ duration: 1.4, delay: delay + 0.1 }}
            style={{
              background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, transparent 75%)',
              filter: 'blur(25px)'
            }}
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ScrollRevealStagger
 * Wraps child elements and animates them sequentially in cascading fashion.
 */
export interface ScrollRevealStaggerProps {
  children: ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollRevealStagger({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className,
  style
}: ScrollRevealStaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealCounter
 * Scale-up reveal with animated counter number on scroll into view.
 */
export interface ScrollRevealCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function ScrollRevealCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className
}: ScrollRevealCounterProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out expo
      const current = Math.round(end * (1 - Math.pow(2, -10 * progress)));
      setCount(current >= end ? end : current);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(8px)' }}
        animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </motion.div>
    </div>
  );
}

/**
 * ScrollRevealText
 * Kinetic typography reveal effect - splits text into words or letters.
 */
export interface ScrollRevealTextProps {
  text: string;
  mode?: 'words' | 'letters';
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}

export function ScrollRevealText({
  text,
  mode = 'words',
  className,
  delay = 0,
  stagger = 0.03,
  as: Component = 'span'
}: ScrollRevealTextProps) {
  const items = mode === 'words' ? text.split(' ') : text.split('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay
      }
    }
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <Component className={cn('inline-block', className)}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
      >
        {items.map((item, idx) => (
          <motion.span key={idx} variants={itemVariants} className="inline-block">
            {item === ' ' ? '\u00A0' : item}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}
