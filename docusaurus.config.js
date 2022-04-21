// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const math = require("remark-math")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "wkevin",
  tagline: "语默动静体安然",
  url: "https://wkevin.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "wkevin", // Usually your GitHub org/user name.
  deploymentBranch: "gh-pages", //Defaults to 'gh-pages'
  projectName: "wkevin.github.io", // Usually your repo name.
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          rehypePlugins: [],
          remarkPlugins: [
            math,
            require("mdx-mermaid"),
            [
              require("@akebifiky/remark-simple-plantuml"),
              {
                baseUrl: "https://www.plantuml.com/plantuml/svg/",
              },
            ],
          ],
          // Please change this to your repo.
          // editUrl: "https://github.com/wkevin/wkevin.github.io",
        },
        blog: {
          showReadingTime: false,
          blogSidebarTitle: "个人随笔",
          blogSidebarCount: "ALL",
          postsPerPage: 5,
          blogListComponent: "@theme/BlogListPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} wkevin`,
          },
          rehypePlugins: [],
          remarkPlugins: [
            math,
            require("mdx-mermaid"),
            [
              require("@akebifiky/remark-simple-plantuml"),
              {
                baseUrl: "https://www.plantuml.com/plantuml/svg/",
              },
            ],
          ],
          // Please change this to your repo.
          // editUrl: "https://github.com/wkevin/wkevin.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "wKevin",
        logo: {
          alt: "wkevin Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "stack/index",
            position: "left",
            label: "技术栈",
            to: "/stack",
          },
          {
            type: "doc",
            docId: "project/index",
            position: "left",
            label: "业务场",
            to: "/project",
          },
          {
            label: "博客",
            to: "/blog",
            position: "left",
          },
          {
            label: "Tags",
            position: "right",
            href: "/blog/tags",
          },
          {
            label: "Feed",
            position: "right",
            href: "/blog/rss.xml",
          },
          {
            label: "Github",
            position: "right",
            href: "https://github.com/wkevin",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "My Community",
            items: [
              {
                label: "微博",
                href: "http://weibo.com/wkevin27",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/wkevin27",
              },
              {
                label: "Gitee",
                href: "https://gitee.com/wkevin",
              },
              {
                label: "CSDN",
                href: "https://blog.csdn.net/kevin881",
              },
            ],
          },
          {
            title: "常用链接",
            items: [
              {
                label: "天浪书屋",
                href: "https://www.tianlangbooks.com/",
              },
            ],
          },
          {
            title: "办公协作",
            items: [
              {
                label: "幕布",
                to: "https://mubu.com/app",
              },
              {
                label: "石墨文档",
                to: "https://shimo.im/",
              },
              {
                label: "飞书",
                to: "https://www.feishu.cn/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} wkevin, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

async function createConfig() {
  const katex = (await import("rehype-katex")).default
  config.presets[0][1].docs.rehypePlugins.push(katex)
  config.presets[0][1].blog.rehypePlugins.push(katex)
  return config
}
module.exports = createConfig
