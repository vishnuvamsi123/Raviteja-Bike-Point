import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path: loads assets relatively regardless of repository folder name or spaces in URL
  server: {
    port: 3000,
    host: true
  }
});
