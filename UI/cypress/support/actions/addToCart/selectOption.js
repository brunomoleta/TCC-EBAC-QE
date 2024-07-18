Cypress.Commands.add("selectCategoryItem", (category) => {
  cy.get(`[aria-label=${category}]`).within(() => {
    cy.get(".variable-item.button-variable-item").first().click();
  });
});

Cypress.Commands.add("selectAttributes", () => {
  cy.selectCategoryItem("Size");
  cy.selectCategoryItem("Color");
});
