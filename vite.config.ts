import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pl-builder',
  resolve: {
    alias: {
      widgets: '/src/widgets/*',
      features: '/src/features/*',
      enteties: '/src/enteties/*',
      shared: '/src/shared/*',
    }
  }
})
