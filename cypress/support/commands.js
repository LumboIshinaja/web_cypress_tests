// cypress/support/commands.js
Cypress.Commands.add('getUsers', (page = 1, per_page = 1) => {
    return cy.request({
      method: 'GET',
      url: '/users',
      qs: { page, per_page }
    });
});

Cypress.Commands.add('registerUser', (userData) => {
  return cy.request({
    method: 'POST',
    url: '/register',
    body: userData,
    failOnStatusCode: false  // So non-2xx statuses can be asserted in the test
  });
});

Cypress.Commands.add('updateUser', (id) => {
  return cy.request({
    method: 'PUT',
    url: `/users/${id}`
  });
});

Cypress.Commands.add('patchUser', (id) => {
  return cy.request({
    method: 'PATCH',
    url: `/users/${id}`
  });
});

Cypress.Commands.add('deleteUser', (id) => {
  return cy.request({
    method: 'DELETE',
    url: `/users/${id}`,
    failOnStatusCode: false  
  });
});

// File upload plugin
import 'cypress-file-upload';
