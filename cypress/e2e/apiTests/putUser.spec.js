import { userUpdateSchema } from "../../support/schemas/allSchemas";
import { validateSchema } from "../../support/schemaValidator";

describe('API PUT Update User Test Suite', () => {
  let userId;

  beforeEach(function() {
    cy.getUsers(1, 1).then((response) => {
      console.log(response);
      userId = response.body.data[0].id;
    });
  });

  it('Verify if PUT /users/{id} returns status 200', function() {
    cy.updateUser(userId).then((response) => {
      expect(response.status).to.eq(200);  
    });
  });

  it('Verify if PUT /users/{id} response matches the user update schema', function() {
    cy.updateUser(userId).then((response) => {        
      validateSchema(response.body, userUpdateSchema);      
    });
  });

  it('Verify if PUT /users/{id} updates the timestamp correctly', function() {
    const currentTimestamp = new Date();
  
    // Format the current timestamp to "HH:mm" format (hours and minutes)
    const expectedTimestamp = `${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}`;
  
    cy.updateUser(userId).then((response) => {
      // Convert the 'updatedAt' string from the response into a Date object
      const responseTimestamp = new Date(response.body.updatedAt);
      // Format the response's 'updatedAt' timestamp to "HH:mm" format (hours and minutes)
      const formattedResponseTimestamp = `${responseTimestamp.getHours()}:${responseTimestamp.getMinutes()}`;
  
      expect(formattedResponseTimestamp).to.eq(expectedTimestamp);
    });
  });
});
