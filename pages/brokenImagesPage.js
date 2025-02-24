class BrokenImagesPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/broken_images');
  }

  checkImages() {
    let failedCount = 0;  // Track the number of failed images

    // Loop through all the images on the page
    cy.get('img').each(($img) => {
      cy.wrap($img)
        .should('have.prop', 'naturalWidth')  // Ensure 'naturalWidth' exists
        .and('be.gt', 0)  // Check that the image width is greater than 0
        .then((naturalWidth) => {
          if (naturalWidth === 0) {
            failedCount++;  // Increment the counter if the image is broken
          }
        });
    }).then(() => {
      // After checking all images, log the results
      cy.log(`Number of broken images: ${failedCount}`);
      // Only perform the assertion after the loop has finished
      expect(failedCount).to.be.eq(0);  // Fail the test if any images are broken
    });
  }
}

export default BrokenImagesPage;
