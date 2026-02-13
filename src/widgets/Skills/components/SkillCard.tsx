'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillCardProps {
  src: string;
  title: string;
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ src, title, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15, scale: 0.95 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="glass-card glass-card--glow"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3)',
        padding: 'var(--space-5) var(--space-3)',
        width: '100%',
        cursor: 'default',
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          src={`/images/icons/${src}`}
          alt={title}
          width={40}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span style={{
        fontSize: 'var(--text-xs)',
        fontWeight: 600,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>
        {title}
      </span>
    </motion.div>
  );
};
