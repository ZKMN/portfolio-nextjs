'use client';

import { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';

export const Background3DClient = () => {
  const [isReady, setIsReady] = useState(false);
  const [components, setComponents] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('@react-three/fiber'),
      import('@react-three/drei'),
      import('three'),
    ]).then(([r3f, drei, three]) => {
      setComponents({
        Canvas: r3f.Canvas,
        useFrame: r3f.useFrame,
        Points: drei.Points,
        PointMaterial: drei.PointMaterial,
        THREE: three,
      });
      setIsReady(true);
    });
  }, []);

  if (!isReady || !components) {
    return null;
  }

  const { Canvas, useFrame, Points, PointMaterial, THREE } = components;

  const FloatingPoints = () => {
    const ref = useRef<any>(null);

    const sphere = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      sphere[i * 3] = x;
      sphere[i * 3 + 1] = y;
      sphere[i * 3 + 2] = z;
    }

    useFrame((state: any) => {
      if (ref.current) {
        ref.current.rotation.x = state.clock.elapsedTime * 0.05;
        ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      }
    });

    return (
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0070F3"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    );
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.3,
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FloatingPoints />
      </Canvas>
    </Box>
  );
};

