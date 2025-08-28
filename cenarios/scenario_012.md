# Scenario 012: Venda de Produto sem Estoque Inicial

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que existe o produto “Produto de teste 003” com código “PROD-003”  
E que a opção "Controle Estoque" está ativada para este produto  
E que o estoque inicial do produto é de 0 unidades  
Quando realizo uma venda de 1 unidade do produto “Produto de teste 003”  
E o sistema preenche automaticamente as informações de pagamento  
E clico no botão “Salvar”  
Então a venda deve ser impedida  
E o sistema deve exibir a mensagem de erro "Estoque insuficiente"  
E o saldo do produto no estoque permanece 0 unidades

## Resultado Obtido
❌ Falha
- Sistema permitiu a venda, não exibiu a mensagem e o estoque ficou negativo

## Observações
- Revisar validação de estoque zero.

## Evidências
![12 falhado](https://github.com/user-attachments/assets/a269c802-951c-4690-b411-ab85aebfb2a7)
