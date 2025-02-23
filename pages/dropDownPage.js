class DropdownPage {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/dropdown');  // Visit the dropdown page
    }
  
    selectOption(optionValue) {
      // Select an option from the dropdown by its value
      cy.get('#dropdown').select(optionValue);
    }
  }
  
  export default DropdownPage;
  