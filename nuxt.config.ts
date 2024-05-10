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
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: [
        "nuxt-marquee",
        "nuxt-aos",
        "@nuxt/image",
        ['nuxt-gtag', { id: 'G-B84WBEN7E5' }],
        '@nuxtjs/sitemap',
        'nuxt-jsonld',
        "@nuxtjs/i18n"
    ],
    sitemap: {
        exclude: [
            '/project-een',
            '/project-twee',
            '/project-drie',
            '/404',
            '/succes-page-form',
        ],
    },
    // i18n: {
    //     /* module options */
    //     lazy: true,
    //     langDir: "locales",
    //     strategy: "prefix_except_default",
    //     defaultLocale: 'nl',
    //     locales: [
    //         {
    //             code: "nl",
    //             file: "nl-NL.json",
    //         },
    //         {
    //             code: "en-US",
    //             file: "en-US.json",
    //         },
    //     ],
    // },
    plugins: [],
});