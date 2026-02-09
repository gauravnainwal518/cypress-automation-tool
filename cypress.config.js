
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require(
  "@badeball/cypress-cucumber-preprocessor/esbuild"
);

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

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
   //specPattern: 'cypress/integration/examples/*.js'  //this is for normal tests
   //this is fo cucumber framework
    specPattern: 'cypress/integration/examples/BDD/*.feature', 
    setupNodeEvents
  },
});
