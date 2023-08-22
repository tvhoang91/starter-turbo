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
        ],
      },
    }),
    viteExternalsPlugin(
      {
        '@yayturbo/components': ['yayModules', 'components'],
        react: ['yayModules', 'React'],
        'react-dom': ['yayModules', 'ReactDOM'],
        '@emotion/react': ['yayModules', 'emotionReact'],
        '@emotion/styled': ['yayModules', 'emotionStyled'],
      },
      { disableInServe: true },
    ),
  ],

  resolve: {
    alias: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
  },

  build: {
    outDir: path.resolve('../loader', 'html/scripts/dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/main.tsx'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },

  server: {
    port: 3000,
    hmr: {
      port: 3000,
      host: 'localhost',
      protocol: 'ws',
    },
  },
});
