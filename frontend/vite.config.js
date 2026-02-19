
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Ensure assets are served relative to this app structure
  // or use a root relative path if installed in bench
  base: '/assets/lms_frontend/frontend/',
  build: {
    // Build output to the public folder of the frappe app
    outDir: path.resolve(__dirname, '../lms_frontend/public/frontend'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  }
})
