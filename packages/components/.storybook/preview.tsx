import { Preview } from '@storybook/react';
import GlobalStyles from './../src/styles/GlobalStyles';
import { theme } from 'twin.macro';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: `${theme`colors.gray.900`}`,
        },
        {
          name: 'light',
          value: `${theme`colors.white`}`,
        },
        {
          name: 'gray',
          value: `${theme`colors.gray.200`}`,
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;
