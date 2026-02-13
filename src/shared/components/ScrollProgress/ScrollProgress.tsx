'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SPRING_CONFIG = { stiffness: 100, damping: 30, restDelta: 0.001 };

export const ScrollProgress = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, SPRING_CONFIG);

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--gradient-accent)',
        transformOrigin: '0%',
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
};
