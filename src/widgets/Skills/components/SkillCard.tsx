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
        background: isExpanded ? 'var(--bg-glass-strong)' : 'var(--bg-glass)',
        border: `1px solid ${isExpanded ? 'var(--border-accent)' : 'var(--border)'}`,
        borderRadius: 8,
        cursor: 'pointer',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: isExpanded
          ? '0 0 14px var(--accent-glow), 0 2px 8px rgba(0,0,0,0.3)'
          : 'none',
        transition: 'background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
        transform: isExpanded ? 'scale(1.15)' : 'scale(1)',
        zIndex: isExpanded ? 20 : 1,
      }}
    >
      <Image
        src={`/images/icons/${src}`}
        alt={title}
        width={18}
        height={18}
        style={{
          objectFit: 'contain',
          filter: isExpanded ? 'brightness(1.3)' : 'brightness(0.8)',
          transition: 'filter 0.2s ease',
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
                padding: '5px 10px',
                background: 'rgba(10, 10, 15, 0.92)',
                border: '1px solid var(--border-accent)',
                borderRadius: 6,
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.5), 0 0 10px var(--accent-glow)',
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
