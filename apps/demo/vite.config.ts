import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

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
        ],
      },
    }),
  ],

  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },
});
