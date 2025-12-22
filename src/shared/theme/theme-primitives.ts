import { PaletteMode, ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#e5e5e5' : '#000000',
        dark: mode === 'dark' ? '#ffffff' : '#333333',
        light: mode === 'dark' ? '#b3b3b3' : '#666666',
        contrastText: mode === 'dark' ? '#1a1a1a' : '#FFFFFF',
      },
      secondary: {
        main: '#0070F3',
        dark: '#0051CC',
        light: '#3399FF',
        contrastText: '#FFFFFF',
      },
      success: {
        main: '#10B981',
        light: mode === 'dark' ? '#34D399' : '#D1FAE5',
        dark: '#059669',
      },
      background: {
        default: mode === 'dark' ? '#1a1a1a' : '#FAFAFA',
        paper: mode === 'dark' ? '#242424' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#e5e5e5' : '#000000',
        secondary: mode === 'dark' ? '#a3a3a3' : '#666666',
        disabled: mode === 'dark' ? '#666666' : '#999999',
      },
      divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)',
      action: {
        hover: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
        selected: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)',
      },
    },
    typography: {
      fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01em',
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      h5: {
        fontSize: '1.125rem',
        fontWeight: 600,
        lineHeight: 1.5,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 600,
        lineHeight: 1.5,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.7,
        color: mode === 'dark' ? '#a3a3a3' : '#666666',
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.5,
        color: mode === 'dark' ? '#e5e5e5' : '#000000',
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 600,
        lineHeight: 1.5,
        letterSpacing: '0.01em',
        textTransform: 'uppercase',
        color: mode === 'dark' ? '#a3a3a3' : '#666666',
      },
    },
    shape: {
      borderRadius: 8,
    },
  };
};

