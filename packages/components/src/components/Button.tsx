import { forwardRef } from 'react';
import type { CSSInterpolation } from '@emotion/serialize';
import tw, { TwStyle } from 'twin.macro';
import { SemanticColor, SemanticColorName } from 'types/theme.type';
import { semanticPalette } from '@yayturbo/components/src/helpers/theme';
import { dashedStyles, linkStyles, outlineStyles, solidStyles } from './Button.styles';

type Variant = 'solid' | 'outline' | 'dashed' | 'link';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  color?: SemanticColorName;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'solid', color = 'primary', ...props }, forwardedRef) => {
  return (
    <button
      css={[tw`px-3 py-1 rounded shadow-sm`, semanticStyles[variant](semanticPalette[color]), variantStyles[variant]]}
      {...props}
      ref={forwardedRef}
    />
  );
});

const variantStyles: Record<Variant, TwStyle | false> = {
  solid: false,
  outline: false,
  dashed: tw`border-dashed`,
  link: tw`shadow-none`,
};
const semanticStyles: Record<Variant, (semanticColor: SemanticColor) => CSSInterpolation> = {
  solid: solidStyles,
  outline: outlineStyles,
  dashed: dashedStyles,
  link: linkStyles,
};

export default Button;
