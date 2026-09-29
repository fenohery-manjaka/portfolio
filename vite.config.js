import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// base relative : le build fonctionne aussi bien sur GitHub Pages
// (https://<user>.github.io/portfolio/) que sur un domaine personnalisé.
export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
})
