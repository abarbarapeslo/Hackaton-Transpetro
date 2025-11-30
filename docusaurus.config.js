import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Nautilus',
  tagline: 'Documentação Nautilus',
  url: 'https://abarbarapeslo.github.io',
  baseUrl: '/Hackaton-Transpetro',
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
          //sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        theme: {
          //customCss: require.resolve('docs/src/css/custom.css'),
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