import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog",
  cleanUrls: true,
  lastUpdated: true,
  title: "Blog",
  description: "Powed by github pages && vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "个人博客",
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "MarkDown",
        link: "/markdown",
      },
      {
        text: "Github Actions",
        items: [
          {
            text: "部署React+vite工程",
            link: "/github_actions/deploy-react-with-vite",
          },
          {
            text: "部署vitepress工程",
            link: "/github_actions/deploy-vitepress",
          },
        ],
      },
      {
        text: "快捷键整理",
        items: [
          { text: "vscode", link: "/shortkeys/vscode" },
          { text: "fcpx", link: "/shortkeys/fcpx" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
