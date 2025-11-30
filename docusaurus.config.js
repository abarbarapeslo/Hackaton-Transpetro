import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Nautilus',
  tagline: 'Documentação Nautilus',

  url: 'https://abarbarapeslo.github.io',
  baseUrl: '/Hackaton-Transpetro/',

  organizationName: 'abarbarapeslo',
  projectName: 'Hackaton-Transpetro',

  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          // customCss: './src/css/custom.css',
        },
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
