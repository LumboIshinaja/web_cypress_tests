import { validateSchema } from "../../support/schemaValidator";
import { userSchema } from "../../support/schemas/allSchemas";

describe('API GET Users Test Suite', () => {
  const baseEndpoint = '/users';  

  context('Page 1, Per Page 1', () => {
    let response;

    beforeEach(() => {
      cy.getRequest(baseEndpoint).then((res) => {
        response = res;
      });
    });

    it('Verify if GET /users with page=1 and per_page=1 returns status 200', () => {
      expect(response.status).to.eq(200);
    });

    it('Verify if GET /users with page=1 and per_page=1 returns a valid response schema', () => {
      validateSchema(response.body, userSchema);
    });

    it('Verify if GET /users with page=1 and per_page=1 returns valid content data', () => {
      const user = response.body.data[0];
      expect(user.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);  // Basic email validation
      expect(user.avatar).to.match(/^https?:\/\/.+$/);  // Avatar URL validation
    });

    it('Verify if GET /users with page=1 and per_page=1 returns an acceptable response time', () => {
      expect(response.duration).to.be.lessThan(1000);
    });
  });

  context('Pagination: Page 2, Per Page 2', () => {
    beforeEach(() => {      
      cy.getRequest(baseEndpoint, { page: 2, per_page: 2 }).as('paginationResponse');
    });

    it('Verify if GET /users with page=2 and per_page=2 returns 2 users for pagination', function() {
      expect(this.paginationResponse.body.data).to.have.length(2);
    });
  });

  context('Invalid Parameters: Page -1, Per Page -1', () => {
    beforeEach(() => {
      cy.getRequest(baseEndpoint, { page: -1, per_page: -1 }).as('invalidParamsResponse');
    });

    it('Verify if GET /users with page=-1 and per_page=-1 returns an empty data field', function() {
      expect(this.invalidParamsResponse.body.data).to.be.an('array').that.is.empty;
    });
  });
});
