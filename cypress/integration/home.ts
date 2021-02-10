Cypress.on('window:before:load', (win) => {
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'warn');
});

describe('Homepage', () => {
  it('should render', () => {
    cy.visit('/');
    cy.get('header').should('be.visible');
  });

  it('should have no console errors or warnings', () => {
    cy.visit('/');
    cy.window().then((win) => {
      expect(win.console.error).to.have.callCount(0);
      expect(win.console.warn).to.have.callCount(0);
    });
  });
});

export {};
