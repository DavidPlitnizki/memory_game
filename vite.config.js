import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import simpleHtmlPlugin from 'vite-plugin-simple-html';

export default defineConfig({
  root: 'src',
  build: {
    // Relative to the root
    outDir: '../dist',
    ollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
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