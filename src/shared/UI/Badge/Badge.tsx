import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'outline';
  sx?: Record<string, unknown>;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => (
  <span className={className}>{children}</span>
);
