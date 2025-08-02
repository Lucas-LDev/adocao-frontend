import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
     alias: {
      components: path.resolve(__dirname, "src/components"),
      layout: path.resolve(__dirname, "src/components/layout"),
      shared: path.resolve(__dirname, "src/components/shared"),
      ui: path.resolve(__dirname, "src/ui"),
      pages: path.resolve(__dirname, "src/pages"),
      assets: path.resolve(__dirname, "src/assets"),
      styles: path.resolve(__dirname, "src"),
    },
  },
})
