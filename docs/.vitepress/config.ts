import { defineConfig } from "vitepress";

export default defineConfig({
  title: "loser-ui",
  description: "hello world",
  base: "",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
    ],
    sidebar: {
      "/utils/": [
        {
          text: '方法',
          items: [
            { text: "cookies", link: "/utils/cookies" },
          ]
        }
      ],
    },
  },
});