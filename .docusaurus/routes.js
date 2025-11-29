import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug', 'b75'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/config',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/config', '580'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/content',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/content', 'dce'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/globalData',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/globalData', '53a'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/metadata',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/metadata', 'fbe'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/registry',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/registry', '70d'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/__docusaurus/debug/routes',
    component: ComponentCreator('/Hackathon-Transpetro/__docusaurus/debug/routes', '1f0'),
    exact: true
  },
  {
    path: '/Hackathon-Transpetro/docs',
    component: ComponentCreator('/Hackathon-Transpetro/docs', '70e'),
    routes: [
      {
        path: '/Hackathon-Transpetro/docs',
        component: ComponentCreator('/Hackathon-Transpetro/docs', 'a35'),
        routes: [
          {
            path: '/Hackathon-Transpetro/docs',
            component: ComponentCreator('/Hackathon-Transpetro/docs', '4a5'),
            routes: [
              {
                path: '/Hackathon-Transpetro/docs/',
                component: ComponentCreator('/Hackathon-Transpetro/docs/', 'e85'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/compreensão-do-usuário',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/compreensão-do-usuário', '161'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/entendimento-do-problema',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/entendimento-do-problema', '70a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/implementação-técnica',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/implementação-técnica', '305'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/plano-de-negócio',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/plano-de-negócio', 'a3d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/propósito-da-solução',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/propósito-da-solução', '8e4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/category/requirements',
                component: ComponentCreator('/Hackathon-Transpetro/docs/category/requirements', '228'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/compreensao_usuario/jornada_usuario',
                component: ComponentCreator('/Hackathon-Transpetro/docs/compreensao_usuario/jornada_usuario', '520'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/compreensao_usuario/personas',
                component: ComponentCreator('/Hackathon-Transpetro/docs/compreensao_usuario/personas', '0e6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/compreensao_usuario/publico_alvo',
                component: ComponentCreator('/Hackathon-Transpetro/docs/compreensao_usuario/publico_alvo', '847'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/entendimento_problema/analise_negocios',
                component: ComponentCreator('/Hackathon-Transpetro/docs/entendimento_problema/analise_negocios', 'edb'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/entendimento_problema/mapeamento_problema',
                component: ComponentCreator('/Hackathon-Transpetro/docs/entendimento_problema/mapeamento_problema', '453'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/equipe',
                component: ComponentCreator('/Hackathon-Transpetro/docs/equipe', '061'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/back_end',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/back_end', 'c66'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/banco_de_dados',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/banco_de_dados', '646'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/Blockchain',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/Blockchain', 'a06'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/devops',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/devops', '46d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/front_end',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/front_end', '5a2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/infraestrutura',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/infraestrutura', 'a92'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/machine_learning',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/machine_learning', 'ac6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/implementacao_tecnica/seguranca',
                component: ComponentCreator('/Hackathon-Transpetro/docs/implementacao_tecnica/seguranca', '383'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/intro',
                component: ComponentCreator('/Hackathon-Transpetro/docs/intro', '1e6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/plano_negocio/analise_financeira',
                component: ComponentCreator('/Hackathon-Transpetro/docs/plano_negocio/analise_financeira', 'a4e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/plano_negocio/analise_mercado',
                component: ComponentCreator('/Hackathon-Transpetro/docs/plano_negocio/analise_mercado', '24a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/plano_negocio/estrategia_distribuicao',
                component: ComponentCreator('/Hackathon-Transpetro/docs/plano_negocio/estrategia_distribuicao', '775'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/plano_negocio/metricas',
                component: ComponentCreator('/Hackathon-Transpetro/docs/plano_negocio/metricas', 'b94'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/plano_negocio/plano_monetizacao',
                component: ComponentCreator('/Hackathon-Transpetro/docs/plano_negocio/plano_monetizacao', '865'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/roadmap',
                component: ComponentCreator('/Hackathon-Transpetro/docs/roadmap', '246'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/arquitetura_solucao',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/arquitetura_solucao', '788'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/fluxo_dados',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/fluxo_dados', '054'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/identidade_visual',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/identidade_visual', '414'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/modelagem_dados',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/modelagem_dados', '1e2'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/proposta_valor',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/proposta_valor', '9e7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/requisitos/requisitos_funcionais',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/requisitos/requisitos_funcionais', '555'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackathon-Transpetro/docs/solucao_problema/requisitos/requisitos_nao_funcionais',
                component: ComponentCreator('/Hackathon-Transpetro/docs/solucao_problema/requisitos/requisitos_nao_funcionais', '535'),
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
