---
sidebar_position: 5
title: Modelagem dos Dados
---

## Introdução

&emsp;A modelagem de dados do **Nautilus – Cleaning Forecast Service** garante que toda a comunicação entre cliente e API siga regras claras de validação, estrutura e coerência.  
&emsp;A API foi projetada seguindo boas práticas de engenharia de machine learning, utilizando modelos **Pydantic (FastAPI)** para validar entradas e estruturar as respostas do modelo de previsão.

&emsp;A modelagem é dividida em três blocos principais:

1. **Entrada (Request Body)** – Representa o estado atual da embarcação.  
2. **Saída Detalhada (Prediction Loop)** – Representa os 60 dias de simulação.  
3. **Saída Final (Response Body)** – Concentra o resumo e a recomendação principal.

---

## Diagrama Conceitual da Modelagem

<p style={{textAlign: 'center'}}> Modelagem dos Dados da API (Estrutura Conceitual) </p>

<p style={{textAlign: 'center'}}> *Sem imagem — estrutura descrita abaixo* </p>

---

## Estruturas Principais

A modelagem da API utiliza três estruturas base:

| Estrutura                         | Propósito                                                        | Mapeamento no Código                   |
|----------------------------------|------------------------------------------------------------------|----------------------------------------|
| **Entrada (Request Body)**       | Representa o estado atual da embarcação enviado à API.          | `InputFeatures`                        |
| **Saída Detalhada (Prediction Loop)** | Representa a previsão diária para 60 dias.                         | `PredictionRecord`, `RecommendationDetail` |
| **Saída Final (Response Body)**  | Consolida as previsões e a recomendação principal.              | `PredictionOutput`                     |

---

# 1. Modelo de Entrada — `InputFeatures`

&emsp;Este modelo garante que todos os **14 features obrigatórios** estejam presentes e com seus tipos corretos (`float` ou `int`) antes que a previsão seja executada.

Cada campo representa um aspecto crucial do comportamento operacional, histórico e estrutural do navio.

### 💡 **Categorias de Features**

| Categoria | Features | Tipo |
|----------|----------|------|
| **Performance** | `distance`, `duration`, `velocidade_media`, `consumo_total`, `consumo_por_milha` | float |
| **Estado do Navio** | `draft_medio`, `draft_ratio` | float |
| **Histórico Recente** | `dias_desde_docagem`, `dias_parado_acumulado`, `consumo_medio_30d`, `distancia_90d` | float/int |
| **Temporal** | `ano`, `mes`, `trimestre` | int |

---

### 📥 Exemplo do Modelo Completo (InputFeatures)

```json
{
  "distance": 120.5,
  "duration": 18.2,
  "draft_medio": 7.3,
  "velocidade_media": 12.4,
  "consumo_total": 11200,
  "consumo_por_milha": 93.0,
  "dias_desde_docagem": 135,
  "dias_parado_acumulado": 12,
  "draft_ratio": 0.85,
  "consumo_medio_30d": 105.4,
  "distancia_90d": 2340,
  "ano": 2025,
  "mes": 11,
  "trimestre": 4
}
