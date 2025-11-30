---
sidebar_position: 8
title: Machine Learning
---

## Introdução

&emsp;O **Machine Learning no Nautilus** tem como objetivo estimar o nível de **fouling**, prever **perda de eficiência hidrodinâmica** e gerar **alertas operacionais** para apoiar Carlos (COT), Rafael (Engenheiro Naval) e Ana (Eficiência Energética).

As previsões permitem decisões mais rápidas sobre velocidade, rotas, consumo e planejamento de limpeza.

---

## Objetivo do Modelo

- Estimar continuamente o **nível de bioincrustação** no casco.  
- Prever o impacto no consumo e desempenho do navio.  
- Antecipar momentos ideais de limpeza e docagem.  
- Reduzir custos operacionais (combustível + manutenção).  

---

## Tipos de Modelos Utilizados

| Tipo de Modelo | Por que usar no Nautilus | Limitações |
|----------------|--------------------------|------------|
| **Modelos clássicos** (Regressão, Gradient Boosting) | Rápidos, interpretáveis e ideais para explicar causas do aumento de consumo. | Capturam menos relações extremamente complexas. |
| **Modelos temporais** (Time Series / Forecasting) | Lidam bem com viagem × viagem, tendências e sazonalidade. | Requerem histórico consistente. |
| **Modelos avançados** (Redes neurais / LSTM) | Capturam padrões hidrodinâmicos longos e não lineares. | Menos interpretáveis e mais pesados. |

Para o MVP, priorizamos modelos **interpretáveis e rápidos**.

---

## Principais Fontes de Dados (Features)

| Categoria | Exemplos de Variáveis |
|----------|------------------------|
| **Operacionais** | Velocidade, torque, potência, RPM, consumo diário. |
| **Ambientais** | Corrente, vento, temperatura da água, densidade. |
| **Histórico de Viagens** | Desempenho pré e pós-limpeza, tendências. |
| **Informações do Casco** | Tipo de pintura, tempo desde última docagem. |

Esses dados permitem avaliar a degradação real do casco.

---

## Ciclo de ML no Nautilus (MVP)

### 1. Coleta e Preparação de Dados
- Extração de dados operacionais, ambientais e históricos.  
- Normalização e tratamento de outliers.  

### 2. Treinamento do Modelo
- Desenvolvimento em ambiente Python.  
- Testes com métricas como MAE, RMSE e erro percentual.  
- Geração do modelo final (`fouling_model_v1.pkl`).  

### 3. Versionamento e Armazenamento
- Código versionado no GitHub.  
- Modelo armazenado em Object Storage, com versionamento claro.  

### 4. Deploy (Serving)
- O serviço do Nautilus carrega o modelo na inicialização.  
- Previsões são feitas em tempo real para cada viagem ou período configurado.  

---

## Monitoramento e Atualização

- **Monitoramento periódico:** comparação entre previsão × consumo real.  
- **Drift detection:** se o erro ultrapassa o limite, inicia-se retraining.  
- **Retraining:** novo dataset → novo modelo (`fouling_model_v2.pkl`).  
- Atualização é simples: só apontar o serviço para a versão nova.

---

## Evolução Futura (Pós-MVP)

- **Automação completa (MLOps):** pipelines de treinamento e deploy.  
- **Feature Store:** padronização das variáveis usadas pelo modelo.  
- **Modelos híbridos:** combinação de hidrodinâmica + ML.  
- **A/B Teste:** validar novos modelos sem arriscar o sistema principal.

---

## Resultado

O Machine Learning torna o Nautilus capaz de:

- prever fouling antes que impacte o consumo,  
- apoiar decisões de manutenção,  
- estimar emissões evitadas,  
- entregar insights confiáveis aos três perfis da Transpetro.

---
