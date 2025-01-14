import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/jazzz-portfolio/", // Updated line
  plugins: [react()],
});
