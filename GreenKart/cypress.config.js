const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/TestCases/*.js',
    env: {
      url: '',
    },
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 30000,
  },
});
