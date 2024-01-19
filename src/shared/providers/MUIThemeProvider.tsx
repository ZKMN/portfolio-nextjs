'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material';

import { theme } from '@/shared/theme';

export const MUIThemeProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);
