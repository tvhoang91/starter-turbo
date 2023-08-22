import { ComponentProps } from 'react';
import { SemanticColor } from '../../types/theme.type';
import type { CSSInterpolation } from '@emotion/serialize';

export type GetVariantStyle = (semanticColor: SemanticColor, props: ComponentProps<'button'>) => CSSInterpolation;

export const solidStyles: GetVariantStyle = (semanticColor, props) => {
  const styles: CSSInterpolation = {
    color: semanticColor['content'],
    backgroundColor: semanticColor['500'],
  };
  if (props.disabled) {
    styles.filter = 'grayscale(90%)';
  } else {
    styles['&:hover'] = {
      backgroundColor: semanticColor['600'],
    };
    styles['&:active'] = {
      backgroundColor: semanticColor['700'],
    };
  }
  return styles;
};

export const outlineStyles: GetVariantStyle = (semanticColor, props) => {
  const styles: CSSInterpolation = {
    color: semanticColor['500'],
    borderColor: semanticColor['500'],
    borderStyle: 'solid',
    borderWidth: '1px',
  };
  if (props.disabled) {
    styles.filter = 'grayscale(90%)';
  } else {
    styles['&:hover'] = {
      backgroundColor: semanticColor['50'],
    };
    styles['&:active'] = {
      backgroundColor: semanticColor['100'],
    };
  }
  return styles;
};

export const dashedStyles: GetVariantStyle = (semanticColor, props) => {
  return outlineStyles(semanticColor, props);
};

export const linkStyles: GetVariantStyle = (semanticColor, props) => {
  const styles: CSSInterpolation = {
    color: semanticColor['500'],
  };
  if (props.disabled) {
    styles.filter = 'grayscale(90%)';
  } else {
    styles['&:hover'] = {
      color: semanticColor['600'],
    };
    styles['&:active'] = {
      color: semanticColor['700'],
    };
  }
  return styles;
};
