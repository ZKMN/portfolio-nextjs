'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1500;
const STEPS = 40;

type UseCountUpParams = {
  target: number;
  isInView: boolean;
};

export const useCountUp = ({ target, isInView }: UseCountUpParams): number => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const increment = target / STEPS;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), target));
      if (step >= STEPS) clearInterval(interval);
    }, DURATION_MS / STEPS);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return count;
};
