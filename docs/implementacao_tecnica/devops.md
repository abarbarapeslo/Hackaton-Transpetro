---
sidebar_position: 7
title: DevOps
---

import Admonition from '@theme/Admonition';

## DevOps no Nautilus

&emsp;O DevOps no **Nautilus** garante que os modelos de fouling, cálculos hidrodinâmicos e indicadores energéticos sejam entregues de forma confiável, automatizada e contínua. O foco é permitir que Carlos (COT), Rafael (Engenheiro Naval) e Ana (Eficiência Energética) recebam previsões, alertas e análises sem interrupções.

---

## Principais Objetivos

- Entregar novas versões do Nautilus rapidamente (modelos, APIs e dashboards).  
- Garantir estabilidade e conformidade com normas como a **NORMAM 401**.  
- Escalar processamento para múltiplos navios e viagens.  
- Automatizar segurança e versionamento da infraestrutura.

---

## Ferramentas-Chave

| Área | Tecnologia | Função |
|------|------------|--------|
| Versionamento | Git / GitHub | Controle do código e modelos do Nautilus |
| CI/CD | GitHub Actions | Deploy automático do backend, modelos e dashboard |
| Infraestrutura | Terraform | Criação padronizada do cluster, bancos e redes |
| Containerização | Docker | Empacotamento dos serviços do Nautilus |
| Orquestração | Kubernetes | Execução dos pipelines e APIs em produção |
| Observabilidade | Prometheus + Grafana | Métricas e alertas de funcionamento |

---

## Processos Essenciais

### 1. Versionamento
- Toda atualização é feita em branches curtas.  
- Representação do que está em produção `main`
- Pull Requests garantem revisão e rastreabilidade.

### 2. Infraestrutura como Código
- O ambiente do Nautilus (Kubernetes, bancos, filas) é criado por **Terraform**.  
- Facilita recriação, auditoria e padronização entre staging e produção.

### 3. CI/CD Simplificado
- Commit → Testes → Build Docker → Deploy automático.  
- Sem intervenção manual e com rollback rápido.

### 4. Observabilidade Básica
- Prometheus coleta métricas dos serviços.  
- Grafana exibe dashboards operacionais e ambientais.  
- Alertas notificam falhas e degradação do sistema.

---

## Resultado

O DevOps garante que o Nautilus opere com:

- previsões sempre atualizadas,  
- infraestrutura estável,  
- deploys rápidos,  
- monitoramento contínuo,  
- e suporte direto às operações da Transpetro.

---
