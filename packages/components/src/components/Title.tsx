import { HTMLAttributes, forwardRef } from 'react';

const Title = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>((props, ref) => {
  return <h1 tw="font-medium text-lg" {...props} ref={ref} />;
});

export default Title;
