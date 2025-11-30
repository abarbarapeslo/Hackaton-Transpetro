---
sidebar_label: "Overview"
slug: /
sidebar_position: 0
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Overview do Projeto Nautilus

<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/banner.jpg')} style={{width: 1024}} alt="Nautilus Banner" />
    <br/>
  </div>
</div>

## Introdução

&emsp;**Nautilus** é uma plataforma avançada de **monitoramento e previsão de bioincrustação (fouling)** criada para apoiar a Transpetro na redução de consumo de combustível, emissões atmosféricas e custos de manutenção da frota.  

&emsp;A solução combina **engenharia naval, dados AIS, relatórios IWS, histórico operacional, consumo de combustível e modelos de IA** para transformar o casco — tradicionalmente invisível — em uma fonte contínua de eficiência, segurança e sustentabilidade.

---

## Problema


&emsp;A **bioincrustação** é um dos maiores desafios da indústria marítima. Cracas, algas e organismos marinhos aderidos ao casco aumentam o arrasto hidrodinâmico, reduzindo a velocidade, elevando o gasto energético e impactando diretamente a emissão de gases de efeito estufa.

&emsp;Estudos globais indicam que o fouling pode aumentar o consumo em **até 40%** em casos severos. Já a **NORMAM 401** estabelece limites e diretrizes para inspeção, limpeza e mitigação — tornando o monitoramento contínuo um requisito operacional e regulatório.


<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/nautilus_problema.png')} style={{width: 1024}} alt="Gráfico de fouling vs. consumo" />
    <br/>
  </div>
</div>


### Dados analisados pelo time

O dataset fornecido no hackathon permitiu mapear:

- **Eventos operacionais** com data, duração e tipo.  
- **Consumo de combustível** por sessão (CONSUMED_QUANTITY).  
- **Velocidade (AIS)**, latitude e longitude.  
- **Inspeções IWS** com avaliação de fouling por área do casco.  
- **Características dos navios** (classe, nome, porte etc.).  

<p style={{textAlign: 'center'}}>Gráfico: Relação entre fouling registrado em IWS e consumo médio por viagem</p>

<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

---

## Proposta de Valor

- 🧠 **Para a Transpetro**  
  Modelos que estimam o nível de fouling **em tempo real**, sem depender apenas de inspeções.  

- ⛽ **Para Operações e Eficiência Energética**  
  Correlação entre fouling, velocidade e consumo para estimar perdas energéticas e oportunidades de economia.  

- 🔧 **Para Manutenção**  
  Predição do **melhor momento para limpeza**, evitando intervenções desnecessárias ou tardias.  

- 🌎 **Para ESG e Descarbonização**  
  Monitoramento contínuo do impacto do casco nas emissões de CO₂, atendendo padrões globais e NORMAM 401.

:::info
Nautilus transforma o casco em um ativo de informação contínua — previsível, monitorável e otimizado.
:::

---

## Target de Audiência

- **Centro de Operações da Transpetro (COT)**  
  Monitoramento de desempenho das embarcações e eficiência energética.  

- **Engenharia Naval e Manutenção**  
  Planejamento de janelas de limpeza e estimativa de degradação de desempenho.  

- **Gerência de Meio Ambiente / ESG**  
  Tracking de emissões evitadas e indicador ambiental por embarcação.  

- **Comandantes e equipe de bordo**  
  Alertas e diagnósticos sobre desempenho do casco ao longo da viagem.

<p style={{textAlign: 'center'}}>Ilustração do Usuário-Alvo</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/publico_alvo.png')} style={{width: 1024}} alt="Público-alvo do Nautilus" />
    <br/>
  </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

---

## Tecnologias

- **Machine Learning e Modelos Preditivos**  
  Para estimar fouling a partir de velocidade, histórico AIS, consumo e inspeções IWS.

- **Sensoriamento via Dados AIS**  
  Correlação entre perda de velocidade, variações operacionais e resistência hidrodinâmica.

- **Integração com Copernicus Marine / NOAA**  
  Dados ambientais como temperatura da água, correntes e salinidade.  

- **Arquitetura Web Responsiva + Painel de Operações**  
  Dashboard unificado para previsões, alertas e indicadores energéticos.

<p style={{textAlign: 'center'}}>Visão das Funcionalidades da Plataforma</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/nome.png')} style={{width: 1024}} alt="Funcionalidades do Nautilus" />
    <br/>
  </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

---

## Diferenciadores Chave

1. **Modelo híbrido Fouling + Impacto energético**  
   Não apenas classifica o fouling — estima impacto no consumo e emissões.

2. **Previsão baseada em regressão temporal + dados reais**  
   Combina AIS, IWS, consumo e ambiente para prever trajetória do fouling.

3. **Painel de limpeza ideal (IWS Planner)**  
   Sugere o *ponto ótimo* de intervenção para cada embarcação.

4. **Compliance com NORMAM 401**  
   Registra histórico e apoia conformidade regulatória automaticamente.

<p style={{textAlign: 'center'}}>Diferenciais do Nautilus</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
    <img src={useBaseUrl('/img/nautilus_chaves.png')} style={{width: 1024}} alt="Diferenciais do Nautilus" />
    <br/>
  </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

---

## Conclusão

&emsp;**Nautilus** representa uma nova geração de monitoramento marítimo.  
Ao unir **dados operacionais**, **inteligência artificial** e **engenharia naval**, a solução revela o que está abaixo da superfície — permitindo decisões mais eficientes, econômicas e sustentáveis.

&emsp;Com Nautilus, a Transpetro ganha:

- previsibilidade,  
- economia de combustível,  
- redução de emissões,  
- e maior segurança operacional.

&emsp;Nautilus é **precisão que navega** — inteligência contra a bioincrustação, performance a favor do planeta.

---