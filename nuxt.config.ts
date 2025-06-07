// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "nuxt-lucide-icons",
  ],
  app: {
    head: {
      title: "Giuseppe Cosenza - Freelance Developer",
      meta: [
        {
          name: "description",
          content:
            "Giuseppe Cosenza is a freelance developer specializing in modern web and mobile development. He is available for hire.",
        },
        {
          name: "keywords",
          content:
            "freelance developer, web development, mobile development, freelance, developer, giuseppe cosenza, giusscos, react developer, vue developer, ios developer, mvp development, mvp, business growth",
        },
        { name: "author", content: "Giuseppe Cosenza (giusscos)" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
      // script: [
      //   {
      //     src: "https://contra.com/static/embed/sdk.js",
      //     async: true,
      //   },
      // ],
    },
  },
  lucide: {
    namePrefix: "LIcon",
  },
});
