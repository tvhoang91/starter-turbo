import { join, dirname } from 'path';
import { StorybookConfig } from '@storybook/nextjs';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  // https://storybook.js.org/docs/react/configure/frameworks#which-frameworks-are-supported
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  core: {
    disableTelemetry: true,
  },
  // Twin recommends adding the babel config here as Next.js disables SWC when .babelrc is added to the root.
  babel: async (options) => {
    return {
      ...options,
      presets: [...(options.presets ?? []), '@emotion/babel-preset-css-prop'],
      plugins: [...(options.plugins ?? []), 'babel-plugin-twin', 'babel-plugin-macros'],
    };
  },
};
export default config;
