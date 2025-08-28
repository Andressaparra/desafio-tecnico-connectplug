# Scenario 010: Venda com Produtos de Diferentes Configurações de Controle de Estoque

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que existe o produto “Produto de teste 001” com código “PROD-001” com estoque 18 unidades e controle de estoque ativado  
E que existe o produto “Produto de teste 002” com código “PROD-002” com estoque 10 unidades e controle de estoque desativado  
Quando realizo uma venda de 5 unidades do produto “Produto de teste 001” e 10 unidades do produto “Produto de teste 002”  
E seleciono o cliente “Consumidor Final - Padrão”  
E o sistema preenche automaticamente as informações de pagamento  
E clico no botão “Salvar”  
Então a venda deve ser registrada com sucesso  
E o saldo do produto “Produto de teste 001” deve ser reduzido para 13 unidades  
E o saldo do produto “Produto de teste 002” deve permanecer zerado

## Resultado Obtido
✅ Sucesso

## Observações

## Evidências
![10](https://github.com/user-attachments/assets/aa5261a5-4827-444d-942e-1facacdce811)
