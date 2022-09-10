import { defineConfig } from 'vite'
import SomePlugin from "VitePlugins/SomePlugin"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		SomePlugin(),
		react(),
	]
})
