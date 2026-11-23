import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Same output folder as Create React App, so existing deploy settings keep working.
    outDir: "build",
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
