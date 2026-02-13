'use client';

import React, { useCallback, useEffect,useRef } from 'react';

const MAGNETIC_STRENGTH = 0.3;

type MagneticWrapProps = {
  children: React.ReactNode;
};

export const MagneticWrap = ({ children }: MagneticWrapProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isTouchRef = useRef(true);

  useEffect(() => {
    isTouchRef.current = window.matchMedia('(pointer: coarse)').matches;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el || isTouchRef.current) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * MAGNETIC_STRENGTH}px, ${y * MAGNETIC_STRENGTH}px)`;
    el.style.transition = 'transform 0.15s ease-out';
  }, []);

  const handleMouseLeave = useCallback((): void => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = '';
    el.style.transition = 'transform 0.3s ease-out';
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      {children}
    </div>
  );
};
