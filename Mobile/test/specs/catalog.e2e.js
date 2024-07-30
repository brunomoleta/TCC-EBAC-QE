const CatalogPage = require("../pageObjects/catalog.page");
const ButtonPage = require("../pageObjects/button.page");

context("Dado que você quer visualizar produtos", () => {
  const catalogPage = new CatalogPage();
  const buttonPage = new ButtonPage();

  describe("Quando você abre a página inicial", () => {
    it("Você visualiza uma lista de produtos.", async () => {
      await catalogPage.homePageProducts();
    });
  });

  describe("Quando você está na página inicial e clica no botão para Ver todos os Produtos", () => {
    it("Você visualiza seis ou mais produtos.", async () => {
      await buttonPage.allProductsButton();
      await catalogPage.allProductsPage();
    });
  });

  describe("Quando você faz uma busca para encontrar sapatos", () => {
    it("Você visualiza uma lista de produtos.", async () => {
      await buttonPage.browseProducts();
      await catalogPage.allProductsPage();
    });
  });

  describe.skip("Quando você faz uma busca com uma palavra que não existe", () => {
    it("Você visualiza uma mensagem de erro.", async () => {
    });
  });
  describe.skip("Quando você clica para navegar pelos produtos", () => {
    it("Você visualiza quatro produtos.", async () => {
    });
  });
});
