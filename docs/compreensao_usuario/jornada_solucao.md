---
sidebar_label: "Jornada da Solução"
sidebar_position: 3
---

# Jornada da Solução

## Compreensão

&emsp;A jornada da solução **Nautilus** descreve como os dados são coletados, processados e transformados em **insights de fouling**, permitindo que a Transpetro tome decisões mais eficientes sobre operação, limpeza e manutenção do casco.  

&emsp;Essa jornada representa o fluxo completo da plataforma — desde a entrada de dados até a geração de previsões, alertas e visualizações no dashboard operacional.

---

## Visão Geral da Jornada da Solução

<p style={{textAlign: 'center'}}> Jornada da Solução Nautilus </p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Jornada da Solução Nautilus" />
        <br/>
    </div>
</div>
<p style={{textAlign: 'center'}}> Fonte: Produzido pelos autores (2025). </p>

---

## 1. Coleta de Dados (Input Layer)

&emsp;O processo inicia com a ingestão de diferentes fontes operacionais e ambientais:

- **AIS** → velocidade, posição, curso, profundidade  
- **Consumo de combustível (CONSUMED_QUANTITY)**  
- **Eventos operacionais** (tipo, duração, anomalias)  
- **Inspeções IWS** → estado do casco e fouling por área  
- **Dados ambientais Copernicus/NOAA** → correntes, temperatura da água, ventos, salinidade  

**Objetivo:** criar um histórico consolidado e confiável para análises energéticas e predição de fouling.

---

## 2. Processamento e Normalização

&emsp;Antes de alimentar a IA, os dados passam por:

- Limpeza e padronização  
- Sincronização temporal (AIS + consumo + ambiente)  
- Identificação automática de outliers  
- Cálculo de métricas derivadas (slip, perda de velocidade, arrasto estimado)

**Resultado:** dataset contínuo, harmonizado e pronto para modelagem.

---

## 3. Modelos Preditivos e Diagnóstico

&emsp;A camada de inteligência do Nautilus aplica modelos de Machine Learning e regressões hidrodinâmicas para:

- Estimar o **nível atual de fouling**  
- Prever sua evolução para as próximas semanas  
- Correlacionar **fouling → perda de eficiência → aumento de consumo**  
- Simular cenários (ex.: *“casco limpo vs. casco atual”*)  

**Saídas principais do modelo:**

- Fouling Score (0–100)  
- Perda estimada de velocidade  
- Aumento percentual no consumo  
- Previsão de degradação  
- Risco de não conformidade com **NORMAM 401**

---

## 4. Monitoramento Contínuo

&emsp;Com os dados chegando em tempo real, a plataforma consegue:

- Atualizar a saúde do casco diariamente  
- Detectar degradações aceleradas  
- Identificar “pontos de atenção” (hotspots)  
- Sugerir investigações ou inspeções direcionadas  

**Objetivo:** transformar o casco em um **sensor vivo** de eficiência.

---

## 5. Alertas Inteligentes

&emsp;O sistema envia notificações para as equipes:

- **Aumento repentino no arrasto**  
- **Perda de eficiência acima do esperado**  
- **Pré-alerta de limpeza ideal**  
- **Risco de violar limites da NORMAM 401**  

Cada alerta vem acompanhado de:

- Causa provável  
- Dados comparativos  
- Recomendação de ação

---

## 6. Visualização no Dashboard

<p style={{textAlign: 'center'}}> Dashboard da Solução </p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Dashboard Nautilus" />
        <br/>
    </div>
</div>
<p style={{textAlign: 'center'}}> Fonte: Produzido pelos autores (2025). </p>

&emsp;O dashboard integra:

- Estado atual do casco (visão por zonas)  
- Linha do tempo de fouling  
- Impacto energético e financeiro  
- Emissões evitadas  
- Sugestão de janela ideal de limpeza *(IWS Planner)*  
- Relatórios exportáveis para ESG e conformidade  

---

## 7. Ação Operacional e Decisões

&emsp;Com as informações consolidadas, as equipes realizam:

- Ajuste de velocidade/rota  
- Planejamento de limpeza técnica  
- Revisão de eficiência energética  
- Análises de custo-benefício  
- Geração de relatórios ambientais  

---

## Conclusão da Jornada

&emsp;A jornada da solução Nautilus transforma dados dispersos em **inteligência acionável**, permitindo:

- Redução de consumo e emissões  
- Planejamento preditivo de manutenção  
- Conformidade com NORMAM 401  
- Operações mais seguras e eficientes  

&emsp;Cada etapa — da coleta às previsões — foi pensada para oferecer **clareza**, **agilidade** e **decisão baseada em dados** para toda a cadeia operacional da Transpetro.

---

