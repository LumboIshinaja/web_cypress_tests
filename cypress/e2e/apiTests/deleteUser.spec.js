describe('API DELETE User Test Suite', () => {
  let userId;
  let deleteResponse;

  beforeEach(function() {
    cy.getRequest('/users').then((response) => {
      userId = response.body.data[0].id;  // Get user ID for deletion
    });

    // Send DELETE request
    cy.deleteRequest(`/users/${userId}`).then((response) => {
      deleteResponse = response;  // Store the response for assertions
    });
  });

  it('Verify if DELETE /users/{id} returns status 204', function() {
    expect(deleteResponse.status).to.eq(204);  // Assert status
  });
});
