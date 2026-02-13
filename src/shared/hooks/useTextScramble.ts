'use client';

import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';
const SCRAMBLE_SPEED_MS = 30;

type UseTextScrambleParams = {
  text: string;
  isInView: boolean;
};

export const useTextScramble = ({ text, isInView }: UseTextScrambleParams): string => {
  const [displayText, setDisplayText] = useState(text);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let frame = 0;
    const totalFrames = text.length + 10;

    const interval = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (i < frame - 3) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join(''));

      frame++;
      if (frame > totalFrames) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, SCRAMBLE_SPEED_MS);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return displayText;
};
