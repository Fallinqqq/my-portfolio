import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/my-portfolio/', // Different base for Netlify vs GitHub Pages
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
