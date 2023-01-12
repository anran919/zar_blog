import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "演示", icon: "discover", link: "/demo/" },
  {
    text: "Java",
    icon: "java",
    prefix: "/posts/java/",
    children: [
      { text: "Java设计模式", icon: "java", link: "Java设计模式" },
      { text: "文件操作的工具类", icon: "java", link: "文件操作的工具类" },
      { text: "设计模式-Builder模式", icon: "java", link: "设计模式-Builder模式" },
      { text: "设计模式-代理模式", icon: "java", link: "设计模式-代理模式" },
      { text: "设计模式-单例模式", icon: "java", link: "设计模式-单例模式" },
      { text: "设计模式-工厂方法模式", icon: "java", link: "设计模式-工厂方法模式" },
      { text: "设计模式-简单工厂模式", icon: "java", link: "设计模式-简单工厂模式" },
      { text: "设计模式-桥接模式", icon: "java", link: "设计模式-桥接模式" },
      { text: "设计模式-模版模式", icon: "java", link: "设计模式-模版模式" },
      { text: "设计模式-观察者模式", icon: "java", link: "设计模式-观察者模式" },
      { text: "读取XML中的配置参数", icon: "java", link: "读取XML中的配置参数" },
    ],
  },
  {
    text: "Python",
    icon: "python",
    prefix: "/posts/python/",
    children: [
      { text: "自学Python-Python基础", icon: "python", link: "自学Python-Python基础" },
      { text: "自学Python-Python基础二", icon: "python", link: "自学Python-Python基础二" },
      { text: "自学Python-IO编程", icon: "python", link: "自学Python-IO编程" },
      { text: "自学Python-函数", icon: "python", link: "自学Python-函数" },
      { text: "自学Python-函数式编程", icon: "python", link: "自学Python-函数式编程" },
      { text: "自学Python-常用内建模块", icon: "python", link: "自学Python-常用内建模块" },
      { text: "自学Python-模块", icon: "python", link: "自学Python-模块" },
      { text: "自学Python-正则表达式", icon: "python", link: "自学Python-正则表达式" },
      { text: "自学Python-线程和进程", icon: "python", link: "自学Python-线程和进程" },
      { text: "自学Python-面向对象编程", icon: "python", link: "自学Python-面向对象编程" },
      { text: "自学Python-面向对象高级编程", icon: "python", link: "自学Python-面向对象高级编程" },
      { text: "自学Python-高级特性", icon: "python", link: "自学Python-高级特性" },
    ],
  },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Android",
        icon: "android",
        prefix: "android/",
        children: [
          { text: "Android基础知识", icon: "android", link: "Android基础知识" },
          { text: "Android日常记录", icon: "android", link: "Android日常记录" },
        ],
      },
      {
        text: "JavaScript",
        icon: "js",
        prefix: "js/",
        children: [
          { text: "香蕉", icon: "edit", link: "1" },
        ],
      },
      {
        text: "Webpack",
        icon: "webpack",
        prefix: "webpack/",
        children: [
          { text: "webpack5的常用配置示例", icon: "webpack5", link: "webpack5_base" },
        ],
      },
      {
        text: "数据库",
        icon: "sql",
        prefix: "sql/",
        children: [
          { text: "MySQL学习记录", icon: "MySQL", link: "MySQL学习记录" }
        ],
      },
      {
        text: "其他",
        icon: "others",
        prefix: "others/",
        children: [
          { text: "Mac环境下使用docker部署可道云", icon: "docker", link: "Mac环境下使用docker部署可道云" }
        ],
      },
      { text: "怎样选择基金", icon: "edit", link: "怎样选择基金" },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
