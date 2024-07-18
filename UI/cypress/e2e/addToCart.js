const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { stringToNumber } = require("../support/actions/login/fakerData");

// Given("você está na página de um Produto", () => {
//   cy.accessPage(".product-block.grid");
// });
//
// When("você preenche para comprar 11 itens dele", () => {
//   cy.wait(50);
//      cy.addToCart(11)
// });
//
// Then(
//   "aparece uma mensagem de erro dizendo que a quantidade máxima é 10 por compra",
//   () => {
//     cy.errorResponse(
//       `Erro: A quantidade máxima de produtos por consumidor é de 10`,
//     );
//   },
// );

Given(
  "você tem um carrinho cujo valor total dos produtos é maior que 600 e até 990 reais",
  () => {
    cy.addToCart(9);
  },
);

When("você está na página de Carrinho", () => {
  cy.goToCartPage();
  cy.get("h1").contains(/carrinho/i);
});

Then("o sistema aplica um desconto de 15% no valor final", () => {
  let subtotal = 0;

  const checkDiscount = (total, discount) => {
    const expectedTotal = subtotal * (1 - discount);

    expect(total).to.be.closeTo(expectedTotal, 0.1);
  };

  cy.get('[data-title="Subtotal"]').then((element) => {
    const textString = element.text();
    subtotal = stringToNumber(textString);
  });

  cy.get('[data-title="Total"]')
    .last()
    .then((element) => {
      const textString = element.text();
      const total = stringToNumber(textString);

      cy.log(`The todal should be ${subtotal * 0.85} = ${total}`);
      checkDiscount(total, 0.15);
    });
});

When(
  "você tem um carrinho cujo valor dos produtos é maior que 200 e até 600 reais",
  () => {
    // Write your code to add items to get this total in the cart
  },
);

Then("o sistema aplica um desconto de 10% no valor final", () => {
  // Write your code to check for 10% discount application
});

When(
  "você tem um carrinho cujo valor dos produtos após a aplicação do desconto é maior que 990 reais",
  () => {
    // Write your code to add discounted items to get this total in the cart
  },
);

Then(
  "o sistema traz mensagem de erro informando que o valor total máximo é de 990 reais",
  () => {
    // Write your code to check for the error message
  },
);
