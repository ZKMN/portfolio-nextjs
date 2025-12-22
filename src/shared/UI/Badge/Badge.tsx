import React from 'react';
import { Chip, ChipProps, useTheme } from '@mui/material';

interface BadgeProps extends Omit<ChipProps, 'variant'> {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  sx,
  ...props
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          bgcolor: 'secondary.main',
          color: 'white',
        };
      case 'secondary':
        return {
          bgcolor: isDark ? 'rgba(36, 36, 36, 0.8)' : 'rgba(0, 0, 0, 0.08)',
          color: 'text.primary',
          border: '1px solid',
          borderColor: isDark 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(0, 0, 0, 0.12)',
        };
      case 'success':
        return {
          bgcolor: isDark 
            ? 'rgba(16, 185, 129, 0.2)' 
            : 'rgba(16, 185, 129, 0.1)',
          color: 'success.main',
          border: '1px solid',
          borderColor: isDark 
            ? 'rgba(16, 185, 129, 0.3)' 
            : 'rgba(16, 185, 129, 0.2)',
        };
      case 'outline':
        return {
          border: '1px solid',
          borderColor: isDark 
            ? 'rgba(255, 255, 255, 0.2)' 
            : 'rgba(0, 0, 0, 0.2)',
          bgcolor: 'transparent',
          color: 'text.primary',
        };
      default:
        return {
          bgcolor: isDark 
            ? 'rgba(255, 255, 255, 0.08)' 
            : 'rgba(0, 0, 0, 0.06)',
          color: 'text.primary',
        };
    }
  };

  return (
    <Chip
      label={children}
      size="small"
      sx={{
        borderRadius: 3,
        fontWeight: 500,
        ...getVariantStyles(),
        ...sx,
      }}
      {...props}
    />
  );
};

