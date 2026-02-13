import React from 'react';
import Link from 'next/link';

export const BackNavigation = (): React.ReactElement => (
  <div style={{
    position: 'fixed',
    top: 'var(--space-4)',
    left: 'var(--space-4)',
    zIndex: 100,
  }}
  >
    <Link
      href="/"
      className="glass-card"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: 'var(--space-2) var(--space-4)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        transition: 'all var(--duration-normal) var(--ease-out)',
      }}
    >
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
    </Link>
  </div>
);
