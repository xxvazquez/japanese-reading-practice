import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Served from https://xxvazquez.github.io/japanese-reading-practice/, not the domain root,
  // so every built asset path needs this prefix.
  base: "/japanese-reading-practice/",
});
