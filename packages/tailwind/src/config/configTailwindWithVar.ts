import palette from '@yayturbo/tailwind/src/colors/palette';
import { Color } from '@yayturbo/tailwind/types/color.type';
import type { CSSProperties } from 'react';
import { VAR_BLACK, VAR_WHITE } from './varColors';

function createColorVars(name: string, color: Color, content?: string): CSSProperties {
  const colorVars = {
    [`--btr-color-${name}-50`]: color['50'],
    [`--btr-color-${name}-100`]: color['100'],
    [`--btr-color-${name}-200`]: color['200'],
    [`--btr-color-${name}-300`]: color['300'],
    [`--btr-color-${name}-400`]: color['400'],
    [`--btr-color-${name}-500`]: color['500'],
    [`--btr-color-${name}-600`]: color['600'],
    [`--btr-color-${name}-700`]: color['700'],
    [`--btr-color-${name}-800`]: color['800'],
    [`--btr-color-${name}-900`]: color['900'],
    [`--btr-color-${name}-950`]: color['950'],
  };

  if (content) {
    colorVars[`--btr-color-${name}-content`] = content;
  }

  return colorVars;
}

export const DEFAULT_VARS = {
  ...createColorVars('gray', palette.gray),

  ...createColorVars('primary', palette.blue, VAR_WHITE),
  ...createColorVars('secondary', palette.cyan, VAR_WHITE),
  ...createColorVars('accent', palette.fuchsia, VAR_WHITE),

  ...createColorVars('info', palette.blue, VAR_WHITE),
  ...createColorVars('success', palette.emerald, VAR_WHITE),
  ...createColorVars('warning', palette.amber, VAR_BLACK),
  ...createColorVars('error', palette.rose, VAR_WHITE),
} as CSSProperties;

function configTailwindWithVar(colorsVars = DEFAULT_VARS) {
  Object.entries(colorsVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

export default configTailwindWithVar;
