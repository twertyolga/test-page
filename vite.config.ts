import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  server: {https: true},
  plugins: [basicSsl(),react()],
  base: "/test-page",
  mode,
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VERSION),
    __APP_ENVIRONMENT__: JSON.stringify(mode),
  },
}))
