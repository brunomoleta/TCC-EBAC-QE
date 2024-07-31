const CatalogPage = require("../../pageObjects/catalog.page");
const ButtonPage = require("../../pageObjects/button.page");
const HelperPage = require("../../pageObjects/helper.page");

const catalogPage = new CatalogPage();
const buttonPage = new ButtonPage();
const helperPage = new HelperPage();

context("Dado que você quer visualizar todos os produtos", () => {
    describe("Quando você clica em 'ver todos'", () => {
        it("Você visualiza quatro produtos ou mais.", async () => {
            await buttonPage.allProductsButton();
            await catalogPage.allProductsPage();

            await helperPage.returnToHomePage(false);
        });
    });
});
