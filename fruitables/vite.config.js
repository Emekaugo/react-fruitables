import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-fruitables/",

  plugins: [
    react(),

    // other plugins,
    // new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    // }),
  ],
  // server:{
  //   port:3000
  // }
});
