import { defineConfig } from "vite"
import path  from 'path'
import pugPlugin from "vite-plugin-pug"

export default defineConfig({
  plugins: [pugPlugin()],
})