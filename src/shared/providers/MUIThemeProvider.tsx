'use client';

import React from 'react';

import { ThemeContextProvider } from './ThemeContext';

export const MUIThemeProvider = ({ children }: React.PropsWithChildren) => (
  <ThemeContextProvider defaultMode="dark">
    {children}
  </ThemeContextProvider>
);
