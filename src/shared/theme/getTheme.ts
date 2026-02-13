import type { PaletteMode, ThemeOptions } from '@mui/material/styles';

import { getComponentCustomizations } from './customizations/components';
import { getDesignTokens } from './theme-primitives';

export default function getTheme(mode: PaletteMode): ThemeOptions {
  return {
    ...getDesignTokens(mode),
    components: {
      ...getComponentCustomizations(mode),
    },
  };
}
