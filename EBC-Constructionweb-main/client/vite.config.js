import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    open: true,
    // Enable SPA fallback for React Router
    historyApiFallback: true,
    port: 5185
  }
});