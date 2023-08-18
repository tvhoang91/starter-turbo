import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  esbuild: {
    // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },

  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-twin',
            {
              exclude: ['\x00commonjsHelpers.js', 'node_modules'],
            },
          ],
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          ['@babel/plugin-transform-react-jsx', { pragma: '__cssprop' }, 'twin.macro'],
        ],
      },
    }),

    viteExternalsPlugin(
      {
        react: 'React',
        'react-dom': 'ReactDOM',
        '@yayturbo/components': 'yayComponents',
      },
      { disableInServe: true },
    ),
  ],

  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@type', replacement: path.resolve(__dirname, 'types') },
      { find: '@yayturbo', replacement: path.resolve(__dirname, '../../packages') },
    ],
  },
});
