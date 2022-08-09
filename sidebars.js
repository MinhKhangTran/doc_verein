/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    "intro",
    {
      type: "category",
      label: "Abteilungen",
      items: [
        "abteilung/fußball",
        "abteilung/basketball",
        "abteilung/taekwondo",
        "abteilung/powerlifting",
        "abteilung/gewichtheben",
        "abteilung/tennis",
      ],
    },
    "geschichte",
    {
      type: 'link',
      label: 'Gallerie', // The link label
      href: '/gallerie', // The internal path
    },
    {
      type: 'link',
      label: 'Kontakt', // The link label
      href: '/kontakt', // The internal path
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
