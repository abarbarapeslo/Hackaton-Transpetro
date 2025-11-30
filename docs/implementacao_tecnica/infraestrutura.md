---
sidebar_position: 2
title: Plano de Infraestrutura
---

## Introdução

A infraestrutura é a base do sistema, projetada para garantir alta disponibilidade, escalabilidade, segurança e portabilidade. As decisões técnicas seguem os requisitos funcionais e não-funcionais (disponibilidade 99.9%, conformidade LGPD, portabilidade via containers).

---

## Provedor Cloud

O MVP será hospedado em um grande provedor (AWS, GCP ou Azure), mantendo a arquitetura cloud-agnostic por meio de containers e Kubernetes gerenciado.

---

## Camada de Computação

- **Orquestração:** Kubernetes gerenciado (EKS/GKE/AKS).  
- **Alternativa:** Serverless containers (Fargate/Cloud Run) para serviços pontuais.  
- **Decisão:** começar com Managed Kubernetes para balancear controle e portabilidade.

---

## Armazenamento e Dados

- **Banco relacional gerenciado (Postgres):** Multi-AZ, backups e PITR.  
- **Cache gerenciado (Redis):** leituras frequentes e baixa latência.  
- **Object Storage (S3/GCS):** modelos, artifacts e backups versionados.

---

## Rede e Segurança

- **VPC com subnets privadas e públicas.**  
- **API Gateway** centraliza autenticação, rate-limit e proteção (WAF/DDoS).  
- **TLS 1.3**, criptografia em repouso (AES-256), Secrets Manager e IAM com princípio de menor privilégio.  
- **VPC Endpoints / PrivateLink** para reduzir egress público.

---

## CI/CD e Infra as Code

- **CI/CD:** GitHub Actions (build, testes, scan, deploy).  
- **Infra:** Terraform com backend remoto e locking.  
- **Imagens:** registry privado + scanning; deploys rolling/canary.

---

## Observabilidade e Operações

- **Logs centralizados** (Fluentd → ELK/Cloud Logging).  
- **Métricas:** Prometheus + Grafana; **Tracing:** OpenTelemetry.  
- **Alertas e runbooks** para on-call.

---

## Resiliência e Recuperação

- Multi-AZ, backups automáticos e testes de DR com objetivos RTO/RPO definidos.  
- Autoscaling (HPA/VPA) e políticas de node pools (spot + on-demand) para custo-eficiência.

---

## Governança e Compliance

- Proteção de dados conforme LGPD: masking, retenção e auditoria de acessos.  
- Políticas de segurança automatizadas (IaC), revisão de dependências e pipeline de segurança.

---
