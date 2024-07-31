const Helper = require("./helper.page");
const expect = require("expect.js");

class ButtonPage {
  helper = new Helper();

  async allProductsButton() {
    const buttonId = "See all";
    const button = await this.helper.getElementByXPath(buttonId);

    const isButtonDisplayed = await button.isDisplayed();

    expect(isButtonDisplayed).to.be.ok("Botão deve estar em tela");

    await button.click();
  }

  async browseProducts() {
    const descriptionBtn = ", Browse";
    const browseBtn = await this.helper.getElementByXPath(
      descriptionBtn,
      false,
    );
    const isBrowseBtn = await browseBtn.isEnabled();
    expect(isBrowseBtn).to.be.ok("O botão está habilitado");

    await browseBtn.click();
  }
}

module.exports = ButtonPage;
