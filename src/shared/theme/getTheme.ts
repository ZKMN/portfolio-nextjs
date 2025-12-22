import { PaletteMode, ThemeOptions } from '@mui/material/styles';
import { getDesignTokens } from './theme-primitives';
import { getComponentCustomizations } from './customizations/components';

export default function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...getComponentCustomizations(mode),
    },
  };
}

