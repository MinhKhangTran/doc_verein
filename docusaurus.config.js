// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Der Verein",
  tagline: "Dein lokaler Sportverein",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Alle Termine',
          blogSidebarCount: 'ALL',
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
        title: "Der Verein",

        items: [
          { to: "/blog", label: "Termine", position: "left" },
          { to: "/kontakt", label: "Kontakt", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Folge Uns",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com",
              },
              {
                label: "Facebook",
                href: "https://facebook.com",
              },
              {
                label: "TikTok",
                href: "https://tiktok.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Der Verein`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
