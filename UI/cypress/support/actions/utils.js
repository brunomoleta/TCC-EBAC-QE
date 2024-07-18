Cypress.Commands.add("clickTag", (tag, hasTimeout) => {
  if (hasTimeout) {
    cy.get(tag).first().click({ timeout: 50 });
  } else {
    cy.get(tag).first().click();
  }
});
Cypress.Commands.add("accessPage", (page) => {
  cy.visit("/");
  cy.clickTag(page);
});
Cypress.Commands.add("goToCartPage", () => {
  cy.clickTag("#cart");
  cy.clickTag(
    "#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart",
  );
});
