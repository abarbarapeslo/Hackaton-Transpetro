import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Nautilus',
  tagline: 'Documentação Nautilus',
  url: 'https://abarbarapeslo.github.io',
  baseUrl: '/Nautilus/',
  organizationName: 'abarbarapeslo',
  projectName: 'Nautilus', // ← MUDEI "Hackaton" → "Hackathon"

  onBrokenLinks: 'throw',

  presets: [
    ['classic', {
      docs: {
        // sidebarPath: './sidebars.js',  ← COMENTE ESTA LINHA
      },
      theme: {
        //customCss: './src/css/custom.css'
      },
    }],
  ],



  themeConfig: {
    navbar: {
      title: 'Nautilus',
      items: [{ type: 'docSidebar', sidebarId: 'defaultSidebar', position: 'left', label: 'Docs' }],
    },
  },
};

export default config;
