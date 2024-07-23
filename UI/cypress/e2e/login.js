const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("você acessa o formulário de login", () => {
  cy.accessPage(".icon-user-unfollow");
});

When("você insere dados de registro válidos", () => {
  cy.fillValidData();
  cy.submitLogin();
});

Then("você é direcionado para o seu dashboard", () => {
  cy.sucessfulLoginResponse();
});

When("você não insere dados", () => {
  cy.intercept("*").as("anyRequest");
  cy.submitLogin();
});

Then(
  "o sistema traz uma mensagem de erro e não envia os dados para a API",
  () => {
    cy.fixture("errorMessages.json").then((data) => {
      cy.errorResponse(data.corpoVazio);
    });
    cy.noApiRequest();
  },
);

When("você insere email incorreto", () => {
  cy.fillWrongData();
  cy.submitLogin();
});

Then("o sistema traz uma mensagem de erro que te auxilia", () => {
  cy.fixture("errorMessages.json").then((data) => {
    cy.errorResponse(data.emailDesconhecido);
  });
});

When("você insere senha incorreta", () => {
  cy.fillInvalidPassword();
  cy.submitLogin();
});

Then("o sistema traz mensagem de erro que te orienta", () => {
  cy.fixture("errorMessages.json").then((data) => {
    cy.errorResponse(data.senhaIncorreta);
  });
});

When("você insere uma senha incorreta três vezes seguidas", () => {
  cy.fillWrongDataMultipleTimes();
});

Then(
  "o sistema traz mensagem de erro e bloqueia o login temporariamente",
  () => {
    cy.fixture("errorMessages.json").then((data) => {
      cy.errorResponse(data.acessoBloqueado);
    });
  },
);
