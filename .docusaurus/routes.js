import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug', 'a16'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/config',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/config', '3e8'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/content',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/content', 'f34'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/globalData',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/globalData', '6ae'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/metadata',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/metadata', '5ca'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/registry',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/registry', '4b2'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/__docusaurus/debug/routes',
    component: ComponentCreator('/Hackaton-Transpetro/__docusaurus/debug/routes', '947'),
    exact: true
  },
  {
    path: '/Hackaton-Transpetro/docs',
    component: ComponentCreator('/Hackaton-Transpetro/docs', '0aa'),
    routes: [
      {
        path: '/Hackaton-Transpetro/docs',
        component: ComponentCreator('/Hackaton-Transpetro/docs', '4cc'),
        routes: [
          {
            path: '/Hackaton-Transpetro/docs',
            component: ComponentCreator('/Hackaton-Transpetro/docs', '634'),
            routes: [
              {
                path: '/Hackaton-Transpetro/docs',
                component: ComponentCreator('/Hackaton-Transpetro/docs', '3e7'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/compreensão-da-solução',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/compreensão-da-solução', '744'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/entendimento-do-problema',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/entendimento-do-problema', 'e5b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/implementação-técnica',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/implementação-técnica', 'f3a'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/plano-de-negócio',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/plano-de-negócio', '7d6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/propósito-da-solução',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/propósito-da-solução', '04f'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/category/requisitos',
                component: ComponentCreator('/Hackaton-Transpetro/docs/category/requisitos', 'bd6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/compreensao_usuario/jornada_solucao',
                component: ComponentCreator('/Hackaton-Transpetro/docs/compreensao_usuario/jornada_solucao', '8b6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/compreensao_usuario/personas',
                component: ComponentCreator('/Hackaton-Transpetro/docs/compreensao_usuario/personas', 'f70'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/compreensao_usuario/publico_alvo',
                component: ComponentCreator('/Hackaton-Transpetro/docs/compreensao_usuario/publico_alvo', 'eaf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/entendimento_problema/analise_negocios',
                component: ComponentCreator('/Hackaton-Transpetro/docs/entendimento_problema/analise_negocios', '525'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/entendimento_problema/mapeamento_problema',
                component: ComponentCreator('/Hackaton-Transpetro/docs/entendimento_problema/mapeamento_problema', 'f47'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/equipe',
                component: ComponentCreator('/Hackaton-Transpetro/docs/equipe', '0f6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/back_end',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/back_end', '4e8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/banco_de_dados',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/banco_de_dados', '0ae'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/devops',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/devops', 'ae9'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/infraestrutura',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/infraestrutura', 'f75'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/machine_learning',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/machine_learning', 'b84'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/implementacao_tecnica/seguranca',
                component: ComponentCreator('/Hackaton-Transpetro/docs/implementacao_tecnica/seguranca', '144'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/intro',
                component: ComponentCreator('/Hackaton-Transpetro/docs/intro', 'da0'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/plano_negocio/analise_financeira',
                component: ComponentCreator('/Hackaton-Transpetro/docs/plano_negocio/analise_financeira', '614'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/plano_negocio/analise_mercado',
                component: ComponentCreator('/Hackaton-Transpetro/docs/plano_negocio/analise_mercado', '390'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/plano_negocio/estrategia_distribuicao',
                component: ComponentCreator('/Hackaton-Transpetro/docs/plano_negocio/estrategia_distribuicao', '12c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/plano_negocio/metricas',
                component: ComponentCreator('/Hackaton-Transpetro/docs/plano_negocio/metricas', 'a55'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/plano_negocio/plano_monetizacao',
                component: ComponentCreator('/Hackaton-Transpetro/docs/plano_negocio/plano_monetizacao', '4c6'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/roadmap',
                component: ComponentCreator('/Hackaton-Transpetro/docs/roadmap', 'e59'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/arquitetura_solucao',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/arquitetura_solucao', 'a1e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/fluxo_dados',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/fluxo_dados', 'e3e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/identidade_visual',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/identidade_visual', '6b4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/modelagem_dados',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/modelagem_dados', 'b3d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/proposta_valor',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/proposta_valor', 'c36'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/requisitos/requisitos_funcionais',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/requisitos/requisitos_funcionais', 'c88'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/Hackaton-Transpetro/docs/solucao_problema/requisitos/requisitos_nao_funcionais',
                component: ComponentCreator('/Hackaton-Transpetro/docs/solucao_problema/requisitos/requisitos_nao_funcionais', 'e61'),
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
