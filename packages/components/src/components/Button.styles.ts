import { SemanticColor } from '../../types/theme.type';
import type { CSSInterpolation } from '@emotion/serialize';

export function solidStyles(semanticColor: SemanticColor): CSSInterpolation {
  return {
    color: semanticColor['content'],
    backgroundColor: semanticColor['500'],
    '&:hover': {
      backgroundColor: semanticColor['600'],
    },
    '&:active': {
      backgroundColor: semanticColor['700'],
    },
  };
}

export function outlineStyles(semanticColor: SemanticColor): CSSInterpolation {
  return {
    color: semanticColor['500'],
    borderColor: semanticColor['500'],
    borderStyle: 'solid',
    borderWidth: '1px',
    '&:hover': {
      backgroundColor: semanticColor['50'],
    },
    '&:active': {
      backgroundColor: semanticColor['100'],
    },
  };
}

export function dashedStyles(semanticColor: SemanticColor): CSSInterpolation {
  return outlineStyles(semanticColor);
}

export function linkStyles(semanticColor: SemanticColor): CSSInterpolation {
  return {
    color: semanticColor['500'],
    '&:hover': {
      color: semanticColor['600'],
    },
    '&:active': {
      color: semanticColor['700'],
    },
  };
}
