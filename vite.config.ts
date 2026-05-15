import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"
import path from "node:path"
import { generateSitemap } from "./scripts/generate-sitemap"

export default defineConfig({
  plugins: [
    vue(),
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/settings.scss" }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  ssr: {
    noExternal: ["vuetify"]
  },
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished: () => generateSitemap()
  }
})
