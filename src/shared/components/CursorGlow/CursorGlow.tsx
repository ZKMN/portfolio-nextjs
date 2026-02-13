'use client';

import React, { useEffect, useRef } from 'react';

const GLOW_SIZE = 600;
const HALF_GLOW = GLOW_SIZE / 2;

export const CursorGlow = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent): void => {
      el.style.transform = `translate(${e.clientX - HALF_GLOW}px, ${e.clientY - HALF_GLOW}px)`;
      el.style.opacity = '1';
    };

    const handleMouseLeave = (): void => {
      el.style.opacity = '0';
    };

    const handleMouseEnter = (): void => {
      el.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${GLOW_SIZE}px`,
        height: `${GLOW_SIZE}px`,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0,
        transition: 'opacity 0.3s ease',
      }}
      aria-hidden="true"
    />
  );
};
