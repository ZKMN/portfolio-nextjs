import React from 'react';
import { Typography } from '@mui/material';

interface TitleProps {
  title: string;
  color?: 'primary' | 'secondary';
  variant?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const variantMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
} as const;

export const Title = ({
  title,
  color = 'primary',
  variant = 'h4',
  className,
}: TitleProps) => {
  return (
    <Typography
      variant={variantMap[variant]}
      color={color === 'primary' ? 'text.primary' : 'text.secondary'}
      className={className}
      sx={{
        fontWeight: 700,
        mb: 4,
        position: 'relative',
        paddingBottom: 2,
        fontSize: {
          xs: variant === 'h1' ? '2.25rem' : variant === 'h2' ? '2rem' : variant === 'h3' ? '1.75rem' : '1.5rem',
          md: variant === 'h1' ? '3rem' : variant === 'h2' ? '2.5rem' : variant === 'h3' ? '2rem' : '1.75rem',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: '3px',
          width: 60,
          bgcolor: 'secondary.main',
          borderRadius: '2px',
        },
      }}
    >
      {title}
    </Typography>
  );
};
