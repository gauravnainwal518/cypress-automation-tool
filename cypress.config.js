const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',

  env: {
    url: "https://rahulshettyacademy.com"
  },
  //with the help of retries we run failed test cases two times for confirmation its actual reason of failing know more about this from chatgpt
  retries: {
    runMode: 1,
 
  },
  projectId: "ft7946",

  video: true,
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
