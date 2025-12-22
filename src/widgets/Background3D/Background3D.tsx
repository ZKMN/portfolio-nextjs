'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client component to avoid SSR issues
const Background3DClient = dynamic(
  () => import('./Background3DClient').then(mod => ({ default: mod.Background3DClient })),
  {
    ssr: false,
    loading: () => null,
  }
);

export const Background3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <Background3DClient />;
};
