const reportersConf = {
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./Mobile/reports/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
};

module.exports = reportersConf;
