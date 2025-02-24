import { userUpdateSchema } from "../../support/schemas/allSchemas";
import { validateSchema } from "../../support/schemaValidator";

describe('API PATCH Update User Test Suite', () => {
  let userId;
  let patchResponse;

  beforeEach(function() {
    const endpoint = '/users';

    // Get user data
    cy.getRequest(endpoint).then((response) => {
      userId = response.body.data[0].id;  // Get user ID for updating
    });

    // Send PATCH request
    cy.patchRequest(`/users/${userId}`).then((response) => {
      patchResponse = response;  // Store the response for later use
    });
  });

  it('Verify if PATCH /users/{id} returns status 200', function() {
    expect(patchResponse.status).to.eq(200);  // Assert status
  });

  it('Verify if PATCH /users/{id} response matches the user update schema', function() {
    validateSchema(patchResponse.body, userUpdateSchema);  // Validate schema for PATCH response
  });

  it('Verify if PATCH /users/{id} updates the timestamp correctly', function() {
    const currentTimestamp = new Date();
    const expectedTimestamp = `${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}`;

    const responseTimestamp = new Date(patchResponse.body.updatedAt);
    const formattedResponseTimestamp = `${responseTimestamp.getHours()}:${responseTimestamp.getMinutes()}`;

    expect(formattedResponseTimestamp).to.eq(expectedTimestamp);  // Assert timestamp
  });
});
