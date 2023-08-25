import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

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
    dts({ include: ['lib'] }),
  ],

  resolve: {
    alias: [{ find: '@src', replacement: resolve(__dirname, 'src') }],
  },

  build: {
    lib: {
      entry: { components: resolve(__dirname, 'lib/components.ts') },
      formats: ['es'],
      fileName: (format, name) => `${name}`,
    },

    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
