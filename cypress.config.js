const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.spec.js',
    video: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {      
      config.baseUrl = 'https://reqres.in/api'; // Ensure this is set here

      return config;
    },
  },
});

