describe('Cadastro de Produtos - ConnectPlug', () => {

  it('Deve cadastrar um novo produto chamado Produto 001 com Controle de Estoque Ativado', () => {
    cy.visit('https://connectplug.com.br/sistema/produtos'); // Vai para a página de produtos
    cy.contains('Novo Produto').click(); // Clica no botão de cadastro

    // Preenche o nome
    cy.get('#name').type('Produto 001');

    // Seleciona a categoria
    cy.get('#select2-id_category-container').click();
    cy.xpath("//li[contains(text(), '2 - Refrigerantes')]").click();

    // Define o preço
    cy.get('#value').type('10,00');

    // Seleciona o Controle de Estoque
    cy.get('select[name="controle-estoque"]').select('Ativado');

    // Salvar
    cy.contains('Salvar').click();
  });
