// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'Portfolio' with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
});
