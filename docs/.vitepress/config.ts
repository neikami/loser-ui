import { defineConfig } from "vitepress";

export default defineConfig({
  title: "loser-ui",
  description: "hello world",
  base: "",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/" },
      { text: "工具", link: "/utils/" },
    ],
    sidebar: {
      "/utils/": [
        {
          text: '方法',
          items: [
            { text: "说明", link: "/utils/" },
            { text: "缓存处理", link: "/utils/storage/storage" },
            { text: "树型数据及扁平数据互相转化", link: "/utils/recursion" },
          ]
        }
      ],
    },
  },
});