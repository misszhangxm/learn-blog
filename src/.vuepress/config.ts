import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Miss.Ceel",
      description: "A blog demo for vuepress-theme-hope",
    },

    "/": {
      lang: "zh-CN",
      title: "Miss.Ceel",
      description: "博客",
    },
  },

  theme,

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        // {
        //   getter: (page) => page.frontmatter.category,
        //   formatter: "分类：$content",
        // },
        // {
        //   getter: (page) => page.frontmatter.tag,
        //   formatter: "标签：$content",
        // },
      ],
    })
  ],

  shouldPrefetch: false,
});
