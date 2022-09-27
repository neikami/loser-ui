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
            { text: "树型数据及扁平数据互相转化", link: "/utils/recursion" },
            { text: "防抖函数", link: "/utils/debounce" },
            { text: "节流函数", link: "/utils/throttle" },
          ]
        }
      ],
    },
  },
});