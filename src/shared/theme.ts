import { createTheme } from '@mui/material/styles';

import getTheme from './theme/getTheme';

const lightTheme = createTheme(getTheme('light'));
const darkTheme = createTheme(getTheme('dark'));

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

// Экспорт по умолчанию для обратной совместимости (темная тема)
export const theme = darkTheme;
