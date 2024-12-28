import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  "base": "/Tenzies-Game-React",
  plugins: [react()],
})
