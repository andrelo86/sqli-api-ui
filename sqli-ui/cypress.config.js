const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  reporter: "mochawesome",  

  reporterOptions: {
    overwrite: false,
    html: true,
    json: true,
    reportDir: "cypress/reports",
  },

  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: false,
  downloadsFolder: "cypress/downloads",  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.google.com'
  },
});
