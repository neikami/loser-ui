import { defineConfig } from "vitepress";

export default defineConfig({
  title: "loser-ui",
  description: "",
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
            { text: "正则", link: "/utils/reg/reg" },
            { text: "日期处理", link: "/utils/date/date" },
            { text: "树型数据及扁平数据互相转化", link: "/utils/recursion" },
            { text: "防抖函数", link: "/utils/debounce" },
            { text: "节流函数", link: "/utils/throttle" },
            { text: "获取一段时期内的天数", link: "/utils/daysOfPeriod" },
          ]
        }
      ],
      "/components/": [
        {
          text: '组件',
          items: [
            { text: "说明", link: "/components/" },
            { text: "按钮", link: "/components/button/button" },
          ]
        }
      ],
    },
  },
});