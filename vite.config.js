import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/NotesApp/",
  plugins: [react()],
});
// git subtree push --prefix dist origin gh-pages