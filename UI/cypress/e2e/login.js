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
    cy.errorResponse("Erro: Nome de usuário é obrigatório.");
    cy.noApiRequest();
  },
);

When("você insere email incorreto", () => {
  cy.fillWrongData();
  cy.submitLogin();
});

Then("o sistema traz uma mensagem de erro que te auxilia", () => {
  cy.errorResponse(
    "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.",
  );
});

When("você insere senha incorreta", () => {
  cy.fillInvalidPassword();
  cy.submitLogin();
});

Then("o sistema traz mensagem de erro que te orienta", () => {
  cy.errorResponse(`Erro: A senha fornecida para o e-mail`);
  cy.errorResponse(`está incorreta. Perdeu a senha?`);
});
