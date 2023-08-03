'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from '@/shared/theme';

export function MUIThemeProvider({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
