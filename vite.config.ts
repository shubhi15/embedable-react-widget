import {defineConfig} from "vite";
import {resolve} from "path";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {} // Provide an empty object for `process.env`
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/widget.tsx"),
      name: "Widget",
      fileName: "widget",
      formats: ["umd"] // Ensures it can be loaded globally.
    },
    rollupOptions: {
      input: {
        // main: resolve(__dirname, "index.html"),
        widget: "./src/widget.tsx"
      },
      output: {
        entryFileNames: (assetInfo) => {
          return assetInfo.name === "widget" ? "[name].js" : "assets/[name].js";
        }
      }
    }
  },
  experimental: {
    renderBuiltUrl(filename: string) {
      return "http://localhost:4173/" + filename;
    }
  }
});