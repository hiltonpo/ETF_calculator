// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@nuxt/ui"],

  // Nuxt UI 內建 Tailwind，不需額外設定
  // colorMode 預設支援 dark/light

  app: {
    baseURL: "/ETF_calculator/",
    head: {
      title: "0050 vs 0050正二 定期定額模擬",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "0050 與 0050正二定期定額投資模擬試算工具",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Space+Mono:wght@400;700&display=swap",
        },
      ],
    },
  },

  compatibilityDate: "2024-04-03",
});
