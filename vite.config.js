import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/techtrends/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs',
    sourcemap: true
  }
})
