import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Served from the custom domain root (majidhealthcare.epabitra.com),
  // not a github.io/<repo> subpath — so base stays '/'.
  base: '/',
});
