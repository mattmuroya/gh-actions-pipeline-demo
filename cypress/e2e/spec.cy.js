describe('form submission', () => {
  it('submits form', () => {
    cy.visit('http://localhost:3000');
    cy.get('#submitted').should('not.exist');
    cy.get('#text').type('hello world');
    cy.get('form').submit();
    cy.get('#submitted').should('exist');
  });
});
