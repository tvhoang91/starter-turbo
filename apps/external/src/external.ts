import * as components from '@yayturbo/components';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as emotionReact from '@emotion/react';
import * as emotionStyled from '@emotion/styled';

declare global {
  interface Window {
    yayModules: {
      components: typeof components;
      React: typeof React;
      ReactDOM: typeof ReactDOM;
      emotionReact: typeof emotionReact;
      emotionStyled: typeof emotionStyled;
    };
  }
}

window.yayModules = {
  components,
  React,
  ReactDOM,
  emotionReact,
  emotionStyled,
};
