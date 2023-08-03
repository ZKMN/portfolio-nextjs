import { createTheme } from '@mui/material';

const options = {
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: '16px',
        },
        contained: {
          borderRadius: '16px',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottomColor: '#FFFFFF',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    background: {
      paper: '#262626',
      default: '#FFFFFF',
    },
    text: {
      disabled: 'grey',
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    white: {
      main: '#FFFFFF',
    },
    black: {
      main: '#131316',
      contrastText: '#A5B2BB',
    },
  },
  typography: {
    body1: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 500,
    },
  },
};

export const theme = createTheme(options);
