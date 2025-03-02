// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crypto Tracker Docs',
  tagline: 'Documentation for the Crypto Tracker Dashboard',
  favicon: 'img/favicon.ico',

  // Set the production URL of your site here
  url: 'https://your-domain.com', // Replace with your production URL or leave as placeholder
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ishaanchauhan', // Your GitHub username or organization
  projectName: 'crypto-price-tracker', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Edit URL for "Edit this page" links in the docs
          editUrl:
            'https://github.com/ishaanchauhan/crypto-price-tracker/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Edit URL for "Edit this page" links in the blog
          editUrl:
            'https://github.com/ishaanchauhan/crypto-price-tracker/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card image
      image: 'img/crypto-social-card.jpg',
      navbar: {
        title: 'Crypto Tracker Docs',
        logo: {
          alt: 'Crypto Tracker Logo',
          src: 'img/logo.svg', // Place your logo image in the docs/static/img folder (or update the path accordingly)
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/ishaanchauhan/crypto-price-tracker',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Project Setup',
                to: '/docs/project-setup',
              },
              {
                label: 'API Integration',
                to: '/docs/api-integration',
              },
              {
                label: 'State Management',
                to: '/docs/state-management',
              },
              {
                label: 'Challenges',
                to: '/docs/challenges',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/crypto-tracker',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/crypto-tracker',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ishaanchauhan',
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
                href: 'https://github.com/ishaanchauhan/crypto-price-tracker',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crypto Tracker. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
