# Scenario 011: Venda com Quantidade Zero (0)

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que existe o produto “Produto de teste 001” com código “PROD-001”  
E que o estoque inicial do produto é de 13 unidades  
Quando realizo uma venda de 0 unidades do produto “Produto de teste 001”  
E o sistema preenche automaticamente as informações de pagamento correspondentes a 0 unidades  
E clico no botão “Salvar”  
Então a venda não deve ser processada  
E o saldo do produto no estoque permanece 13 unidades

## Resultado Obtido
❌ Falha
- O sistema processou a venda e reduziu uma unidade do estoque

## Observações
- Revisar validação de quantidade mínima na venda.

## Evidências
