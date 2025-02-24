import CheckboxesPage from '../../../pages/checkboxPage';

describe('UI Checkboxes Test Suite', () => {
  const checkboxesPage = new CheckboxesPage();

  beforeEach(() => {
    checkboxesPage.visit();
  });

  it('Verify if the first checkbox is unchecked by default', () => {
    cy.get('input[type="checkbox"]').first().should('not.be.checked');
  });

  it('Verify if checking the first checkbox works correctly', () => {
    checkboxesPage.toggleFirstCheckbox();
    cy.get('input[type="checkbox"]').first().should('be.checked');
  });

  it('Verify if unchecking the first checkbox works correctly', () => {
    checkboxesPage.toggleFirstCheckbox(); // Check the checkbox first
    checkboxesPage.toggleFirstCheckbox(); // Then uncheck it
    cy.get('input[type="checkbox"]').first().should('not.be.checked');
  });
});
