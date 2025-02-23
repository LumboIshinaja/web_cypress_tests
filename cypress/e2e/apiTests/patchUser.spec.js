import { userUpdateSchema } from "../../support/schemas/allSchemas";
import { validateSchema } from "../../support/schemaValidator";

describe('API PATCH Update User Test Suite', () => {
  let userId;

  beforeEach(function() {
    cy.getUsers(1, 1).then((response) => {
      userId = response.body.data[0].id;
    });
  });

  it('Verify if PATCH /users/{id} returns status 200', function() {
    cy.patchUser(userId).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Verify if PATCH /users/{id} response matches the user update schema', function() {
    cy.patchUser(userId).then((response) => {
      validateSchema(response.body, userUpdateSchema);
    });
  });

  it('Verify if PATCH /users/{id} updates the timestamp correctly', function() {
    const currentTimestamp = new Date();
    const expectedTimestamp = `${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}`;

    cy.patchUser(userId).then((response) => {
      const responseTimestamp = new Date(response.body.updatedAt);
      const formattedResponseTimestamp = `${responseTimestamp.getHours()}:${responseTimestamp.getMinutes()}`;

      expect(formattedResponseTimestamp).to.eq(expectedTimestamp);
    });
  });
});
