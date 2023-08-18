import colors from 'tailwindcss/colors';
import type { ThemeConfig } from 'tailwindcss/types/config';

const aliasColors: ThemeConfig['colors'] = {
  transparent: colors.transparent,
  current: colors.current,
  inherit: colors.inherit,

  white: colors.white,
  black: colors.black,

  gray: colors.gray,

  primary: { ...colors.blue, content: colors.white },
  secondary: { ...colors.cyan, content: colors.white },
  accent: { ...colors.fuchsia, content: colors.white },

  info: { ...colors.blue, content: colors.white },
  success: { ...colors.emerald, content: colors.white },
  warning: { ...colors.amber, content: colors.black },
  error: { ...colors.rose, content: colors.white },
};

export default aliasColors;
