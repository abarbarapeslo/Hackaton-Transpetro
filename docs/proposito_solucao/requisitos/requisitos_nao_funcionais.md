---
sidebar_position: 2
title: Requerimentos Não-Funcionais
---

## Contextualização  
&emsp;Os **Requisitos Não Funcionais (RNFs)** especificam **como** o sistema Nautilus deve operar, garantindo qualidade, segurança e desempenho adequados para um ambiente crítico como o monitoramento de bioincrustação em embarcações Transpetro.  

&emsp;A classificação segue o padrão **ISO/IEC 25010**, que orienta a definição de atributos de qualidade como desempenho, confiabilidade, segurança, usabilidade e compatibilidade — fundamentais para sistemas marítimos de missão crítica.

---

# 1. Adequação Funcional

### **RNF-AF-01 – Completude Funcional**
O sistema deve implementar todas as funcionalidades previstas nos requisitos funcionais (RF-NAV, RF-MON, RF-AIS, RF-IWS etc.).  
A ausência de qualquer funcionalidade listada será considerada **defeito crítico**.

---

# 2. Eficiência de Desempenho

### **RNF-ED-01 – Comportamento Temporal**
- **Carregamento de Telas:** 95% das telas interativas devem carregar em **menos de 2,5s** com conexão ≥ 10 Mbps.  
- **APIs de Previsão e Monitoramento:** 99% das requisições devem responder em **≤ 500ms**.  
- **Processamento de Modelos Preditivos:** Os modelos de fouling devem entregar resultados em **≤ 5s** para 95% dos casos.  

### **RNF-ED-02 – Uso de Recursos**
Sob carga nominal, o backend não deve ultrapassar **70%** de uso de CPU ou memória, garantindo margem para picos de operação.

### **RNF-ED-03 – Capacidade**
A plataforma deve suportar:
- **1.500 usuários simultâneos** no lançamento;  
- Capacidade de crescimento para **10.000 usuários simultâneos**;  
- Processamento mínimo de **50 consultas preditivas/segundo** (fouling, emissão, arrasto);  
- Escalonamento para **500 consultas/segundo** conforme demanda da frota.

### **RNF-ED-04 – Escalabilidade**
A solução deve permitir **escalabilidade horizontal**, adicionando instâncias de serviços sem necessidade de reescrever a arquitetura.

---

# 3. Compatibilidade

### **RNF-C-01 – Interoperabilidade**
O sistema deve integrar-se com segurança aos seguintes serviços externos:

- **AIS/Tricontrol/Transpetro** – Telemetria e navegação  
- **Relatórios IWS e inspeções subaquáticas**  
- **Copernicus Marine Service (CMEMS)** – dados ambientais (corrente, salinidade, SST)  
- **NOAA + MetOcean** – parâmetros oceanográficos adicionais  
- **Sistemas corporativos Transpetro** – consumo, eventos, planejamentos  
- **Banco de dados regulatório – NORMAM 401**  

Integrações devem ocorrer via REST, WebSocket ou streams seguros.

---

# 4. Usabilidade

### **RNF-U-01 – Acessibilidade**
A interface web deve seguir **WCAG 2.1 nível AA**, garantindo leitura em ambientes embarcados (baixa luminosidade/alto contraste).

### **RNF-U-02 – Operabilidade**
O sistema deve renderizar corretamente nas últimas duas versões dos navegadores:
- Chrome  
- Firefox  
- Edge  
- Safari  

### **RNF-U-03 – Proteção contra Erros**
Mensagens devem ser claras, com ações recomendadas quando possível (e.g.: *"Recarregar dados AIS"*).

### **RNF-U-04 – Responsividade**
O dashboard deve ser totalmente utilizável em:
- Desktop  
- Telas de operação (monitores widescreen)  
- Tablets usados no COT  
- Celulares usados por engenheiros de campo  

Largura mínima suportada: **360px**.

---

# 5. Confiabilidade

### **RNF-CF-01 – Disponibilidade**
A plataforma deve possuir **99,9% de disponibilidade mensal** (máx. ~43min de downtime).  
Janelas de manutenção devem ser comunicadas com **48h de antecedência**.

### **RNF-CF-02 – Tolerância a Falhas**
Quando fontes externas (AIS, Copernicus, IWS) estiverem indisponíveis:
- O sistema deve **acusar perda de fonte**,  
- Manter a última leitura válida,  
- Evitar interrupção total das funcionalidades.

### **RNF-CF-03 – Recuperabilidade**
- **RPO:** Zero para dados de operação e telemetria.  
- **RTO:**  
  - Falha total regional: **≤ 2h**  
  - Falha em zona de disponibilidade: **< 5min** (failover automático)

---

# 6. Segurança

### **RNF-S-01 – Confidencialidade**
- Toda comunicação deve usar **TLS 1.3**.  
- Dados sensíveis armazenados (ex.: localização, modelos, dados operacionais) devem ser criptografados em **AES-256**.  

### **RNF-S-02 – Integridade**
- Dados de consumo, velocidade e fouling devem seguir propriedades **ACID**.  
- Logs e trilhas de auditoria devem ser imutáveis.

### **RNF-S-03 – Não Repúdio**
A coleta e armazenamento de dados de inspeção, envios AIS e registros de decisão devem ser vinculados a hash e timestamp.

### **RNF-S-04 – Conformidade**
O sistema deve estar em conformidade com:
- **NORMAM 401**  
- **LGPD**  
- Diretrizes ambientais IBAMA  
- Padrões de segurança Transpetro/Petrobras  

### **RNF-S-05 – Testes de Segurança**
- Pentest externo **a cada 6 meses**  
- SAST + DAST integrados ao CI/CD  
- Escaneamento contínuo de dependências

---

# 7. Manutenibilidade

### **RNF-M-01 – Modularidade**
A arquitetura deve separar claramente:
- Módulo de Previsão (IA)  
- Módulo de Dados Ambientais  
- Módulo AIS/Telemetria  
- Módulo de Dashboard  
- Módulo de Manutenção / IWS  

### **RNF-M-02 – Testabilidade**
O código-fonte deve possuir:
- **85% de cobertura de testes** para lógica crítica  
- Testes de carga para modelos preditivos

### **RNF-M-03 – Observabilidade**
O sistema deve expor métricas como:
- Latência das APIs  
- Taxa de ingestão AIS  
- Desempenho de modelos IA  
- Erros de integração  
- Consumo de combustível previsto vs. real  

Painéis devem ser configurados (Grafana) com alertas (Alertmanager/PagerDuty).

---

# 8. Portabilidade

### **RNF-P-01 – Adaptabilidade**
O sistema deve ser:
- Totalmente **containerizado (Docker)**  
- Orquestrado em **Kubernetes**  
- Compatível com múltiplas clouds (AWS, Azure, GCP)

### **RNF-P-02 – Instalabilidade**
O deploy deve ser:
- Automático via CI/CD  
- Com **zero downtime** (blue-green ou canary)

---
