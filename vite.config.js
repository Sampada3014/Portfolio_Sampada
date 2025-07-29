import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio_Sampada/', // ✅ This tells Vite where your site is hosted
  plugins: [react()],
})
