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
  onBrokenLinks: "throw",
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

        items: [{ to: "/kontakt", label: "Kontakt", position: "right" }],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Der Verein",
            items: [
              {
                label: "Start",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Folge Uns",
            items: [
              {
                label: "Instagram",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Facebook",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "TikTok",
                href: "https://twitter.com/docusaurus",
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
    }),
};

module.exports = config;
