import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/api-data-display/",
  // resolve: {
  //   alias: {
  //     "@": Path2D.resolve(__dirname, "./src"),
  //   },
  // },
});
