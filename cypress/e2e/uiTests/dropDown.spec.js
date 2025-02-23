import DropdownPage from '../../../pages/dropDownPage';

describe('UI Dropdown Test Suite', () => {
  const dropdownPage = new DropdownPage();

  beforeEach(() => {
    dropdownPage.visit();
  });

  it('Verify if appropriate h3 text is displayed', () => {
    cy.get('.example h3').should('have.text', 'Dropdown List'); 
  });

  it('Verify if appropriate h3 text is displayed', () => {
    cy.get('#dropdown').find("option:disabled").should('have.text', 'Please select an option'); 
  })

  it('Verify if selecting an option from the dropdown works', () => {
    dropdownPage.selectOption('1');
    cy.get('#dropdown').should('have.value', '1');
  });

  it('Verify if selecting option "2" works', () => {
    dropdownPage.selectOption('2');
    cy.get('#dropdown').should('have.value', '2'); 
  });
});
