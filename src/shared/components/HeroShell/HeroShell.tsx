'use client';

import React from 'react';

import { NodeGraph } from '@/shared/components/NodeGraph';

export const HeroShell = ({ children }: React.PropsWithChildren): React.ReactElement => (
  <div style={{
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--gradient-hero)',
    overflow: 'hidden',
  }}
  >
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <NodeGraph />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
      />
    </div>

    {children}
  </div>
);
