import AddRemoveElementsPage from '../../../pages/addRemElemPage';

describe('UI Add/Remove Elements Test Suite', () => {
  const addRemoveElementsPage = new AddRemoveElementsPage();

  beforeEach(() => {
    addRemoveElementsPage.visit();
  });

  it('Verify if no element is present before adding', () => {
    cy.get('button[onclick="deleteElement()"]').should('not.exist');
  });

  it('Verify if element is added successfully', () => {
    addRemoveElementsPage.clickAddElement();
    cy.get('button[onclick="deleteElement()"]').should('be.visible');
  });

  it('Verify if element is removed successfully', () => {
    addRemoveElementsPage.clickAddElement();
    cy.get('button[onclick="deleteElement()"]').should('be.visible');
    addRemoveElementsPage.clickDeleteElement();
    cy.get('button[onclick="deleteElement()"]').should('not.exist');
  });
});
