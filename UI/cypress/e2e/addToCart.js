const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("você está na página de um Produto", () => {
  cy.randomProductPage();
});

When("você preenche para comprar 11 itens dele", () => {
  cy.addToCart(11);
});

Then(
  "aparece uma mensagem de erro dizendo que a quantidade máxima é 10 por compra",
  () => {
    cy.fixture("errorMessages.json").then((data) => {
      cy.errorResponse(data.quantidadeExcessiva);
    });
  },
);

Given(
  "você tem um carrinho cujo valor total dos produtos é maior que 600 e até 990 reais",
  () => {
    cy.accessPage(".product-block.grid");
  },
);

When("você vai para a página de Carrinho", () => {
  cy.addToCart(9);
});

Then("o sistema aplica um desconto de 15% no valor final", () => {
  cy.goToCartPage();
  cy.get("h1").contains(/carrinho/i);
  cy.checkDiscount(0.15);
});

Given(
  "você tem um carrinho cujo valor total dos produtos é maior que 200 e até 600 reais",
  () => {
    cy.accessPage(".product-block.grid");
  },
);

When("você vai à página de Carrinho", () => {
  cy.addToCart(6);
});

Then("o sistema aplica um desconto de 10% no valor final", () => {
  cy.goToCartPage();
  cy.get("h1").contains(/carrinho/i);
  cy.checkDiscount(0.1);
});

Given(
  "você tem um carrinho cujo valor dos produtos após a aplicação do desconto é maior que 990 reais",
  () => {
    cy.accessPage(".product-block.grid", Math.floor(Math.random() * 8));
    cy.addToCart(9);
  },
);

When("você está na página de Carrinho", () => {
  cy.wait(500);

  cy.accessPage(".product-block.grid", Math.floor(Math.random() * 8));
  cy.addToCart(9);
});

Then(
  "o sistema traz mensagem de erro informando que o valor total máximo é de 990 reais",
  () => {
    cy.fixture("errorMessages.json").then((data) => {
      cy.errorResponse(data.valorTotalCompraExcessivo);
    });
  },
);
