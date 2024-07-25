import svgLoader from "vite-svg-loader";
import path from "path";

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Редкие книги в собраниях Берестейщины",
    },
  },
  devtools: { enabled: true },
  css: [
    "@/assets/styles/reset.scss",
    "@/assets/styles/common.scss",
    "@/assets/styles/scrollbar.scss",
  ],
  vite: {
    plugins: [svgLoader()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/component.scss" as *;',
        },
      },
    },
  },
  modules: ["nuxt-icons", "@pinia/nuxt"],
});
