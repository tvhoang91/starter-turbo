import { HTMLAttributes, forwardRef } from 'react';

const Title = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>((props, ref) => {
  return <h1 {...props} ref={ref} />;
});

export default Title;
