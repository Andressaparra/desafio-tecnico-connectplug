# Scenario 008: Realizar uma venda de um produto com controle de estoque desativado

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que já existe um produto cadastrado com saldo registrado  
Quando navego para a página de vendas através da url “https://connectplug.com.br/sistema/vendas”  
E clico em "Nova venda"  
E seleciono o cliente “Consumidor Final - Padrão”  
E adiciono o produto “Cod: PROD-002 - Produto de teste 002”  
E informo a quantidade de 2 unidades  
E o sistema preenche automaticamente as informações de pagamento com valor “20,00” e método de pagamento “Dinheiro” por default  
E seleciono o botão “Salvar”  
Então a venda deve ser registrada com sucesso  
E o sistema não deve atualizar o saldo do produto no estoque

## Resultado Obtido
✅ Sucesso

## Observações

## Evidências
![Venda realizada](../evidencias/scenario_008/screenshot1.png)
