const { $ } = require("@wdio/globals");
const expect = require("expect.js");

class Helper {
  async getElementById(id, isAccessibilityId = false) {
    if (isAccessibilityId) {
      return await $(`~ ${id}`);
    }
    return await $(`id:${id}`);
  }

  async getElementByXPath(text, isText = true) {
    if (isText) {
      return await $(`//android.widget.TextView[@text="${text}"]`);
    }
    return await $(`//android.view.View[@content-desc="${text}"]`);
  }

  async typeData(text, element) {
    await element.setValue(text);
  }

  async checkElementDisplayByText(text, isText = true) {
    const element = await this.getElementByXPath(text, isText);
    const isDisplayed = await element.isDisplayed();

    expect(isDisplayed).to.be.ok(
      `Elemento com texto "${text}" deve estar em tela`,
    );

    return element;
  }

  async returnToHomePage(isBottomBtn) {
    if (isBottomBtn) {
      const element = await this.checkElementDisplayByText(", Home", false);
      await element.click();
    } else {
      const element = await this.checkElementDisplayByText("");
      await element.click();
    }
  }
}

module.exports = Helper;
