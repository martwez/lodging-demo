import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://martwez.github.io/lodging-demo/ (GitHub Pages project subpath).
export default defineConfig({
  base: '/lodging-demo/',
  plugins: [react(), tailwindcss()],
  // three.js is lazy-loaded after first paint, so its large chunk is expected.
  build: { chunkSizeWarningLimit: 1000 },
})
