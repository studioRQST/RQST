import {gsap} from "gsap";
import {Flip} from "gsap/Flip";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {TextPlugin} from "gsap/TextPlugin";

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);

// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['assets/main.css'],
    app: {
        head: {
            htmlAttrs: {
                lang: 'nl',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
            ]
        },
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    modules: ["nuxt-marquee", "nuxt-aos", "@nuxt/image", // Add gtag configuration here
        ['nuxt-gtag', {id: 'G-B84WBEN7E5'}], '@nuxtjs/sitemap', // Add the sitemap module here
        'nuxt-jsonld', "@nuxtjs/i18n"],

    sitemap: {
        // Specify routes you want to exclude
        exclude: [
            '/project-een',
            '/project-twee',
            '/project-drie',
            '/404',
            '/succes-page-form',
        ],
    },


    // i18n: {
    //     // Module Options
    //     lazy: true,
    //     langDir: "locales",
    //     strategy: "prefix_except_default",
    //
    //     locales: [
    //         {
    //             code: "en-US",
    //             iso: "en-US",
    //             name: "English(US)",
    //             file: "en-US.json",
    //         },
    //     ],
    //
    //     defaultLocale: "nl-NL",
    //
    //
    // },
    //

    plugins: [],
});