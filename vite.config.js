import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(), // Removing this as we are using postcss for v3
  ],
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
  },
})
