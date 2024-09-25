import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import singleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: 'system'
      },
    },
  },
  plugins: [
    vue(),
    singleSpa({
      type: 'mife',
      spaEntryPoints: 'src/main.js',
      projectId: '@micro/vite-vue'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
});
