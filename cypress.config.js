
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'All Cypress Basic Codes',
    embeddedScreenshots: true,
    saveAllAttempts: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: 'https://rahulshettyacademy.com/client',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);   //For HTML Report
    },
    screenshotOnRunFailure: true,
    experimentalRunAllSpecs: true
  },
  video: true,
  includeShadowDom: true

})

