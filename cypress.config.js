const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    "baseUrl": "https://www.tftus.com",
    "defaultCommandTimeout": 8000,
    "chromeWebSecurity": false 
  },
});