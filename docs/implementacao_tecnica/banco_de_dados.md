---
sidebar_position: 0
title: Arquitetura de Dados — Serviço de Previsão de Bioincrustação
---

## Visão Geral

&emsp;Este documento descreve a **arquitetura de dados** do microserviço de **Previsão de Bioincrustação** (Nautilus). O padrão adotado é **Model-First Service Architecture**: o ativo central é o modelo de Machine Learning pré-treinado, e o serviço é essencialmente *stateless*, responsável por carregar o modelo, executar inferências e expor APIs de predição.

&emsp;O objetivo aqui é documentar onde os artefatos são persistidos, quais esquemas (Pydantic/FastAPI) compõem a I/O do serviço, como logs e métricas devem ser coletados, e quais camadas de cache e observability devem ser usadas em produção.

---

## 1. Componentes centrais de persistência

> Neste serviço, o **modelo ML** é a principal peça de dados. Bancos relacionais e outros repositórios tradicionais aparecem apenas como apoio (logs, armazenamento de dados de treino, snapshots), não como fonte primária do runtime de predições.

| Ativo | Tipo de Persistência | Propósito | Localização (ex.: GCP) |
| :--- | :--- | :--- | :--- |
| **MODELO ML** | Arquivo binário (.pkl, .joblib, .onnx) | Única fonte de verdade do algoritmo de inferência. Carregado em memória no boot do serviço. | Google Cloud Storage (GCS) ou disco da VM (mount do bucket) |
| **DADOS HISTÓRICOS** | CSV / Parquet | Dataset para treino / re-treino e análises off-line. | Google Cloud Storage (GCS) |
| **SNAPSHOTS I/O (opcional)** | Parquet / JSONL | Arquivamento de entradas e saídas para monitoramento de *data drift* e auditoria | Firestore / BigQuery |
| **ARQUIVOS DE CONFIG** | YAML / JSON | Hiperparâmetros, thresholds e versão do modelo | GCS / Config Store (Secret Manager para segredos) |

**Observação:** o serviço **não** persiste estado transacional (usuários, contas, transações) — ele é *stateless* e desenhado apenas para cálculo/inferência.

---

## 2. Modelagem de Dados (Schemas FastAPI / Pydantic)

&emsp;A interface do serviço é definida por modelos Pydantic que garantem validação automática, documentação OpenAPI e tipagem clara.

### A. Entrada (IN) — `InputFeatures`

Corpo da requisição POST representando o estado atual da embarcação.

| Campo | Tipo | Descrição | Exemplo |
| :--- | :---: | :--- | :--- |
| `distance` | float | Milhas navegadas no período | 40.0 |
| `duration` | float | Duração da viagem (dias) | 1.0 |
| `dias_desde_docagem` | int | Dias desde a última docagem | 280 |
| `dias_parado_acumulado` | float | Tempo inativo acumulado (dias) | 20.0 |
| `velocidade_media` | float | Velocidade média (nós) | 11.8 |
| `consumo_total` | float | Consumo total naquele período | 250.0 |
| `consumo_por_milha` | float | Consumo por milha | 6.25 |
| `draft_medio` | float | Calado médio | 7.3 |
| `draft_ratio` | float | Razão de calado | 0.85 |
| `consumo_medio_30d` | float | Consumo médio últimos 30 dias | 240.1 |
| `distancia_90d` | float/int | Distância acumulada 90 dias | 2340 |
| `ano` | int | Ano de início da simulação | 2025 |
| `mes` | int | Mês (1–12) | 11 |
| `trimestre` | int | Trimestre (1–4) | 4 |

> Implementação: `class InputFeatures(BaseModel): ...` em `app/schemas/bioincrustacao.py`.

---

### B. Saída (OUT) — `PredictionOutput`

Objeto raiz retornado pela API contendo o resumo (`dia_limpeza_recomendado`) e a lista de previsões diárias (`previsoes`, 60 registros).

**Estrutura mínima:**

```json
{
  "dia_limpeza_recomendado": { /* RecommendationDetail ou null */ },
  "previsoes": [ /* PredictionRecord[60] */ ]
}
