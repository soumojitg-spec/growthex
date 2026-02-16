import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ["actualistic-cynthia-revocably.ngrok-free.dev"],
  },
})
