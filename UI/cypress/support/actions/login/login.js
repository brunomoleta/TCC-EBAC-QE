Cypress.Commands.add("noApiRequest", () => {
  cy.wait("@anyRequest", { timeout: 1000 }).should("not.exist");
});

Cypress.Commands.add("submitLogin", () => {
  cy.get('input[type="submit"]').first().click();
});
