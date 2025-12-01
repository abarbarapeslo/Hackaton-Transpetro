---
sidebar_position: 3
title: Arquitetura da Solução
---

## Introdução

&emsp;Para documentar a arquitetura do **Nautilus**, utilizamos o **Modelo C4**, que permite visualizar o sistema em diferentes níveis de abstração — do panorama geral até a lógica interna dos serviços.  
São apresentados três níveis essenciais:

- **C1 — Contexto**: visão macro do sistema e seus usuários.  
- **C2 — Contêineres**: visão dos blocos principais da solução.  
- **C3 — Componentes**: visão interna dos microserviços críticos.

---

## Level 1: System Context (Visão Geral)

&emsp;O diagrama de contexto descreve o ecossistema em que o Nautilus opera, destacando os usuários que interagem com a solução e os sistemas externos que fornecem dados essenciais.

### **Atores Principais**

- **Centro de Operações da Transpetro (COT)** – acompanha desempenho e eficiência energética.  
- **Equipe de Engenharia Naval / Manutenção** – planeja inspeções, limpezas e manutenção preventiva.  
- **Equipe ESG** – monitora indicadores ambientais e emissões evitadas.

### **Sistemas Externos Integrados**

- **Banco de Dados AIS** – rastreamento (posição, velocidade, rotas).  
- **Relatórios IWS** – informações sobre estado do casco e inspeções.  
- **Copernicus / NOAA** – dados oceânicos e ambientais.  
- **Sistemas internos da Transpetro** – histórico de viagens, consumo e operações.

---

## Level 2: Containers (Estrutura da Solução)

&emsp;A visão C2 apresenta os grandes blocos que compõem o sistema Nautilus e como eles se comunicam para entregar informações analíticas ao usuário.

### **Contêineres Principais**

- **Frontend Web**  
  Interface utilizada pelo COT, engenharia, ESG e pelo comando de bordo.

- **Serviços de Backend (Microserviços)**  
  - **Fouling Estimator Service** — estima o nível de bioincrustação no casco.  
  - **Fuel Impact Service** — calcula o impacto energético e as emissões resultantes da perda hidrodinâmica.  
  - **Vessel Data Service** — consolida dados AIS, IWS e históricos operacionais.  
  - **Cleaning Forecast Service** — prevê o momento ideal para limpeza do casco.  

- **Storage (Camada de Dados)**  
  - Banco SQL para dados estruturados.  
  - Banco NoSQL para registros operacionais.  
  - Camada de cache para consultas frequentes.  
  - Repositório de logs para auditoria e rastreabilidade.

---

## Level 3: Components (Interior dos Microserviços)

&emsp;O nível C3 detalha a lógica interna dos microserviços mais relevantes da solução, descrevendo seus principais componentes e responsabilidades.

---

### **Fouling Estimator Service**

Responsável por estimar o nível atual de bioincrustação.

**Componentes:**
- `API Controller`  
- `Fouling Engine (ML)`  
- `Historical Data Integrator`  
- `Repository`

---

### **Fuel Impact Service**

Calcula quanto a perda hidrodinâmica impacta no consumo de combustível e nas emissões de gases.

**Componentes:**
- `API Controller`  
- `Energy Loss Model`  
- `AIS/Speed Analyzer`  
- `Emission Calculator`

---

### **Cleaning Forecast Service**

Prevê o ponto ótimo para limpeza do casco, equilibrando custo, eficiência e impacto ambiental.

**Componentes:**
- `Prediction Engine (Time-Series)`  
- `IWS Integrator`  
- `Cost-Benefit Analyzer`

---

### **Vessel Data Service**

Agrega, normaliza e distribui dados essenciais para os demais microserviços.

**Componentes:**
- `Data Normalizer`  
- `Environmental Data Integrator`  
- `AIS Sync Module`

---

## Conclusão

&emsp;A arquitetura do **Nautilus** foi projetada para ser modular, escalável e totalmente integrada ao ecossistema operacional da Transpetro. Cada microserviço desempenha uma função específica que contribui para:

- maior precisão nas previsões,  
- eficiência operacional,  
- redução de custos,  
- e conformidade ambiental.

&emsp;A combinação entre dados operacionais, inteligência artificial e engenharia naval torna o Nautilus uma solução robusta e preparada para a nova geração de monitoramento marítimo.

---
