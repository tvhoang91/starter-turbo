import { forwardRef } from 'react';
import tw from 'twin.macro';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'solid' | 'outline';
  color?: 'blue' | 'emerald';
}

const styles = {
  solid: {
    blue: tw`text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700`,
    emerald: tw`text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700`,
  },
  outline: {
    blue: tw`text-blue-500 border border-blue-500 hover:bg-blue-50 active:bg-blue-100`,
    emerald: tw`text-emerald-500 border border-emerald-500 hover:bg-emerald-50 active:bg-emerald-100`,
  },
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'solid', color = 'blue', ...props }, forwardedRef) => {
  return <button css={[tw`px-3 py-1 rounded shadow-sm`, styles[variant][color]]} {...props} ref={forwardedRef} />;
});

export default Button;
