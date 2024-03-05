import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ['assets/main.css'],

  modules: ["nuxt-marquee"], // Voeg deze regel toe
});
