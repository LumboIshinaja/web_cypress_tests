describe('DELETE User Test Suite', () => {
  let userId;

  beforeEach(function() {
    cy.getUsers(1, 1).then((response) => {
      userId = response.body.data[0].id;
    });
  });

  it('Verify if DELETE /users/{id} returns status 204', function() {
    cy.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
