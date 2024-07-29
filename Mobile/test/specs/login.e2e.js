const HomePage = require("../pageObjects/home.page");

context("Dado que você quer visualizar produtos", () => {
  const homePage = new HomePage();

  describe("Quando você abre a página inicial", () => {
    it("Você visualiza uma lista de produtos.", async () => {
      await homePage.startApp();
    });
  });
  describe("Quando você está na página inicial e clica no botão para Ver todos os Produtos", () => {
    it("Você visualiza seis ou mais produtos.", async () => {
      await homePage.startApp();
    });
  });
  describe("Quando você faz uma busca para encontar sapatos", () => {
    it("Você visualiza uma lista de produtos.", async () => {
      await homePage.startApp();
    });
  });
  describe("Quando você faz uma busca com uma palavra que não existe", () => {
    it("Você visualiza uma mensagem de erro.", async () => {
      await homePage.startApp();
    });
  });
  describe("Quando você clica para navegar pelos produtos", () => {
    it("Você visualiza quatro produtos.", async () => {
      await homePage.startApp();
    });
  });
});
