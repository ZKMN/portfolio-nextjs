'use client';

import React, { createContext, useContext, useEffect, useMemo,useState } from 'react';
import { CssBaseline } from '@mui/material';
import type { PaletteMode } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

import { themes } from '@/shared/theme';

type ThemeMode = PaletteMode;

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeContextProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
  defaultMode = 'dark',
}) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  // Загружаем сохраненную тему из localStorage при монтировании
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme-mode') as ThemeMode | null;
      if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
        setMode(savedMode);
      }
    }
    setMounted(true);
  }, []);

  // Сохраняем тему в localStorage при изменении
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('theme-mode', mode);
      // Обновляем body класс для CSS переменных если нужно
      if (document.body) {
        document.body.style.backgroundColor = mode === 'dark' ? '#1a1a1a' : '#FAFAFA';
        document.body.style.color = mode === 'dark' ? '#e5e5e5' : '#000000';
      }
    }
  }, [mode, mounted]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  const theme = useMemo(() => themes[mode], [mode]);

  // Используем текущую тему или defaultMode до монтирования
  const currentTheme = mounted ? theme : themes[defaultMode];
  const currentMode = mounted ? mode : defaultMode;

  // Всегда предоставляем контекст с правильными значениями
  const value = useMemo(
    () => ({
      mode: currentMode,
      toggleTheme,
      setTheme,
    }),
    [currentMode, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
