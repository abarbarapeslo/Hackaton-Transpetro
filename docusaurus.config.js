import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'Hackathon Transpetro',
  tagline: 'Documentação Transpetro',
  url: 'https://abarbarapeslo.github.io',
  baseUrl: '/Hackathon-Transpetro/',
  organizationName: 'abarbarapeslo',
  projectName: 'Hackathon-Transpetro', // ← MUDEI "Hackaton" → "Hackathon"

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
      title: 'Hackathon Transpetro',
      items: [{ type: 'docSidebar', sidebarId: 'defaultSidebar', position: 'left', label: 'Docs' }],
    },
  },
};

export default config;
