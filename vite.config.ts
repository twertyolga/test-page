import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  plugins: [react()],
  base: "/test-page/",
  mode,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VERSION),
  },
}))
