import { PaletteMode, ThemeOptions } from '@mui/material/styles';
import { circularProgressClasses } from '@mui/material';

export const getComponentCustomizations = (mode: PaletteMode): ThemeOptions['components'] => ({
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: '8px',
        fontWeight: 500,
        padding: '10px 24px',
      },
      outlined: {
        borderRadius: '8px',
        borderWidth: '1.5px',
        '&:hover': {
          borderWidth: '1.5px',
        },
      },
      contained: {
        borderRadius: '8px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },
  },
  MuiInput: {
    styleOverrides: {
      root: {
        '&:before': {
          borderBottomColor: mode === 'dark' ? '#404040' : '#E5E5E5',
        },
        '&:hover:before': {
          borderBottomColor: mode === 'dark' ? '#5a5a5a' : '#666666',
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: mode === 'dark' 
          ? '0 2px 8px rgba(0, 0, 0, 0.3)' 
          : '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          boxShadow: mode === 'dark'
            ? '0 8px 24px rgba(0, 0, 0, 0.5)'
            : '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
  MuiCircularProgress: {
    defaultProps: {
      value: 100,
      size: '10em',
    },
    styleOverrides: {
      root: {
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round',
          strokeWidth: 1.5,
          color: '#0070F3',
        },
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: mode === 'dark' ? '#1a1a1a' : '#FAFAFA',
      },
    },
  },
});


