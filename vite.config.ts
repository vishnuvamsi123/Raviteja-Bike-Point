import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Pure relative paths (assets/...) for 100% universal compatibility on GitHub Pages
  server: {
    port: 3000,
    host: true
  }
});
