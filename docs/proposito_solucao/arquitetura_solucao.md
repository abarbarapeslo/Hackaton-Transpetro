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

&emsp;O diagrama de contexto descreve o ecossistema em que o Nautilus opera: quais usuários interagem com a solução e quais sistemas externos são fundamentais.

<p style={{textAlign: 'center'}}>Arquitetura — Level C1</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="C1 Context Diagram" />
        <br/>
    </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

### **Atores Principais**

- **Centro de Operações da Transpetro (COT)** – acompanha o desempenho e eficiência energética.  
- **Equipe de Engenharia Naval / Manutenção** – planeja inspeções e limpezas.  
- **Equipe ESG** – acompanha indicadores ambientais e emissões evitadas.

### **Sistemas Externos Integrados**

- **Banco de Dados AIS** (posicionamento, velocidade, rotas).  
- **Relatórios IWS** (estado do casco e inspeções).  
- **Copernicus / NOAA** (condições oceânicas).  
- **Sistemas internos da Transpetro** (histórico de viagens, consumo).

---

## Level 2: Containers (Estrutura da Solução)

&emsp;O diagrama C2 apresenta os grandes blocos que compõem o sistema Nautilus e como eles se comunicam.

<p style={{textAlign: 'center'}}>Arquitetura — Level C2</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="C2 Containers Diagram" />
        <br/>
    </div>
</div>
<p style={{textAlign: 'center'}}>Fonte: Produzido pelos autores (2025).</p>

### **Contêineres Principais**

- **Frontend Web**  
  Dashboard utilizado pelo COT, engenharia, ESG e comando de bordo.

- **Serviços de Backend (Microserviços)**  
  - **Fouling Estimator Service** — estima o nível de bioincrustação.  
  - **Fuel Impact Service** — calcula impacto energético e emissões.  
  - **Vessel Data Service** — consolida dados AIS, IWS e históricos.  
  - **Cleaning Forecast Service** — prevê o momento ideal de limpeza.  

- **Storage (Camada de Dados)**  
  - Banco SQL para dados estruturados.  
  - Banco NoSQL para registros operacionais.  
  - Cache para dados consultados com frequência.  
  - Repositório de logs para rastreabilidade.

---

## Level 3: Components (Interior dos Microserviços)

&emsp;O nível C3 detalha a lógica interna dos microserviços mais relevantes da solução.

---

### **Fouling Estimator Service**

Responsável por estimar o nível atual de bioincrustação.

**Componentes:**
- `API Controller`  
- `Fouling Engine (ML)`  
- `Historical Data Integrator`  
- `Repository`

<p style={{textAlign: 'center'}}>Fouling Estimator Service</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Fouling Estimator Diagram" />
        <br/>
    </div>
</div>

---

### **Fuel Impact Service**

Calcula quanto a perda hidrodinâmica impacta combustível e emissões.

**Componentes:**
- `API Controller`  
- `Energy Loss Model`  
- `AIS/Speed Analyzer`  
- `Emission Calculator`

<p style={{textAlign: 'center'}}>Fuel Impact Service</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Fuel Impact Diagram" />
        <br/>
    </div>
</div>

---

### **Cleaning Forecast Service**

Prevê o ponto ótimo para limpeza do casco.

**Componentes:**
- `Prediction Engine (Time-Series)`  
- `IWS Integrator`  
- `Cost-Benefit Analyzer`  

<p style={{textAlign: 'center'}}>Cleaning Forecast Service</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Cleaning Forecast Diagram" />
        <br/>
    </div>
</div>

---

### **Vessel Data Service**

Agrega dados operacionais e ambientais para todos os outros microserviços.

**Componentes:**
- `Data Normalizer`  
- `Environmental Data Integrator`  
- `AIS Sync Module`  

<p style={{textAlign: 'center'}}>Vessel Data Service</p>
<div style={{margin: 15}}>
  <div style={{textAlign: 'center'}}>
        <img src="/img/nome.png" style={{width: 1024}} alt="Vessel Data Diagram" />
        <br/>
    </div>
</div>

---

## Conclusão

&emsp;A arquitetura do **Nautilus** foi projetada para ser modular, escalável e altamente integrada aos sistemas operacionais da Transpetro. Cada microserviço cumpre um papel específico, permitindo que a plataforma ofereça:

- previsões mais precisas,  
- eficiência operacional,  
- redução de custos,  
- e conformidade ambiental.

&emsp;A combinação entre dados operacionais, IA e engenharia naval faz do Nautilus uma solução robusta para a nova geração de monitoramento marítimo.

---
