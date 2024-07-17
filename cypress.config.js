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
  return config;
}

module.exports = defineConfig({
  e2e: {
    supportFile: "UI/cypress/support/e2e.js",
    baseUrl: "http://localhost:80",
    execTimeout: 8 * 1000,
    specPattern: "**/*.feature",
    setupNodeEvents,
  }
});