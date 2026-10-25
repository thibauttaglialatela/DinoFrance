import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/_variables.scss" as *;\n`,
        loadPaths: ['node_modules']
      }
    }
  },
  server: {
    proxy: {
      '/api-pbdb': {
        target: 'https://paleobiodb.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-pbdb/, '')
      }
    }
  }
})