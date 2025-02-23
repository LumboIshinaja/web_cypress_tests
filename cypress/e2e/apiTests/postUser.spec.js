import { validateSchema } from "../../support/schemaValidator";
import { registerSchema } from "../../support/schemas/allSchemas";

describe('API POST Register Test Suite', () => {
  let registerData; 

  beforeEach(function() {
    cy.fixture('register').then((data) => {
      registerData = data;  
    });
  });

  context('Valid Registration', () => {
    beforeEach(function() {
      cy.registerUser(registerData[0]).as('validResponse');
    });

    it('Verify if response status is 200', function() {
      cy.get('@validResponse').then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('Verify if response schema is valid for successful registration', function() {
      cy.get('@validResponse').then((response) => {
        validateSchema(response.body, registerSchema);
      });
    });

    it('Verify if registration response time is acceptable', function() {
      cy.get('@validResponse').then((response) => {
        expect(response.duration).to.be.lessThan(1000);  // 1 second
      });
    });
    
    it('Verify if id is a positive integer', function() {
      cy.get('@validResponse').then((response) => {
        expect(response.body.id).to.be.a('number').and.to.be.greaterThan(0);
      });
    });    
  });

  context('Invalid Registration', () => {
    beforeEach(function() {
      cy.registerUser(registerData[1]).as('invalidResponse');
    });

    it('Verify if response status is 400 for invalid registration', function() {
      cy.get('@invalidResponse').then((response) => {
        expect(response.status).to.eq(400);
      });
    });

    it('Verify if response contains the error message for invalid registration', function() {
      cy.get('@invalidResponse').then((response) => {
        expect(response.body).to.have.property('error', 'Note: Only defined users succeed registration');
      });
    });

    it('Verify if missing fields return an error', function() {
      cy.registerUser({}).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error');
      });
    });
  });
});
