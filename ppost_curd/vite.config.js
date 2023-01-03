import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        post_detail: resolve(__dirname, "post-detail.html"),
        post_add_edit: resolve(__dirname, "add-edit-post.html"),
      },
    },
  },
});
