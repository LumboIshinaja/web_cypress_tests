import { userUpdateSchema } from "../../support/schemas/allSchemas";
import { validateSchema } from "../../support/schemaValidator";

describe('API PUT Update User Test Suite', () => {
  let userId;
  let getUserResponse;
  let putResponse;

  beforeEach(function() {
    const endpoint = '/users';

    cy.getRequest(endpoint).then((response) => {
      getUserResponse = response;
      userId = getUserResponse.body.data[0].id;

      cy.putRequest(`/users/${userId}`).then((response) => {
        putResponse = response;  // Store the PUT response for later use
      });
    });
  });

  it('Verify if PUT /users/{id} returns status 200', function() {
    expect(putResponse.status).to.eq(200);
  });

  it('Verify if PUT /users/{id} response matches the user update schema', function() {
    validateSchema(putResponse.body, userUpdateSchema);
  });

  it('Verify if PUT /users/{id} updates the timestamp correctly', function() {
    const currentTimestamp = new Date();
    const expectedTimestamp = `${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}`;

    const responseTimestamp = new Date(putResponse.body.updatedAt);
    const formattedResponseTimestamp = `${responseTimestamp.getHours()}:${responseTimestamp.getMinutes()}`;

    expect(formattedResponseTimestamp).to.eq(expectedTimestamp);
  });
});
