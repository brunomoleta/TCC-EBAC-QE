Cypress.Commands.add("sucessfulLoginResponse", () => {
  cy.get("nav.woocommerce-MyAccount-navigation");
});

Cypress.Commands.add("errorResponse", (message) => {
  cy.get('ul[role="alert"]').should("contain", message);
});
