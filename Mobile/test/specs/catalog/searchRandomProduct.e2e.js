const CatalogPage = require("../../pageObjects/catalog.page");
const SearchPage = require("../../pageObjects/search.page");
const HelperPage = require("../../pageObjects/helper.page");

const catalogPage = new CatalogPage();
const searchPage = new SearchPage();
const helperPage = new HelperPage();

context("Dado que você quer buscar um produto específico", () => {
  describe("Quando você faz uma busca com um produto que não está disponível", () => {
    it("Você visualiza uma mensagem de erro.", async () => {
      await searchPage.writeInput("boné lilás");
      await catalogPage.getErrorMessage();

      await helperPage.returnToHomePage(false);
    });
  });
});
