class CheckboxesPage {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/checkboxes');
    }
  
    toggleFirstCheckbox() {
      cy.get('input[type="checkbox"]').first().click(); // Toggle the first checkbox (check or uncheck)
    }
  }
  
  export default CheckboxesPage;
  