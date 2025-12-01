<div align="center">

# Nautilus

</div>

<p align="center">
  <img src="/static/img/nautilus_logo.svg" alt="Nautilus" width="400" style="margin-bottom: 30px;">
</p>

<p align="center">
  <i>Inteligência para monitorar e prever bioincrustação — eficiência para navegar mais longe, gastar menos e emitir menos.</i>
</p>

---

## Membros da Equipe

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://www.linkedin.com/in/davidijesus">
          <img src="https://github.com/davidijesus.png" style="border-radius: 10%; width: 150px;" alt="Davi Nascimento de Jesus"/><br>
          <sub><b>Davi Nascimento de Jesus</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.linkedin.com/in/marcos-morais79/">
          <img src="https://github.com/Marcos-sxt.png" style="border-radius: 10%; width: 150px;" alt="Marcos Morais"/><br>
          <sub><b>Marcos Morais</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://www.linkedin.com/in/barbarapeslo">
          <img src="https://github.com/abarbarapeslo.png" style="border-radius: 10%; width: 150px;" alt="Barbara Lopes"/><br>
          <sub><b>Barbara Lopes</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>

---

## Descrição

**Nautilus** é uma plataforma de monitoramento inteligente desenvolvida para o **Hackathon Transpetro 2025**, combinando engenharia naval, ciência de dados e inteligência artificial.

Nosso propósito é **prever e monitorar a bioincrustação** no casco das embarcações, permitindo decisões operacionais baseadas em dados que:

- reduzem consumo de combustível,  
- minimizam emissões de gases de efeito estufa,  
- antecipam riscos de segurança,  
- aumentam eficiência e disponibilidade da frota.

Inspirado na hidrodinâmica do organismo marinho *nautilus*, o projeto representa **precisão, adaptação e profundidade analítica**, revelando o que está abaixo da superfície.

---

## Valores da Marca

### **Precisão**
Inteligência capaz de interpretar a performance real do casco, cruzando dados de sensores, eventos e inspeções para entregar recomendações confiáveis.

### **Sustentabilidade**
Monitoramento contínuo da degradação hidrodinâmica e do aumento de fouling, permitindo reduzir emissões e consumo operacional.

### **Segurança Preditiva**
Antecipação de anomalias e riscos que impactam o desempenho ou a integridade da embarcação.

---

## Problema

A bioincrustação aumenta o arrasto hidrodinâmico, elevando consumo de combustível e emissões.  
Sua avaliação hoje depende de inspeções visuais esporádicas, caras e tardias.

O desafio do hackathon:

> **"Como usar tecnologias inovadoras para monitorar e prever a bioincrustação, aumentando a eficiência operacional, reduzindo consumo e apoiando a descarbonização da frota?"**

---

## O que o Nautilus resolve

- 📈 **Prevê a evolução da bioincrustação** com base em dados operacionais e históricos  
- 🔎 **Identifica mudanças na eficiência do casco** antes mesmo das inspeções  
- 🌎 **Estimula decisões sustentáveis** baseadas em consumo, velocidade e condição real  
- ⚙️ **Sugerimos o momento ideal** para limpeza/inspeção do casco  
- 🚢 **Integra dados AIS, consumo, eventos e IWS** em um dataset unificado  
- 🧠 **Utiliza Machine Learning** para prever condições do casco  

---

## Fluxo de Funcionamento da Solução

1. **Ingestão dos dados**  
   Consumo, velocidade, GPS, inspeções, eventos de navegação, características dos navios.

2. **Tratamento e Engenharia de Dados**  
   • Normalização, padronização e merge inteligente (merge_asof).  
   • Criação do dataset integrado.

3. **Análise da Condição do Casco**  
   • Correlação entre fouling e consumo.  
   • Detecção de padrões de degradação.

4. **Modelo Preditivo**  
   • Previsão da condição do casco (target).  
   • Estimativa de impacto energético.

5. **Recomendações Operacionais**  
   • Janelas ideais para limpeza.  
   • Alertas de risco.  
   • Insights de eficiência.

---

## Acesse a Documentação Completa

📘 **Documentação Docusaurus:**  
https://abarbarapeslo.github.io/Hackaton-Transpetro/

🎥 **Vídeo explicativo:**  
_https://youtu.be/wMuoxjCrAS0_

---

## Tecnologias

- Python (Pandas, NumPy, Scikit-learn)
- IA/ML para previsão de fouling
- Visualização e análise exploratória
- Engenharia de dados (merge_asof, normalização temporal)
- Tratamento de dados AIS, IWS, Consumo e Eventos

---
## 🌀 Uma nova visão para o mar

Nautilus não apenas analisa o casco.  
Ele revela o que está abaixo da superfície, traduz operações complexas em decisões inteligentes e guia frotas para um futuro mais eficiente e sustentável.

> **Nautilus é precisão que navega.**

Redeploy forced at 2025-11-30T21:54:46.4148695-03:00
