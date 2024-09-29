// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width,initial-scale=1",
      title: "Goback Drama Club",
      meta: [
        {
          name: "description",
          content: "不加戏，怎么红！",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css",
        },
      ],
    },
    baseURL: "/GoBack/",
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  // 非常抽象，动态路由但凡不在nuxtlink里显示声明，那么就会导致SSR不会预渲染这些页面，进而导致直接访问这些路由会404
  // 移动端动态路由同理。
  generate: {
    routes: [
      // PC端成员页面
      "/member/fellow-1",
      "/member/fellow-2",
      "/member/fellow-3",
      "/member/fellow-4",
      "/member/fellow-5",
      "/member/fellow-6",
      "/member/fellow-7",
      "/member/fellow-8",
      "/member/fellow-9",
      // 移动端成员页面
      "/mobile/member/fellow-1",
      "/mobile/member/fellow-2",
      "/mobile/member/fellow-3",
      "/mobile/member/fellow-4",
      "/mobile/member/fellow-5",
      "/mobile/member/fellow-6",
      "/mobile/member/fellow-7",
      "/mobile/member/fellow-8",
      "/mobile/member/fellow-9",
    ],
  },
});
