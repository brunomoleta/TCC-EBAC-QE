const { wrongLogin } = require("./fakerData");

Cypress.Commands.add("fillLoginForm", (email, senha) => {
  cy.get('input[name="username"]').type(email, { log: false });
  cy.get('input[name="password"]').first().type(senha, { log: false });
});
Cypress.Commands.add("clearLoginForm", (field) => {
  cy.get(`input[name="${field}"]`).clear();
});

Cypress.Commands.add("fillValidData", () => {
  cy.fixture("loginData.json").then((data) => {
    cy.fillLoginForm(data.email, data.senha);
  });
});

Cypress.Commands.add("fillInvalidPassword", () => {
  cy.fixture("loginData.json").then((data) => {
    cy.fillLoginForm(data.email, `${data.senha}x`);
  });
});

Cypress.Commands.add("fillWrongData", () => {
  cy.fillLoginForm(wrongLogin.email, wrongLogin.password);
});

Cypress.Commands.add("fillWrongDataMultipleTimes", () => {
  cy.fillInvalidPassword();
  cy.submitLogin();
  cy.clearLoginForm("username");

  cy.fillInvalidPassword();
  cy.submitLogin();
  cy.clearLoginForm("username");

  cy.fillInvalidPassword();
  cy.submitLogin();
});
