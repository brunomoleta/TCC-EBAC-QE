const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );

  on("before:browser:launch", (browser = {}) => {
    // Update screenshot folder based on browser name
    const browserName = browser.name;
    config.screenshotsFolder = `UI/cypress/screenshots/${browserName}`;
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    supportFile: "UI/cypress/support/e2e.js",
    fixturesFolder: "UI/cypress/fixtures",
    screenshotsFolder: "UI/cypress/screenshots",
    baseUrl: "http://localhost:80",
    execTimeout: 8 * 1000,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportFilename: "[name]-result",
    html: true,
    reportDir: "UI/mochawesome-report",
  },
});
