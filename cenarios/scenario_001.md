# Scenario 001: Cadastrar um produto com Controle de Estoque ATIVADO

## Cenário
Dado que estou logado no sistema ConnectPlug com credenciais válidas  
Quando navego para a página de produtos na url “https://connectplug.com.br/sistema/produtos”  
E clico em "Novo Produto"  
E preencho o campo "Nome do Produto" com “Produto de Teste 01”  
E preencho o campo "Código (SKU)” como “PROD-001”  
E defino a categoria como “Refrigerantes”  
E coloco o valor da venda “10,00”  
E seleciono "Sim" no campo "Controle Estoque"  
E seleciono o botão “Salvar”  
Então o produto deve ser cadastrado com sucesso  
E o "Controle Estoque" deve estar ativado

## Resultado Obtido
✅ Sucesso

## Observações

## Evidências
