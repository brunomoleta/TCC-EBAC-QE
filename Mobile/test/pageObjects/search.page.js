const Helper = require("./helper.page");
const expect = require("expect.js");

class SearchPage {
  helper = new Helper();

  async writeInput(product) {
    const descriptionInput = ", Search Products";

    const input = await this.helper.checkElementDisplayByText(
      descriptionInput,
      false,
    );
    const isInput = await input.isEnabled();
    expect(isInput).to.be.ok("O input está habilitado");
    await input.click();

    await this.helper.typeData(product, input);
  }
}

module.exports = SearchPage;
