// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fusion 360 Documentation',
  tagline: 'My personal Fusion 360 guide and documentation',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://scotthowson.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fusion360-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'scotthowson', // Usually your GitHub org/user name.
  projectName: 'fusion360-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scotthowson/fusion360-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/scotthowson/fusion360-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fusion 360 Docs',
        logo: {
          alt: 'Fusion 360 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/guides/getting-started',
            label: 'Guides',
            position: 'left',
          },
          {
            to: '/docs/references/shortcuts',
            label: 'References',
            position: 'left',
          },
          {
            to: '/docs/projects/resin-printer-tools',
            label: 'Projects',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/scotthowson/fusion360-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Guides',
                to: '/docs/guides/getting-started',
              },
              {
                label: 'References',
                to: '/docs/references/shortcuts',
              },
              {
                label: 'Projects',
                to: '/docs/projects/resin-printer-tools',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Autodesk Fusion 360',
                href: 'https://www.autodesk.com/products/fusion-360',
              },
              {
                label: 'Fusion 360 Help',
                href: 'https://help.autodesk.com/view/fusion360',
              },
              {
                label: 'Fusion 360 Community',
                href: 'https://forums.autodesk.com/t5/fusion-360/ct-p/1234',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/scotthowson/fusion360-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scott Howson - Fusion 360 Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;