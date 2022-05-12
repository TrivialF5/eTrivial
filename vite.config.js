import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const path = require('path')
export default defineConfig({
  /* alias: {
    '@': path.resolve(__dirname, './src')
  }, */
  base: '/eTrivial/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0'
  },
})
