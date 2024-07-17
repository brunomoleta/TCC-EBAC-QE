/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('você acessa o formulário de login', () => {
    cy.visit('/')
})

When('você insere dados de registro válidos', () => {
    // insert logic for valid credentials
})

Then('você é direcionado para o seu dashboard', () => {
    // insertion logic for successful login
})

When('você não insere dados', () => {
    // insert logic for no entered data
})

Then('o sistema traz uma mensagem de erro e não envia os dados para a API', () => {
    // insert logic for error handling
})

When('você insere email incorreto', () => {
    // insert logic for incorrect email
})

Then('o sistema traz uma mensagem de erro perguntando se você quer se cadastrar', () => {
    // insert logic for error handling
})

When('você insere senha incorreta', () => {
    // insert logic for incorrect password
})

Then('o sistema traz mensagem de erro que te orienta', () => {
    // insert logic for error handling
})