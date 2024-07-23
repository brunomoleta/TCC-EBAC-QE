Cypress.Commands.add("selectCategoryItem", (category, childNumber) => {
  cy.get(`[aria-label=${category}]`).within(() => {
    const element = cy
      .get(".variable-item.button-variable-item")
      .eq(childNumber);
    element.click();
  });
  cy.wait(400);
});

Cypress.Commands.add("selectAttributes", () => {
  cy.wait(800);
  cy.selectCategoryItem("Size", Math.floor(Math.random() * 5));

  cy.selectCategoryItem("Color", Math.floor(Math.random() * 3));
});
