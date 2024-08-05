const CatalogPage = require("../../pageObjects/catalog.page");
const SearchPage = require("../../pageObjects/search.page");
const HelperPage = require("../../pageObjects/helper.page");

const catalogPage = new CatalogPage();
const searchPage = new SearchPage();
const helperPage = new HelperPage();

context("Dado que você quer buscar um produto específico", () => {
  describe("Quando você busca por 'sapato'", () => {
    it("Você visualiza uma lista de produtos associados a esta palavra.", async () => {
      await searchPage.writeInput("shoes");
      await catalogPage.getShoesProducts();

      await helperPage.returnToHomePage(false);
    });
  });
});
