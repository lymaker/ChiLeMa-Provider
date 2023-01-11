import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    Components({
      resolvers: [
        VantResolver(),
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 8001,
    proxy: {
      '/api': {
        target: 'http://localhost:8888/api',
        changeOrigin: true,
        rewrite: path => path.replaceAll('/api', '')
      }
    }
  }
});
