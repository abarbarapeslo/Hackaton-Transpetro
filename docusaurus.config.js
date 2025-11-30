import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Nautilus',
  tagline: 'Documentação Nautilus',

  // URL do seu GitHub Pages
  url: 'https://abarbarapeslo.github.io',

  // **CORREÇÃO IMPORTANTE — barra final obrigatória**
  baseUrl: '/Hackaton-Transpetro/',

  favicon: 'img/favicon-48.png',

  organizationName: 'abarbarapeslo',
  projectName: 'Hackaton-Transpetro',

  onBrokenLinks: 'throw',
  staticDirectories: ['static'],
  trailingSlash: false,

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // docs são a home
        },
        theme: {},
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Nautilus',
      logo: {
        alt: 'Logo Nautilus',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'defaultSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
  },
};

export default config;
