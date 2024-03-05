import { resolve } from "path";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);

export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"),
  },

  css: ['assets/main.css'],

  modules: ["nuxt-marquee"],

  plugins: [],

});
