// https://docs.cypress.io/api/introduction/api.html

describe('E2E app tests', () => {
  it('Check starting routes and navigating between', () => {
    cy.visit('/');
    cy.url().should('include', '/books');

    cy.get('[data-test=authors]').click();
    cy.url().should('include', '/authors');
    cy.get('[data-test=add-author]').click();
    cy.url().should('include', '/newauthors');

    cy.get('[data-test=books]').click();
    cy.url().should('include', '/books');

    cy.get('[data-test=add-book]').click();
    cy.url().should('include', '/newbook');
  });

  it('Create a book and an author', () => {
    cy.visit('/');
    cy.get('[data-test=authors]').click();
    cy.get('[data-test=add-author]').click();
    cy.get('[data-test=name]').type('TEST_AUTHOR');
    cy.get('[data-test=ok').click();
    cy.get('[data-test=table-row]').should('have.text', 'TEST_AUTHOR');

    cy.get('[data-test=books]').click();
    cy.get('[data-test=add-book]').click();
    cy.get('[data-test=title]').type('TEST_TITLE');
    cy.get('[data-test=ok').click();
    cy.get('[data-test=table-row]').should('have.text', 'TEST_TITLE');
  });
});
