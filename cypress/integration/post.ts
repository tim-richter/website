Cypress.on('window:before:load', (win) => {
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'warn');
});

describe('Post page', () => {
  const url = '/blog/how-to-use-typed-system-with-typescript';

  it('should render', () => {
    cy.visit(url);
    cy.get('header').should('be.visible');
  });

  it('should have no console errors or warnings', () => {
    cy.visit(url);
    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0);
      expect(win.console.warn).to.have.callCount(0);
    });
  });
});
