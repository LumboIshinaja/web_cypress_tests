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

// cypress/support/commands.js

// cypress/support/commands.js

// Refactor for GET request, default method is 'GET'
Cypress.Commands.add('getRequest', (endpoint, params = { page: 1, per_page: 1 }, headers = {}) => {
  const requestOptions = {
    method: 'GET',  // Default method for GET request
    url: `${Cypress.config('baseUrl')}${endpoint}`,
    qs: params,  // Use the params object for query string
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  return cy.request(requestOptions);
});

Cypress.Commands.add('postRequest', (endpoint, data) => {
  const requestOptions = {
    method: 'POST',  // Default method for POST request
    url: `${Cypress.config('baseUrl')}${endpoint}`,  // Using the base URL from Cypress config
    body: data,  // Data for creating the user
    headers: {
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,  // To prevent failure on non-2xx status codes
  };

  return cy.request(requestOptions);
});


Cypress.Commands.add('putRequest', (endpoint, data = {}) => {
  const requestOptions = {
    method: 'PUT',  // Default method for PUT request
    url: `${Cypress.config('baseUrl')}${endpoint}`,
    body: data,  // Use the data provided or an empty object
    headers: {
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,  // To prevent failure on non-2xx status codes
  };

  return cy.request(requestOptions);
});

Cypress.Commands.add('patchRequest', (endpoint, data = {}) => {
  const requestOptions = {
    method: 'PATCH',  // Default method for PATCH request
    url: `${Cypress.config('baseUrl')}${endpoint}`,
    body: data,  // Optional data for updating the user
    headers: {
      'Content-Type': 'application/json',
    },
    failOnStatusCode: false,  // To prevent failure on non-2xx status codes
  };

  return cy.request(requestOptions);
});

Cypress.Commands.add('deleteRequest', (endpoint, headers = {}) => {
  const requestOptions = {
    method: 'DELETE',  // Default method for DELETE request
    url: `${Cypress.config('baseUrl')}${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    failOnStatusCode: false,  // To prevent failure on non-2xx status codes
  };

  return cy.request(requestOptions);
});


// File upload plugin
import 'cypress-file-upload';
