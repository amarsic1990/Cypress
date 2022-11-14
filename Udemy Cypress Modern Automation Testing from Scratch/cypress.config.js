const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
  env: {
    url: 'https://rahulshettyacademy.com',
  },
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 30000,
});
