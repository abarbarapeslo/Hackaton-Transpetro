---
title: "Roadmap"
sidebar_label: "Roadmap"
sidebar_position: 7
---

# Roadmap da Solução Nautilus

## Fase 1: Validação e MVP Operacional (Meses 1–12)

&emsp;Nesta fase, o objetivo é **validar o modelo preditivo**, comprovar a **viabilidade operacional** e entregar um **MVP funcional** capaz de gerar insights reais sobre bioincrustação para a frota da Transpetro.

| Foco Estratégico | Prioridade Técnica (Microserviços / Pipelines) | Entregas e Métricas |
| :--- | :--- | :--- |
| **Unificação dos Dados Operacionais** | **Vessel Data Service:** Ingestão e normalização de dados AIS, Consumo, IWS e ambiente (Copernicus/NOAA). | **Dataset Integrado:** Base única validada com +90% de completude. |
| **Primeiro Modelo Preditivo** | **Fouling Estimator Service:** ML para estimar fouling + engine hidrodinâmica. | **Fouling Score:** MVP capaz de classificar o estado do casco. |
| **MVP do Dashboard** | **Frontend Web:** Telas iniciais para COT, Engenharia e ESG. | **Uso Real:** Dashboard usado em testes com ao menos 3 embarcações. |
| **Alertas e Insights Iniciais** | **Alert Engine:** Regras básicas de perda de eficiência e arrasto. | **Primeiros Alertas:** +80% de acurácia na detecção de degradação. |

---

## Fase 2: Escalonamento e Precisão Operacional (Meses 13–36)

&emsp;Com o MVP validado, a fase 2 foca em **escalabilidade horizontal**, **melhoria da acurácia preditiva**, integração com processos internos e suporte à **tomada de decisão operacional**.

| Foco Estratégico | Prioridade Técnica (Microserviços / Infra) | Entregas e Métricas |
| :--- | :--- | :--- |
| **Aumento de Precisão** | **Fouling Estimator v2:** Modelos de time-series, retraining automático, análise espacial do casco. | **Precisão ≥ 90%** nas previsões de degradação. |
| **Impacto Energético Completo** | **Fuel Impact Service:** Cálculo avançado de consumo, emissões, slip e arrasto. | **Indicadores Integrados:** Custo vs. eficiência vs. emissões. |
| **Planejamento Avançado de Limpeza** | **Cleaning Forecast Service:** Previsão ótima de janelas de limpeza. | **IWS Planner:** Redução estimada de 10–15% em custos operacionais. |
| **Escalabilidade e Cloud** | Deploy multi-AZ, uso de K8s, cache distribuído. | **Disponibilidade 99,5%** e latência < 300ms. |
| **Integração com Times Internos** | APIs para COT, Engenharia Naval, ESG e Sustentabilidade. | **Adoção Operacional:** Nautilus usado diariamente no COT. |

---

## Fase 3: Liderança, Automação e Expansão (Meses 37+)

&emsp;A fase final busca consolidar o Nautilus como **plataforma líder de monitoramento hidrodinâmico**, com expansão regional e automação avançada.

| Foco Estratégico | Prioridade Técnica (Inovação e Expansão) | Entregas e Métricas |
| :--- | :--- | :--- |
| **Automação Total do Ciclo** | Engine de recomendações, alertas preditivos e análises automáticas. | **Operações Autônomas:** Sugestões automáticas de rota/velocidade. |
| **Expansão Regional** | Deploy em novas áreas (Bacia de Santos, Norte/Nordeste), novos parâmetros ambientais. | **Escopo Ampliado:** Cobertura de 100% da frota. |
| **Modelos Avançados de Fouling** | Modelagem espacial 3D por zona; predição longa (90 dias). | **Eficiência Máxima:** +20% em precisão energética. |
| **Relatórios ESG + Auditoria Técnica** | Geração automática de relatórios NORMAM 401, emissões evitadas, impacto por limpeza adiada. | **Conformidade Plena:** Nautilus como ferramenta oficial de evidência. |
| **Suporte a Novos Casos de Uso** | API para manutenção, pintura, revestimentos e materiais antifouling. | **Expansão de Domínio:** Plataforma multiuso de engenharia naval. |

---

## Conclusão

&emsp;O roadmap do **Nautilus** foi projetado para entregar valor desde o primeiro mês, evoluindo progressivamente em direção a uma plataforma:

- robusta,  
- confiável,  
- integrada à operação da Transpetro,  
- e capaz de gerar economia real de combustível e emissões.

&emsp;O objetivo final é transformar o Nautilus no **centro nervoso de monitoramento hidrodinâmico da frota**, apoiando decisões críticas com precisão e inteligência.

---
