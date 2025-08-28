# 📌 desafio-tecnico-connectplug

Este repositório contém os **cenários de teste em BDD**, automações com **Cypress** e **evidências de execução dos testes** desenvolvidos para o desafio técnico da **ConnectPlug**.

---

## 📂 Estrutura do projeto
- **cenarios/** → arquivos `.feature` com os cenários escritos em BDD (Gherkin).  
- **cypress/** → scripts de automação em Cypress.  
- **evidencias/** → prints da execução dos testes.  
- **README.md** → documentação do projeto.  

---

📝 **Cenários implementados**

## Cenários Implementados (ConnectPlug)

| Cenário | Título                                                            | Status  |

| 001     | Cadastrar Produto 01 com Controle de Estoque Ativado              | ✅ Pass |
| 002     | Cadastrar Produto 02 com Controle de Estoque Desativado           | ✅ Pass |
| 003     | Cadastrar saldo de um produto no estoque (PROD-001)               | ✅ Pass | 
| 004     | Cadastrar saldo de um produto no estoque (PROD-002)               | ✅ Pass | 
| 005     | Consultar saldo de um produto (controle ativo)                    | ✅ Pass | 
| 006     | Consultar saldo de um produto (controle desativado)               | ✅ Pass | 
| 007     | Realizar venda (controle ativo)                                   | ✅ Pass | 
| 008     | Realizar venda (controle desativado)                              | ✅ Pass |
| 009     | Venda com Estoque Insuficiente (Controle Ativado)                 | ❌ Fail |
| 010     | Venda com Produtos de Diferentes Configurações                    | ✅ Pass |
| 011     | Venda com Quantidade Zero (0)                                     | ❌ Fail | 
| 012     | Venda de Produto sem Estoque Inicial                              | ❌ Fail |

📊 **Evidências**
Na pasta evidencias/ estão disponíveis:
Prints de tela da execução.

✅ **Tecnologias utilizadas**
Cypress
Gherkin (BDD)

👩‍💻 Autora
Projeto desenvolvido por Andressa Parra para o desafio técnico ConnectPlug.
