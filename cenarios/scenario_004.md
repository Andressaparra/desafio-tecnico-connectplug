# Scenario 004: Cadastrar saldo de um produto no estoque (Controle Desativado)

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
E que já existe um produto cadastrado  
Quando navego para a página de estoque através da url “https://connectplug.com.br/sistema/estoque”  
E utilizo a funcionalidade de "verificar" para consultar do Estoque “Estoque 1 (TESTE QA 10)”  
E seleciono o botão “Registrar entrada”  
E é aberta a tela Entrada de Estoque com o nome do estoque já preenchido por default  
E escolho o produto “Cod: PROD-002 - Produto de teste 002”  
E é exibida a mensagem “O produto selecionado está com o controle de estoque desativado.”  
E altero a quantidade do produto para 10,00  
Então o sistema deve exibir o saldo atual do produto  
E o saldo inicial deve ser registrado para uso em futuras vendas

## Resultado Obtido
✅ Sucesso

## Observações

## Evidências
![04](https://github.com/user-attachments/assets/9d394589-a306-4b2c-b3fe-597637bc4e57)
