const { driver } = require("@wdio/globals");

class HomePage {
  async startApp() {
    await driver.pause(200);
  }
}

module.exports = HomePage;
