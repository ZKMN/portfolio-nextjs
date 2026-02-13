'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

import { useTextScramble } from '@/shared/hooks/useTextScramble';

type ScrambleTitleProps = {
  text: string;
  className?: string;
};

export const ScrambleTitle = ({ text, className = 'section-title' }: ScrambleTitleProps): React.ReactElement => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true });
  const displayText = useTextScramble({ text, isInView });

  return (
    <h2 ref={ref} className={className}>
      {displayText}
    </h2>
  );
};
