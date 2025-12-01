---
sidebar_position: 5
title: Back End
---

## Introdução

&emsp;A arquitetura de backend do **Nautilus / Transpetro** é composta por um conjunto de microserviços independentes, escritos em **Python**. Essa abordagem busca garantir **alta escalabilidade, resiliência e manutenibilidade**, permitindo que equipes desenvolvam, deployem e escalem cada domínio de negócio de forma autônoma.

&emsp;Este documento estabelece o **stack tecnológico padrão**, a **estrutura de diretórios** e os **padrões de comunicação** que devem ser seguidos por todos os serviços backend para manter coesão técnica e qualidade em todo o ecossistema.

---

## Stack Tecnológico Core

&emsp;Para garantir consistência e produtividade, os serviços backend devem adotar o seguinte stack:

| Componente | Tecnologia / Padrão recomendado | Vantagem principal |
| :--- | :--- | :--- |
| **API Framework** | **FastAPI** | Alta performance, suporte nativo a async, documentação automática e validação integrada. |
| **ORM (DB)** | **SQLAlchemy 2.0+ (async)** | Padrão da comunidade, produtivo e com suporte assíncrono. |
| **Migrações** | **Alembic** | Versionamento seguro do esquema de banco de dados. |
| **Validação / Serialização** | **Pydantic** | Integração nativa com FastAPI; fonte de verdade para OpenAPI. |
| **Autenticação** | **JWT (OAuth2)** | Padrão stateless e seguro para microserviços. |
| **Gerenciamento de dependências** | **Poetry** | Builds reprodutíveis e gerenciamento moderno de pacotes. |
| **Testes** | **Pytest** | Padrão da comunidade Python para testes unitários e de integração. |

---

## Detalhamento dos Componentes

### API Framework — FastAPI
&emsp;FastAPI é a base de todos os nossos serviços. Seu alto desempenho e suporte a operações assíncronas (`async/await`) são fundamentais para construir uma plataforma responsiva e escalável, capaz de lidar com um grande volume de I/O (consultas ao banco, chamadas a APIs externas).

### Interação com Banco de Dados — SQLAlchemy (async)
&emsp;A comunicação com o banco (PostgreSQL recomendado) é feita via **SQLAlchemy** com engine assíncrono (`create_async_engine`). As tabelas são mapeadas em classes Python (models), facilitando a manutenção e segurança do código.

### Validação de Dados — Pydantic
&emsp;Pydantic define schemas claros para inputs e outputs da API. Boas práticas:
- modelos de **Request** e **Response** separados;
- evitar exposição de campos internos sensíveis;
- usar `Field(...)` com descrições para gerar documentação rica.

### Migrações — Alembic
&emsp;Toda alteração no modelo de dados (SQLAlchemy) deve ser acompanhada por um script de migração gerado via Alembic e versionado no repositório.

### Autenticação e Autorização — JWT / OAuth2
&emsp;A autenticação é baseada em **JWT** emitidos pelo Accounts Service. Todos os requests entre serviços e do cliente devem conter o token no header `Authorization: Bearer <token>`. Cada serviço valida assinatura e escopos antes de processar a requisição.

### Gerenciamento de Dependências — Poetry
&emsp;Padronizamos o uso do **Poetry** (`pyproject.toml` + `poetry.lock`) para garantir ambientes reprodutíveis entre dev/test/prod.

### Testes — Pytest
&emsp;A qualidade do software é assegurada por testes automatizados com **Pytest**. Utilize o `TestClient` do FastAPI para testes de integração sem necessidade de servidor em execução.

---

## Estrutura de Diretórios Padrão

&emsp;Para consistência entre serviços, adote a estrutura abaixo:

```text
/service-name
├── /alembic/                # Scripts de migração do banco (Alembic)
├── /app/
│   ├── /api/                # Endpoints / Routers (camada de entrada)
│   ├── /core/               # Configurações centrais (settings, logger)
│   ├── /crud/               # Funções de acesso a dados (DB logic)
│   ├── /models/             # SQLAlchemy models (tabelas)
│   ├── /schemas/            # Pydantic schemas (Request/Response)
│   ├── /services/           # Regras de negócio / integrações externas
│   └── main.py              # Ponto de entrada do FastAPI
├── /tests/                  # Testes automatizados (Pytest)
├── pyproject.toml           # Dependências e configuração do Poetry
└── poetry.lock              # Lockfile de dependências
