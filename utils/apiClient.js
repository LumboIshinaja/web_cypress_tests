const apiClient = {
  request: (method, endpoint, body = null, headers = {}) => {
    const requestOptions = {
      method,
      url: `${Cypress.config('baseUrl')}${endpoint}`, // Using Cypress.config('baseUrl')
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body,
    };

    return cy.request(requestOptions);
  },

  post: (endpoint, body, headers = {}) => apiClient.request('POST', endpoint, body, headers),
  put: (endpoint, body, headers = {}) => apiClient.request('PUT', endpoint, body, headers),
  delete: (endpoint, headers = {}) => apiClient.request('DELETE', endpoint, null, headers),
  get: (endpoint, headers = {}) => apiClient.request('GET', endpoint, null, headers),
};

export default apiClient;
