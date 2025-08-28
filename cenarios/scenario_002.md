# Scenario 002: Cadastrar um produto com Controle de Estoque DESATIVADO

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
Quando navego para a página de produtos na url “https://connectplug.com.br/sistema/produtos”  
E clico em "Novo Produto"  
E preencho o campo "Nome do Produto" com “Produto de Teste 02”  
E preencho o campo "Código (SKU)” como “PROD-002”  
E defino a categoria como “Pizzas”  
E coloco o valor da venda “10,00”  
E seleciono "Não" no campo "Controle Estoque"  
E seleciono o botão “Salvar”  
Então o produto deve ser cadastrado com sucesso  
E o "Controle Estoque" deve estar desativado

## Resultado Obtido
✅ Sucesso

## Observações

## Evidências
![02](https://github.com/user-attachments/assets/4f9d8120-907c-4515-acc9-c499b032b82d)
