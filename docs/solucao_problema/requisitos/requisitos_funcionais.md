---
sidebar_position: 1
title: Requisitos Funcionais
---

## Contextualização  

Um **Requisito Funcional (RF)** descreve **o que o sistema deve fazer** para cumprir seu propósito dentro do ecossistema da Transpetro.  
No caso do **Nautilus**, esses requisitos representam as funcionalidades essenciais para monitorar, analisar e prever a bioincrustação, apoiando eficiência energética, manutenção preditiva e conformidade regulatória (ex.: **NORMAM 401**).

Requisitos bem estruturados permitem:
- **Guiar o desenvolvimento** dos módulos essenciais.  
- **Garantir previsibilidade** e aderência ao problema real.  
- **Reduzir ambiguidade**, facilitando validação e auditorias técnicas.

---

# **Módulo 1: Aquisição e Integração de Dados (RF-DATA)**

### **RF-DATA-001: Ingestão de Dados AIS**
O sistema deve ingerir automaticamente dados AIS das embarcações da Transpetro, considerando que:
- O processo deve ser contínuo (streaming) ou em janelas horárias.  
- Devem ser capturados: Latitude, Longitude, SOG, COG, Timestamp, Draft e Voyage ID.  
- Dados inconsistentes (SOG=0 com movimento esperado, ponteiros inválidos etc.) devem ser marcados para tratamento posterior.

---

### **RF-DATA-002: Integração com Dados Ambientais (Copernicus)**
O sistema deve integrar variáveis ambientais para contextualizar o desempenho hidrodinâmico, considerando que:
- Devem ser consumidos dados do modelo **GLOBAL_MULTIYEAR_PHY_001_030** (Copernicus Marine).  
- As variáveis mínimas são: Temperatura da água, Correntes superficiais, Densidade e Salinidade.  
- A interpolação deve ocorrer por **coordenada + timestamp**.

---

### **RF-DATA-003: Importação de Inspeções IWS**
O sistema deve processar automaticamente os relatórios de inspeção subaquática (IWS), considerando que:
- O upload aceita **PDF, JPG e PNG** (máx. 15 MB).  
- O sistema deve extrair: percentual de bioincrustação por zona, condição visual e histórico de reparos.  
- Deve relacionar o IWS com a embarcação e com o período operacional correspondente.

---

### **RF-DATA-004: Consumo de Combustível**
O sistema deve integrar dados de consumo por viagem/evento, considerando que:
- São capturados: Quantidade consumida, Timestamp, Voyage ID e Tipo de combustível.  
- O consumo deve ser sincronizado com AIS para cálculo de eficiência.

---

# **Módulo 2: Análise e Previsão de Bioincrustação (RF-ANL)**

### **RF-ANL-001: Cálculo do Índice de Fouling (Fouling Score)**
O sistema deve calcular automaticamente um **índice de bioincrustação (0–100)**, considerando:
- Perdas de velocidade x potência entregue.  
- Degradação progressiva observada entre IWS.  
- Condições ambientais normalizadas.  
- A atualização deve ocorrer **diariamente**.

---

### **RF-ANL-002: Modelo de Predição de Fouling**
O sistema deve prever a evolução da bioincrustação nas próximas semanas, considerando que:
- O modelo deve utilizar regressão temporal e variáveis ambientais.  
- A previsão mínima deve cobrir **30 dias** com atualização diária.  
- O sistema deve calcular o impacto previsto em consumo e emissões (CO₂).

---

### **RF-ANL-003: Análise de Impacto Energético**
O sistema deve calcular o impacto direto da bioincrustação sobre:
- Consumo de combustível por viagem.  
- Perda de eficiência energética (EEXI / CII).  
- Emissões adicionais de CO₂ (ton/viagem).  

Resultados devem ser apresentados no dashboard com base em dados reais + previsões.

---

# **Módulo 3: Alertas, Monitoramento e Operações (RF-MON)**

### **RF-MON-001: Dashboard de Estado do Casco**
O usuário deve visualizar em tempo real:
- Fouling atual (score, gráfico temporal).  
- Perdas estimadas de consumo.  
- Emissões adicionais.  
- Condição por zonas do casco (quando houver IWS).  

---

### **RF-MON-002: Alertas Operacionais**
O sistema deve emitir alertas automáticos sempre que:
- O fouling ultrapassar níveis definidos na **NORMAM 401**.  
- A previsão indicar ultrapassagem futura do limite.  
- Houver perda energética acima de 8%.  
- Houver inconsistência entre AIS e desempenho esperado.

Alertas devem ser enviados via:
- Dashboard  
- E-mail  
- Push notification (se integrado)

---

### **RF-MON-003: Linha do Tempo Operacional da Embarcação**
O sistema deve apresentar a evolução do casco ao longo das operações, exibindo:
- Eventos operacionais (paradas, viagens, docagens).  
- Variação do fouling.  
- Consumo e impacto energético.

---

# **Módulo 4: Planejamento e Manutenção (RF-MAN)**

### **RF-MAN-001: Recomendação de Janela Ótima de Limpeza**
O sistema deve sugerir o melhor momento para limpeza subaquática, considerando:
- Evolução do fouling histórico.  
- Previsão futura (modelo RF-ANL-002).  
- Custo/benefício estimado (economia vs. intervenção).  
- Restrições operacionais da Transpetro.

---

### **RF-MAN-002: Relatório para NORMAM 401**
O sistema deve gerar relatórios específicos de conformidade, contendo:
- Fouling atual por zona.  
- Histórico das últimas medições.  
- Impacto energético e emissões.  
- Recomendações automáticas.  

O relatório deve ser gerado em **PDF** e **visualizado no dashboard**.

---

# **Módulo 5: Gestão e Segurança do Sistema (RF-ADM)**

### **RF-ADM-001: Perfis de Acesso**
O sistema deve possuir diferentes perfis:
- Operador do COT (Centro de Operações)  
- Engenheiro Naval / Manutenção  
- Time ESG / Eficiência Energética  
- Administrador do sistema  

Cada perfil deve ter permissões específicas.

---

### **RF-ADM-002: Logs e Auditoria**
O sistema deve registrar:
- Acesso de usuários  
- Alterações realizadas  
- Uploads de IWS  
- Geração de relatórios  
- Alertas emitidos  

Logs devem ser imutáveis e exportáveis.

---

### **FR-ADM-003: Alta Disponibilidade e Resiliência**
- O sistema deve operar com disponibilidade mínima de **99,5%**.  
- Deve possuir mecanismos de fallback caso alguma fonte de dados esteja indisponível.  

---

