'use client';

import React, { useCallback, useRef } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  src: string;
  title: string;
  index: number;
  isExpanded: boolean;
  onExpand: (index: number | null) => void;
}

const getIsTouchDevice = (): boolean =>
  typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

export const SkillCard: React.FC<SkillCardProps> = ({
  src,
  title,
  index,
  isExpanded,
  onExpand,
}) => {
  const isTouchRef = useRef(getIsTouchDevice());
  const isTouchDevice = isTouchRef.current;

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) onExpand(index);
  }, [isTouchDevice, onExpand, index]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice) onExpand(null);
  }, [isTouchDevice, onExpand]);

  const handleTap = useCallback(() => {
    if (isTouchDevice) {
      onExpand(isExpanded ? null : index);
    }
  }, [isTouchDevice, isExpanded, onExpand, index]);

  return (
    <motion.div
      className="skill-chip"
      variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            delay: index * 0.015,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTap}
      style={{
        position: 'relative',
        width: 35,
        height: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isExpanded ? 'var(--bg-glass-strong)' : 'transparent',
        border: `1px solid ${isExpanded ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: 8,
        cursor: 'pointer',
        // Removed heavy backdropFilter to fix scroll lag
        transition: 'background 0.15s ease, border-color 0.15s ease, transform 0.15s ease',
        transform: isExpanded ? 'scale(1.15)' : 'scale(1)',
        zIndex: isExpanded ? 20 : 1,
        willChange: 'transform, border-color, background',
      }}
    >
      <Image
        src={`/images/icons/${src}`}
        alt={title}
        width={18}
        height={18}
        style={{
          objectFit: 'contain',
          filter: [
            'nextdotjs', 'vercel', 'shadcnui', 'radixui',
            'framer', 'prisma', 'opentelemetry',
            'github', 'langfuse', 'zustand', 'anthropic',
          ].some(name => src.includes(name))
            ? `invert(1) brightness(${isExpanded ? 1.2 : 0.8})`
            : `brightness(${isExpanded ? 1.2 : 0.9})`,
          opacity: isExpanded ? 1 : 0.7,
          transition: 'all 0.15s ease',
        }}
      />

      {/* Floating tooltip — absolutely positioned wrapper for centering, motion.div for animation */}
      <AnimatePresence>
        {isExpanded && (
          <div
            key="tooltip-wrapper"
            style={{
              position: 'absolute',
              bottom: 'calc(100% + 8px)',
              left: '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 30,
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                padding: '4px 8px',
                background: 'rgba(15, 15, 20, 0.95)',
                border: '1px solid var(--border-accent)',
                borderRadius: 6,
                whiteSpace: 'nowrap',
                // Removed backdrop filter here as well, solid background is fine
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            >
              {/* Arrow */}
              <div
                style={{
                  position: 'absolute',
                  bottom: -4,
                  left: '50%',
                  transform: 'translateX(-50%) rotate(45deg)',
                  width: 8,
                  height: 8,
                  background: 'rgba(10, 10, 15, 0.92)',
                  borderRight: '1px solid var(--border-accent)',
                  borderBottom: '1px solid var(--border-accent)',
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--accent-light)',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                }}
              >
                {title}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
