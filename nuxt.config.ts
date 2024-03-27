import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['assets/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl',
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["nuxt-marquee", "nuxt-aos", "@nuxt/image", 'nuxt-gtag'],
  plugins: [],
});