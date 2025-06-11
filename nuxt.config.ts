// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Goback Drama Theater",
      meta: [
        {
          name: "description",
          content: "不加戏，怎么红！生活欠你的，话剧还给你！",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css",
        },
      ],
      // viewportfit:'cover',
    },
    baseURL: "/GoBackMemory/",
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  nitro: {
    output: {
      publicDir: ".output/GoBackMemory",
    },
  },
});
