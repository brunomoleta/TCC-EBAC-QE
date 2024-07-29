const specsConf = require("./specs.conf.js");
const reportersConf = require("./report.conf.js");
const hooksConf = require("./hooks.conf.js");

const generalConf = {
  maxInstances: 1,
  logLevel: "info",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  ...specsConf,
  ...reportersConf,
  ...hooksConf,
};
module.exports = generalConf;
