import BrokenImagesPage from '../../../pages/brokenImagesPage';

describe('UI Broken Images Test Suite', () => {
  const brokenImagesPage = new BrokenImagesPage();

  beforeEach(() => {
    brokenImagesPage.visit(); // Visit the page before each test
  });

  it('Verify if there are any broken images on the page', () => {
    brokenImagesPage.checkImages(); // Run the image check
  });
});
