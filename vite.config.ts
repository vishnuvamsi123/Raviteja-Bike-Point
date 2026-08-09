import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-crossorigin',
      transformIndexHtml(html) {
        // Strip crossorigin attribute so Chrome/Edge on GitHub Pages never block module script loads
        return html.replace(/ crossorigin/g, '').replace(/crossorigin/g, '');
      }
    }
  ],
  base: '/Raviteja-Bike-Point/', // Explicit repository path for GitHub Pages
  build: {
    modulePreload: false,
    outDir: 'dist'
  },
  server: {
    port: 3000,
    host: true
  }
});
