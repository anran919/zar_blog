import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plugins from "./plugins";

export default defineUserConfig({
  base: "/zar_blog/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Anakin's blog",
      description: "张安然的博客记录",
    },
    "/en": {
      lang: "en-US",
      title: "Anakin's blog",
      description: "Anakin's blog",
    },
  },
  theme,
  plugins,
});
