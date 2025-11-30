---
sidebar_position: 2
title: Análise de Negócio
---

## Resumo

&emsp;**Nautilus** é uma plataforma inteligente de **monitoramento, diagnóstico e previsão de bioincrustação** para embarcações da Transpetro.  
Combinando sensores, dados operacionais (AIS, consumo, velocidade), inspeções IWS e modelos de IA, a solução identifica a condição real do casco, estima o impacto energético e sugere o momento ideal para limpeza, apoiando a eficiência operacional e a descarbonização da frota.

&emsp;Mais do que uma ferramenta de análise, Nautilus é uma **solução estratégica**: reduz custos, aumenta a segurança, prolonga a vida útil dos cascos e mantém a operação em conformidade com **NORMAM 401** e metas ESG.

---

## Contexto

&emsp;A Transpetro movimenta uma das maiores frotas de navios petroleiros do país, enfrentando um problema recorrente e de grande impacto: a bioincrustação.  
O fouling pode elevar o consumo de combustível em até 30%, causando:

- Perdas multimilionárias em OPEX  
- Maior emissão de CO₂  
- Redução de velocidade e potência útil  
- Riscos de não conformidade ambiental  
- Necessidade de limpezas emergenciais e caras  

A análise dos dados fornecidos no hackaton mostra:

- Lacunas temporais grandes entre IWS  
- Grande variabilidade de consumo, dificultando análise manual  
- Velocidades inconsistentes correlacionadas a períodos pós-fouling  
- Eventos sem dados suficientes para tomada de decisão humana  

&emsp;Surge assim a demanda por uma plataforma que transforme dados em **decisão operacional**, trazendo previsibilidade e segurança.

---

## Stakeholders

| Stakeholder | Expectativas | Riscos / Resistências |
|------------|--------------|-----------------------|
| **Centro de Operações / Engenharia Naval** | Visibilidade contínua, previsões confiáveis de fouling, recomendações de limpeza | Desconfiança inicial dos modelos de IA |
| **Times de Manutenção** | Planejamento correto das limpezas, redução de paradas emergenciais | Mudança de rotina / novos fluxos |
| **Comandantes / Navegação** | Entendimento claro da performance da embarcação | Excesso de alertas |
| **Diretoria / ESG** | Redução de emissões e custos, compliance regulatório | Prova real de impacto financeiro |
| **Reguladores / Órgãos ambientais** | Garantia de conformidade com NORMAM 401 | Falta de rastreabilidade histórica se não houver integração de dados |

---

## Riscos e Mitigações da Solução Nautilus

| Categoria | Risco | Mitigação |
|----------|-------|-----------|
| **Dados** | Falta de dados contínuos de velocidade/consumo | Modelos híbridos combinando AIS + telemetria + inferência |
| **IA** | Previsão imprecisa para determinados navios | Modelos por classe de embarcação + retraining |
| **Operação** | Resistência à adoção | Dashboard simples + validação com engenheiros |
| **Regulatório** | Divergência entre previsão e inspeções oficiais | Algoritmos calibrados com IWS + histórico auditável |
| **Financeiro** | Falta de clareza no impacto econômico | Modelos que traduzem fouling → litros → R$ com precisão |

---

## Conexão com a Marca Nautilus

&emsp;A identidade Nautilus reforça o propósito da solução:

### **Precisão**
Leituras contínuas da performance real do casco, detectando pequenas perdas antes que se tornem grandes problemas.

### **Sustentabilidade**
Menos fouling → menos consumo → menos emissões → mais longevidade do casco.

### **Segurança preditiva**
Detecção precoce de anomalias que podem comprometer a operação.

&emsp;Nautilus transforma dados operacionais em **decisões inteligentes**, garantindo eficiência, segurança e conformidade ambiental.

