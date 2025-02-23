class AddRemoveElementsPage {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    }
  
    clickAddElement() {
      cy.get('button[onclick="addElement()"]').click(); 
    }
  
    clickDeleteElement() {
      cy.get('button[onclick="deleteElement()"]').click();
    }  
  }
  
  export default AddRemoveElementsPage;
  