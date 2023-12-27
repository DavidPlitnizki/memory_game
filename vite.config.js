import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
  },
  publicDir: './src/assets',
  plugins: [
    simpleHtmlPlugin({
      inject: {
        data: {
          title: import.meta.env === 'production' ? 'My site' : `My site Develop`,
        },
      },
    }),
    react({
        // Use React plugin in all *.jsx and *.tsx files
        jsxRuntime: 'classic',
        include: '**/*.{jsx,tsx}',
      }),
  ],
});