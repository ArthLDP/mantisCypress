describe('Criar Tarefa no Mantis', () => {
  beforeEach(() => {
    // Visitar a página do Mantis
    cy.visit('https://mantis-prova.base2.com.br');
  });

  it('deve criar uma nova tarefa com sucesso', () => {
    // Login
    cy.get('input[name=username]').type('grupoMarrom');
    cy.get('input[type=submit]').click();
    cy.get('input[name=password]').type('123456');
    cy.get('input[type=submit]').click();

    // Esperar 8000 milisegundos para dar tempo para o site carregar
    cy.wait(8000);

    // Verificar login bem-sucedido
    cy.title().should('include', 'MantisBT');

    // Navegar para "Criar Tarefa"
    cy.get('.hidden-sm > .btn-group > .btn').click();

    // Selecionar categoria
    cy.get('#category_id').select(1); // Seleciona a primeira categoria disponível

    // Selecionar gravidade
    cy.get('#severity').select(1); // Seleciona a primeira gravidade disponível

    // Selecionar prioridade
    cy.get('#priority').select(1); // Seleciona a primeira prioridade disponível

    // Passo 6: Preencher campos do formulário
    cy.get('input[name=summary]').type('Resumo');
    cy.get('textarea[name=description]').type('Descrição');
    cy.get('textarea[name=steps_to_reproduce]').type('1 - teste, 2 - testando.');
    cy.get('textarea[name=additional_info]').type('Informações adicionais.');

    // Passo 7: Clicar em "Criar nova tarefa"
    cy.get('.widget-toolbox > .btn').click();

    // Resultado esperado: Verificar se a mensagem "Operação realizada com sucesso." é exibida
    cy.contains('Operação realizada com sucesso.').should('be.visible');
  });
});