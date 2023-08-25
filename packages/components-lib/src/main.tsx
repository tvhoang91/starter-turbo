import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { GlobalStyles, css } from 'twin.macro';
import { DEFAULT_VARS } from '@yayturbo/tailwind';

const styles = css({
  ':root': {
    ...DEFAULT_VARS,
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={styles} />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
);
