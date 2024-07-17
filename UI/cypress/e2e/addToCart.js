/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('você está na página de um Produto', () => {
    cy.visit('/')
})

When('você preenche para comprar 11 itens dele', () => {
    // Write your code to add 11 items to the cart
})

Then('aparece uma mensagem de erro dizendo que a quantidade máxima é 10', () => {
    // Write your code to check for the error message
})

Given('você esta na página de Carrinho', () => {
    cy.visit('/')
})

When('você tem um carrinho cujo valor dos produtos é maior que 600 e até 990 reais', () => {
    // Write your code to add items to get this total in the cart
})

Then('o sistema aplica um desconto de 15% no valor final', () => {
    // Write your code to check for 15% discount application
})

When('você tem um carrinho cujo valor dos produtos é maior que 200 e até 600 reais', () => {
    // Write your code to add items to get this total in the cart
})

Then('o sistema aplica um desconto de 10% no valor final', () => {
    // Write your code to check for 10% discount application
})

When('você tem um carrinho cujo valor dos produtos após a aplicação do desconto é maior que 990 reais', () => {
    // Write your code to add discounted items to get this total in the cart
})

Then('o sistema traz mensagem de erro informando que o valor total máximo é de 990 reais', () => {
    // Write your code to check for the error message
})