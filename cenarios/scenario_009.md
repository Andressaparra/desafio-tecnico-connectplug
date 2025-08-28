# Scenario 009: Venda com Estoque Insuficiente (Controle Ativado)

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que existe o produto “Produto de teste 001” com código “PROD-001”  
E que a opção "Controle Estoque" está ativada para este produto  
E que o estoque inicial do produto é de 18 unidades  
Quando realizo uma venda de 20 unidades do produto “Produto de teste 001”  
E o sistema preenche automaticamente as informações de pagamento  
E clico no botão “Salvar”  
Então a venda deve ser impedida  
E o sistema deve exibir a mensagem de erro "Estoque insuficiente"  
E o saldo do produto no estoque permanece 18 unidades

## Resultado Obtido
❌ Falha
- Sistema permitiu a venda ou não exibiu a mensagem corretamente.

## Observações
- Necessário revisar validação de estoque no sistema.

## Evidências

