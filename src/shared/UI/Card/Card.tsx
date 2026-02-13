import React from 'react';
import type { CardProps as MuiCardProps} from '@mui/material';
import { Card as MuiCard, useTheme } from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'children'> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <MuiCard
      elevation={0}
      sx={{
        borderRadius: 4,
        p: 4,
        boxShadow: isDark
          ? '0 2px 8px rgba(0, 0, 0, 0.3)'
          : '0 1px 3px rgba(0, 0, 0, 0.06)',
        border: '1px solid',
        borderColor: isDark
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0.08)',
        backgroundColor: 'background.paper',
        ...(hover && {
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: isDark
              ? '0 8px 24px rgba(0, 112, 243, 0.25)'
              : '0 8px 24px rgba(0, 0, 0, 0.12)',
            borderColor: 'secondary.main',
            transform: 'translateY(-2px)',
          },
        }),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
};
