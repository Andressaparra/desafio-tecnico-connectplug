  it('Deve cadastrar um novo produto chamado Produto 002 com Controle de Estoque Desativado', () => {
    cy.visit('https://connectplug.com.br/sistema/produtos'); // Vai para a página de produtos
    cy.contains('Novo Produto').click(); // Clica no botão de cadastro

    // Preenche o nome
    cy.get('#name').type('Produto 002');

    // Seleciona a categoria
    cy.get('#select2-id_category-container').click();
    cy.xpath("//li[contains(text(), 'Pizza')]").click();

    // Define o preço
    cy.get('#value').type('25,00');

    // Seleciona o Controle de Estoque
    cy.get('select[name="controle-estoque"]').select('Desativado');

    // Salvar
    cy.contains('Salvar').click();
  });

});
