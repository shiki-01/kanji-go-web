import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import masterCSS from '@master/css.vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), masterCSS()],
})
