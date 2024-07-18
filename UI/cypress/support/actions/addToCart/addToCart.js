Cypress.Commands.add("addToCart", (number) => {
  cy.accessPage(".product-block.grid");
  cy.wait(50);
  cy.selectAttributes();
  for (let i = 0; i < number; i++) {
    cy.clickTag('input.plus[type="button"][value="+"]', 50);
  }
  cy.clickTag("button.single_add_to_cart_button", 50);
});
