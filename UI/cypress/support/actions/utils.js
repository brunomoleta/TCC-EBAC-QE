Cypress.Commands.add("clickTag", (tag, force = false, child = 0) => {
  const item = cy.get(tag).eq(child);
  item.click({ timeout: 300, force: force });
});

Cypress.Commands.add("accessPage", (page, child = 0) => {
  cy.visit("/");
  cy.clickTag(page, false, child);
});
Cypress.Commands.add("randomProductPage", () => {
  cy.accessPage(".product-block.grid", Math.floor(Math.random() * 8));
});

Cypress.Commands.add("goToCartPage", () => {
  cy.clickTag("#cart", true);
  cy.clickTag(
    "#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart",
    true,
  );
});
