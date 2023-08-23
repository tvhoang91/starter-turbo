import { ComponentProps } from 'react';
import { SemanticColor } from '../../../types/theme.type';
import type { CSSInterpolation } from '@emotion/serialize';
import tw from 'twin.macro';

export type GetVariantStyle = (semanticColor: SemanticColor, props: ComponentProps<'button'>) => CSSInterpolation;

export const solidStyles: GetVariantStyle = (semanticColor) => {
  return {
    color: semanticColor['content'],
    backgroundColor: semanticColor['500'],
    '&:hover:enabled': {
      backgroundColor: semanticColor['600'],
    },
    '&:active:enabled': {
      backgroundColor: semanticColor['700'],
    },
    '&:disabled': tw`grayscale`,
  };
};

export const outlineStyles: GetVariantStyle = (semanticColor) => {
  return {
    ...tw`border-solid border`,
    color: semanticColor['500'],
    borderColor: semanticColor['500'],
    '&:hover:enabled': {
      backgroundColor: semanticColor['50'],
    },
    '&:active:enabled': {
      backgroundColor: semanticColor['100'],
    },
    '&:disabled': tw`grayscale`,
  };
};

export const dashedStyles: GetVariantStyle = (semanticColor, props) => {
  return outlineStyles(semanticColor, props);
};

export const linkStyles: GetVariantStyle = (semanticColor) => {
  return {
    color: semanticColor['500'],
    '&:hover:enabled': {
      color: semanticColor['600'],
    },
    '&:active:enabled': {
      color: semanticColor['700'],
    },
    '&:disabled': tw`grayscale`,
  };
};
