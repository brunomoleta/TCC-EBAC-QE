const CatalogPage = require("../../pageObjects/catalog.page");
const catalogPage = new CatalogPage();

context("Dado você abre a página inicial", () => {
  describe("Quando a página carrega", () => {
    it("Você visualiza uma lista de produtos.", async () => {
      await catalogPage.homePageProducts();
    });
  });
});
