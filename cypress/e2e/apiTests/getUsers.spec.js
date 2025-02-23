import { validateSchema } from "../../support/schemaValidator";
import { userSchema } from "../../support/schemas/allSchemas";

describe('API GET Users Test Suite', () => {

  context('Page 1, Per Page 1', () => {
    let response;

    beforeEach(() => {
      cy.getUsers(1, 1).then((res) => {
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
      // Check that the email is in the correct format (basic email validation)
      expect(user.email).to.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      // Check that the avatar is a valid URL (basic URL format validation)
      expect(user.avatar).to.match(/^https?:\/\/.+$/);
    });

    it('Verify if GET /users with page=1 and per_page=1 returns an acceptable response time', () => {
      expect(response.duration).to.be.lessThan(1000);
    });
  });

  context('Pagination: Page 2, Per Page 2', () => {
    beforeEach(() => {
      cy.getUsers(2, 2).as('paginationResponse');
    });

    it('Verify if GET /users with page=2 and per_page=2 returns 2 users for pagination', function() {
      expect(this.paginationResponse.body.data).to.have.length(2);
    });
  });

  context('Invalid Parameters: Page -1, Per Page -1', () => {
    beforeEach(() => {
      cy.getUsers(-1, -1).as('invalidParamsResponse');
    });

    it('Verify if GET /users with page=-1 and per_page=-1 returns an empty data field', function() {
      expect(this.invalidParamsResponse.body.data).to.be.an('array').that.is.empty;
    });
  });
});
