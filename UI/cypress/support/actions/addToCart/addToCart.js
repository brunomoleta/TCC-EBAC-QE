Cypress.Commands.add("addToCart", (number) => {
  cy.selectAttributes();
  for (let i = 0; i < number; i++) {
    cy.clickTag('input.plus[type="button"][value="+"]');
  }
  cy.clickTag("button.single_add_to_cart_button");
});
