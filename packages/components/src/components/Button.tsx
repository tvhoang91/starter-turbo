import { forwardRef } from 'react';
import tw, { TwStyle } from 'twin.macro';
import { SemanticColorName } from '../../types/theme.type';
import { semanticPalette } from '../helpers/theme';
import { GetVariantStyle, dashedStyles, linkStyles, outlineStyles, solidStyles } from './Button.styles';

type Variant = 'solid' | 'outline' | 'dashed' | 'link';
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  color?: SemanticColorName;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'solid', color = 'primary', ...props }, forwardedRef) => {
  return (
    <button
      css={[tw`px-3 py-1 rounded shadow-sm`, semanticStyles[variant](semanticPalette[color], props), variantStyles[variant]]}
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
const semanticStyles: Record<Variant, GetVariantStyle> = {
  solid: solidStyles,
  outline: outlineStyles,
  dashed: dashedStyles,
  link: linkStyles,
};

export default Button;
