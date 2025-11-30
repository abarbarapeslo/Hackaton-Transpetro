import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Nautilus/__docusaurus/debug',
    component: ComponentCreator('/Nautilus/__docusaurus/debug', 'e18'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/config',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/config', 'a6b'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/content',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/content', '993'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/globalData',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/globalData', '771'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/metadata',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/metadata', 'd40'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/registry',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/registry', '7e8'),
    exact: true
  },
  {
    path: '/Nautilus/__docusaurus/debug/routes',
    component: ComponentCreator('/Nautilus/__docusaurus/debug/routes', '4ec'),
    exact: true
  },
  {
    path: '/Nautilus/docs',
    component: ComponentCreator('/Nautilus/docs', 'e7d'),
    routes: [
      {
        path: '/Nautilus/docs',
        component: ComponentCreator('/Nautilus/docs', 'b2b'),
        routes: [
          {
            path: '/Nautilus/docs',
            component: ComponentCreator('/Nautilus/docs', 'fbb'),
            routes: [
              {
                path: '/Nautilus/docs/',
                component: ComponentCreator('/Nautilus/docs/', 'c05'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/compreensão-do-usuário',
                component: ComponentCreator('/Nautilus/docs/category/compreensão-do-usuário', '8fb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/entendimento-do-problema',
                component: ComponentCreator('/Nautilus/docs/category/entendimento-do-problema', 'b44'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/implementação-técnica',
                component: ComponentCreator('/Nautilus/docs/category/implementação-técnica', 'e44'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/plano-de-negócio',
                component: ComponentCreator('/Nautilus/docs/category/plano-de-negócio', 'fdc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/propósito-da-solução',
                component: ComponentCreator('/Nautilus/docs/category/propósito-da-solução', '623'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/category/requirements',
                component: ComponentCreator('/Nautilus/docs/category/requirements', '539'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/compreensao_usuario/jornada_usuario',
                component: ComponentCreator('/Nautilus/docs/compreensao_usuario/jornada_usuario', '5c9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/compreensao_usuario/personas',
                component: ComponentCreator('/Nautilus/docs/compreensao_usuario/personas', 'ba1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/compreensao_usuario/publico_alvo',
                component: ComponentCreator('/Nautilus/docs/compreensao_usuario/publico_alvo', '787'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/entendimento_problema/analise_negocios',
                component: ComponentCreator('/Nautilus/docs/entendimento_problema/analise_negocios', '112'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/entendimento_problema/mapeamento_problema',
                component: ComponentCreator('/Nautilus/docs/entendimento_problema/mapeamento_problema', '5b7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/equipe',
                component: ComponentCreator('/Nautilus/docs/equipe', 'ee6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/back_end',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/back_end', '88f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/banco_de_dados',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/banco_de_dados', '3fb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/Blockchain',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/Blockchain', '6ee'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/devops',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/devops', '012'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/front_end',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/front_end', 'a9e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/infraestrutura',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/infraestrutura', '176'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/machine_learning',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/machine_learning', '7c4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/implementacao_tecnica/seguranca',
                component: ComponentCreator('/Nautilus/docs/implementacao_tecnica/seguranca', '7df'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/intro',
                component: ComponentCreator('/Nautilus/docs/intro', '9dd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/plano_negocio/analise_financeira',
                component: ComponentCreator('/Nautilus/docs/plano_negocio/analise_financeira', '1f4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/plano_negocio/analise_mercado',
                component: ComponentCreator('/Nautilus/docs/plano_negocio/analise_mercado', 'dd2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/plano_negocio/estrategia_distribuicao',
                component: ComponentCreator('/Nautilus/docs/plano_negocio/estrategia_distribuicao', 'fcf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/plano_negocio/metricas',
                component: ComponentCreator('/Nautilus/docs/plano_negocio/metricas', '45f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/plano_negocio/plano_monetizacao',
                component: ComponentCreator('/Nautilus/docs/plano_negocio/plano_monetizacao', 'f5d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/roadmap',
                component: ComponentCreator('/Nautilus/docs/roadmap', '33c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/arquitetura_solucao',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/arquitetura_solucao', '061'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/fluxo_dados',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/fluxo_dados', '214'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/identidade_visual',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/identidade_visual', '4fa'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/modelagem_dados',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/modelagem_dados', 'fdf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/proposta_valor',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/proposta_valor', '6ac'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/requisitos/requisitos_funcionais',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/requisitos/requisitos_funcionais', '47a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Nautilus/docs/solucao_problema/requisitos/requisitos_nao_funcionais',
                component: ComponentCreator('/Nautilus/docs/solucao_problema/requisitos/requisitos_nao_funcionais', '15d'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
