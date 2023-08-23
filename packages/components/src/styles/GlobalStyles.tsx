import { Global, css } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';
import { DEFAULT_VARS } from '@yayturbo/tailwind';

const styles = css({
  ':root': {
    ...DEFAULT_VARS,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={styles} />
  </>
);

export default GlobalStyles;
