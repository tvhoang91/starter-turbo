import { forwardRef } from 'react';
import tw from 'twin.macro';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'outline';
  color?: 'primary' | 'secondary';
}

const styles = {
  solid: {
    primary: tw`text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700`,
    secondary: tw`text-white bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700`,
  },
  outline: {
    primary: tw`text-primary-500 border border-primary-500 hover:bg-primary-50 active:bg-primary-100`,
    secondary: tw`text-secondary-500 border border-secondary-500 hover:bg-secondary-50 active:bg-secondary-100`,
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'solid', color = 'primary', ...props }, forwardedRef) => {
  return <button css={[tw`px-3 py-1 rounded shadow-sm`, styles[variant][color]]} {...props} ref={forwardedRef} />;
});

export default Button;
