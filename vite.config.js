import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vistaar-web/', // Set this to the repository's subpath
  plugins: [react()],
})
