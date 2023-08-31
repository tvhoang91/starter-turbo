import * as components from '@yayturbo/components';
import * as emotionReact from '@emotion/react';
import * as jsxRuntime from '@emotion/react/jsx-runtime';
import * as styled from '@emotion/styled';
import * as serialize from '@emotion/serialize';
import * as utils from '@emotion/utils';
import React from 'react';
import ReactDOM from 'react-dom';

declare global {
  interface Window {
    yayModules: {
      React: typeof React;
      ReactDOM: typeof ReactDOM;
      components: typeof components;

      emotion: {
        react: typeof emotionReact;
        jsxRuntime: typeof jsxRuntime;
        styled: typeof styled;
        serialize: typeof serialize;
        utils: typeof utils;
      };
    };
  }
}

window.yayModules = {
  React,
  ReactDOM,
  components,

  emotion: {
    react: emotionReact,
    jsxRuntime,
    styled,
    serialize,
    utils,
  },
};
