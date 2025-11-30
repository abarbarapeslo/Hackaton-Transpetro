---
sidebar_position: 6
title: Segurança
---

import Admonition from '@theme/Admonition';

## Introdução

&emsp;A segurança no **Nautilus** é essencial para proteger dados operacionais, ambientais e hidrodinâmicos da frota. Toda a arquitetura segue o princípio de **Secure by Design**, garantindo que informações críticas — como histórico de fouling, consumo, rotas e parâmetros de navegação — sejam tratadas com confidencialidade, integridade e disponibilidade.

---

## Princípios Fundamentais

### Confidencialidade
- Garantir que somente usuários autorizados (COT, Engenharia, Eficiência Energética) acessem dados operacionais dos navios.  
- Comunicação entre serviços e dashboard sempre com **TLS 1.3**.  
- Segredos e credenciais armazenados em **Secret Manager** (não ficam no código).  
- Controle de acesso baseado em perfis internos da Transpetro.

### Integridade
- Garantir que dados de viagens, consumo, desempenho e fouling não sejam alterados de forma indevida.  
- Validação de entradas nas APIs evita valores incoerentes ou malformados.  
- Logs estruturados e auditáveis para rastrear qualquer modificação.

### Disponibilidade
- Infraestrutura em Kubernetes com **alta disponibilidade**.  
- Escalonamento automático dos serviços do Nautilus.  
- Backups automatizados do banco de dados e recuperação rápida.  
- Proteção nativa contra sobrecarga e falhas de serviços.

---

## Práticas de Segurança Implementadas

### Controle de Acesso
- Acesso segmentado por áreas:  
  - **Carlos:** alertas e monitoramento operacional.  
  - **Rafael:** tendências e dados técnicos para manutenção.  
  - **Ana:** emissões, consumo e KPIs energéticos.  
- Autenticação integrada ao sistema corporativo.

### Criptografia
- **TLS 1.3** para tráfego interno e externo.  
- **Criptografia em repouso** para dados armazenados (AES-256).

### Gestão de Segredos
- Senhas, chaves e tokens mantidos em armazenamento seguro.  
- Rotação automática de credenciais críticas.

### Validação de Dados
- Todas as APIs do Nautilus validam entradas para evitar:  
  - valores impróprios para hidrodinâmica,  
  - cargas malformadas,  
  - uso indevido de endpoints.

### Logs e Auditoria
- Logs estruturados em JSON.  
- Rastreabilidade total de eventos críticos.  
- Sem dados sensíveis de colaboradores nos logs.

---

## Mitigação de Riscos Comuns (OWASP Resumido)

- **Access Control:** endpoints só retornam dados autorizados.  
- **Injection:** ORM e validações bloqueiam comandos maliciosos.  
- **Security Misconfiguration:** infraestrutura definida por código (Terraform).  
- **Integrity Failures:** pipelines e imagens passam por checagem de segurança.  

---

## Resultado

A camada de segurança do Nautilus garante que:

- dados operacionais são protegidos,  
- previsões e análises são confiáveis,  
- o sistema permanece disponível para o COT, Engenharia e Eficiência,  
- e toda a operação se mantém alinhada às normas da Transpetro e requisitos regulatórios.

---
