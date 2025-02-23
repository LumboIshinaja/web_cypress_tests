class FileUploadPage {
    visit() {
      cy.visit('https://the-internet.herokuapp.com/upload');
    }
  
    uploadFile(fileName) {
      const fileInput = cy.get('#file-upload');
      const filePath = `${fileName}`;
      fileInput.attachFile(filePath);
      cy.get("[type='submit']").click();
    }    

}
  export default FileUploadPage;
  