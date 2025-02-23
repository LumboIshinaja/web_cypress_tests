// cypress/support/index.js
import './commands';
// Custom commands
Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', '/api/login', { username, password }).as('loginRequest');
  });
  