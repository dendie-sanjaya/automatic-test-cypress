const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    defaultCommandTimeout: 10000,
    env: {
      baseUrl: 'https://app.sbiz-app.my.id/',
      loginEmail: 'admin',
      loginPassword: '1234',  
    },  
  },
})

