---
sidebar_position: 1
title: Introdução
slug: /intro
---

import Admonition from '@theme/Admonition';

## Introdução do Projeto Nautilus

&emsp;O transporte marítimo é a espinha dorsal da logística brasileira, responsável por conectar a produção nacional aos terminais estratégicos e garantir a continuidade operacional da Transpetro. Entretanto, sob a superfície dos navios existe um inimigo silencioso — **a bioincrustação**, acúmulo de organismos marinhos como cracas e algas no casco, que aumenta o arrasto hidrodinâmico, eleva o consumo de combustível e intensifica as emissões de CO₂.

&emsp;Esse desafio é técnico, econômico e ambiental. Estudos internacionais e dados internos da própria Transpetro mostram que até **40% do consumo extra** de combustível pode ser decorrente de fouling. Além disso, a NORMAM 401 estabelece limites regulatórios para o nível de bioincrustação permitido, exigindo ações de monitoramento e limpeza cada vez mais eficientes.

&emsp;Atualmente, o diagnóstico é majoritariamente **visual e esporádico**, baseado em inspeções (IWS), registros dispersos e análises que não conseguem capturar a evolução contínua do casco. Falta uma visão integrada que una **dados operacionais (velocidade, GPS, duração), consumo, inspeções, condições ambientais e histórico das embarcações** em um único modelo preditivo.

&emsp;É nesse cenário que nasce o **Nautilus**, uma plataforma baseada em **engenharia naval, ciência de dados e inteligência artificial**, capaz de transformar o casco em uma fonte contínua de inteligência operacional.

---

## Pilares para a Inovação

### **📌 Inteligência Hidrodinâmica e Monitoramento Contínuo**
&emsp;No centro do Nautilus está o uso combinado de dados reais da frota Transpetro:

- Consumo de combustível (CONSUMED_QUANTITY)  
- Velocidade (AIS)  
- Localização (LAT/LONG)  
- Eventos operacionais (sessionId)  
- Duração das jornadas  
- Histórico técnico dos navios  
- Inspeções de casco (IWS)  
- Condições ambientais externas (Copernicus Marine, NOAA, Marinha do Brasil)

&emsp;A partir desse conjunto robusto, aplicamos algoritmos capazes de **inferir o estado do casco**, detectar padrões de perda de eficiência e antecipar a evolução da bioincrustação.

---

### **📌 Previsão do Impacto Econômico e Energético**
&emsp;Com base nos dados processados durante o hackathon, a plataforma:

- Calcula como o fouling influencia o aumento do consumo real.  
- Detecta anomalias de performance relacionadas à rugosidade do casco.  
- Estima o impacto energético e o custo associado à degradação hidrodinâmica.  
- Quantifica o potencial de redução de emissões caso a limpeza seja realizada.

&emsp;Essa inteligência é essencial para apoiar iniciativas de descarbonização e eficiência energética da Transpetro.

---

### **📌 Recomendações Preditivas de Manutenção**
&emsp;O Nautilus gera previsões sobre o **momento ideal para limpeza**, combinando:

- Histórico de inspeções IWS  
- Velocidade expectada x velocidade real  
- Perda de performance ao longo do tempo  
- Perfil operacional da embarcação  
- Tolerâncias regulatórias (NORMAM 401)  

&emsp;O objetivo é evitar tanto limpezas precoces quanto atrasadas, garantindo **máximo retorno econômico** e **mínimas emissões**.

---

### **📌 Transparência, Precisão e Segurança**
&emsp;A plataforma utiliza princípios de observabilidade contínua para garantir:

- Integridade dos dados  
- Traçabilidade de informações operacionais  
- Visualização clara da evolução do casco  
- Relatórios de conformidade ambiental e regulatória  

&emsp;Com isso, o Nautilus se torna uma ferramenta estratégica para planejamento, tomada de decisão e auditoria de eficiência.

---

## Conclusão

&emsp;O Nautilus não é apenas uma solução de monitoramento — é uma nova forma de enxergar o casco dos navios como um **ativo vivo**, que respira dados e revela sua condição em tempo real.

&emsp;Combinando dados operacionais, inspeções, informações ambientais e técnicas avançadas de IA, oferecemos à Transpetro:

- Redução significativa de combustível  
- Menor emissão de gases de efeito estufa  
- Maior eficiência hidrodinâmica  
- Conformidade com a NORMAM 401  
- Decisões preditivas e não reativas  

&emsp;O futuro da eficiência marítima exige profundidade, precisão e inteligência — exatamente o que o **Nautilus entrega**.

