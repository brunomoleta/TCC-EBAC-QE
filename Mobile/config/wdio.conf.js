const localConf = require("./local.conf.js");

function getConfig() {
  return localConf;
}

exports.config = getConfig();
