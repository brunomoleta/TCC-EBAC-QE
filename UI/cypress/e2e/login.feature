Feature: LoginRequest
  Como cliente da EBAC-SHOP
  Quero fazer o login (autenticação) na plataforma
  Para visualizar meus pedidos

  Background:
    Given você acessa o formulário de login

  Scenario: Faço login com dados válidos
    When você insere dados de registro válidos
    Then você é direcionado para o seu dashboard

  Scenario: Tento realizar login sem enviar dados
    When você não insere dados
    Then o sistema traz uma mensagem de erro e não envia os dados para a API

  Scenario: Tento realizar o login com email inexistente
    When você insere email incorreto
    Then o sistema traz uma mensagem de erro que te auxilia

  Scenario: Tento realizar o login com senha incorreta
    When você insere senha incorreta
    Then o sistema traz mensagem de erro que te orienta


  Scenario: Tento realizar o login com senha incorreta três(3) vezes seguidas no
    When você insere uma senha incorreta três vezes seguidas
    Then o sistema traz mensagem de erro e bloqueia o login temporariamente
