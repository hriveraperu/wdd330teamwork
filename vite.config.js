import { resolve } from "path";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        product_list: resolve(__dirname, "src/product-list/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        success: resolve(__dirname, "src/checkout/success.html"),
        order: resolve(__dirname, "src/orders/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        header: resolve(__dirname, "src/public/partials/header.html"),
        footer: resolve(__dirname, "src/public/partials/footer.html"),
      },
    },
  },
});
