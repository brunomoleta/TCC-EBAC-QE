const generalConf = require("./general.conf.js");
const localConf = {
  runner: "local",
  port: 4723,
  capabilities: [
    {
      platformName: "Android",
      "appium:deviceName": "Pixel-4",
      "appium:platformVersion": "5.1",
      "appium:automationName": "UiAutomator2",
      "appium:app": `${process.cwd()}/Mobile/App/ebacshop.apks`,
      "appium:appPackage": "br.com.lojaebac",
      "appium:appWaitActivity": ".MainActivity",
      "appium:appActivity": ".MainActivity",
      "appium:disableIdLocatorAutocompletion": true,
    },
  ],
  ...generalConf,
};

module.exports = localConf;
