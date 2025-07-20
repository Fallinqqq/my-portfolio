import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' && !process.env.NETLIFY ? '/my-portfolio/' : '/', // GitHub Pages only in production
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    port: 5173,
    open: true
  },
  preview: {
    port: 3000,
    open: true
  }
})
