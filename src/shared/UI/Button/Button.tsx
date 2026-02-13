import React from 'react';
import type { ButtonProps as MuiButtonProps} from '@mui/material';
import { Button as MuiButton, useTheme } from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const variantMap: Record<string, MuiButtonProps['variant']> = {
  primary: 'contained',
  secondary: 'contained',
  outline: 'outlined',
  ghost: 'text',
};

const sizeMap: Record<string, MuiButtonProps['size']> = {
  sm: 'small',
  md: 'medium',
  lg: 'large',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', size = 'md', sx, ...props }, ref) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const muiVariant = variantMap[variant] || 'contained';
  const muiSize = sizeMap[size] || 'medium';

  return (
      <MuiButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          fontWeight: 600,
          px: 4,
          py: 1.5,
          transition: 'all 0.2s ease',
          ...(variant === 'primary' && {
            bgcolor: 'secondary.main',
            color: 'white',
            boxShadow: 'none',
            '&:hover': {
              bgcolor: 'secondary.dark',
              boxShadow: `0 4px 12px rgba(0, 112, 243, ${isDark ? '0.4' : '0.3'})`,
              transform: 'translateY(-1px)',
            },
          }),
          ...(variant === 'secondary' && {
            bgcolor: 'secondary.main',
            color: 'white',
            '&:hover': {
              bgcolor: 'secondary.dark',
            },
          }),
          ...(variant === 'outline' && {
            borderWidth: 2,
            borderColor: isDark ? 'rgba(255, 255, 255, 0.3)' : 'secondary.main',
            color: isDark ? 'white' : 'secondary.main',
            bgcolor: 'transparent',
            '&:hover': {
              borderWidth: 2,
              borderColor: 'secondary.main',
              bgcolor: isDark ? 'rgba(0, 112, 243, 0.1)' : 'secondary.main',
              color: 'white',
            },
          }),
          ...(variant === 'ghost' && {
            color: isDark ? 'white' : 'text.primary',
            bgcolor: 'transparent',
            '&:hover': {
              bgcolor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'action.hover',
              color: isDark ? 'secondary.light' : 'secondary.main',
            },
          }),
          ...sx,
        }}
        {...props}
      />
  );
});

Button.displayName = 'Button';
