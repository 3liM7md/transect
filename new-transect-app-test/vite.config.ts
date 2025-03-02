import { defineConfig } from 'vite'; 
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ Fix: Ensures correct asset loading in Netlify
  plugins: [
    react(),
    tsconfigPaths(),
    mkcert(),
  ],
  publicDir: './public',
  server: {
    host: true,
  },
  build: {
    outDir: 'dist', // ✅ Fix: Ensures Netlify correctly finds the built files
    emptyOutDir: true, // ✅ Fix: Clears old build files before creating new ones
  },
});
