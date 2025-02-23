import FileUploadPage from '../../../pages/fileUploadPage';

describe('UI File Upload Test Suite', () => {
  const fileUploadPage = new FileUploadPage();

  beforeEach(() => {
    fileUploadPage.visit();
  });

  it('Verify if file upload button is visible and accepts file', () => {
    cy.get('#file-upload').should('be.visible');
  });

  it('Verify if file submit button is visible and accepts file', () => {
    cy.get('#file-submit').should('be.visible');
  });

  it('Verify if appropriate paragraph is displayed', () => {
    cy.get('.example h3').should('contain', 'File Uploader');
  });

  it('Verify if appropriate h3 is displayed', () => {
    cy.get('.example p').should('contain', 'Choose a file on your system and then click upload. Or, drag and drop a file into the area below.');
  });

  it('Verify if dragNdrop box is visible', () => {
    cy.get('.dz-success-mark').should('be.visible');
  });

  it('Verify if file upload works successfully', () => {
    fileUploadPage.uploadFile('uploadFile');  
    cy.get('.panel.text-center').should('be.visible');
    cy.get('.example').should('contain', 'File Uploaded!');
  });
  
});
