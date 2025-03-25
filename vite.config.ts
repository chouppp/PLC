import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000, // 你可以根据需要修改端口号
    open: true, // 自动打开浏览器
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8090',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})