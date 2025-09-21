import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set base to root path
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable sourcemaps for debugging
    minify: 'esbuild',
  },
  server: {
    port: 5173,
    open: true,
    strictPort: false, // Try another port if 5173 is in use
    host: '0.0.0.0' // Listen on all interfaces
  },
  preview: {
    port: 3000,
    open: true
  }
})
