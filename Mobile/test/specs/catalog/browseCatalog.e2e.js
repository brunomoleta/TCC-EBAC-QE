const CatalogPage = require("../../pageObjects/catalog.page");
const ButtonPage = require("../../pageObjects/button.page");
const HelperPage = require("../../pageObjects/helper.page");

const catalogPage = new CatalogPage();
const buttonPage = new ButtonPage();
const helperPage = new HelperPage();

context("Dado que você quer navegar pelos produtos", () => {
  describe("Quando você clica para ir à página de navegação", () => {
    it("Você visualiza quatro produtos ou mais.", async () => {
      await buttonPage.browseProducts();
      await catalogPage.allProductsPage();

      await helperPage.returnToHomePage(true);
    });
  });
});
