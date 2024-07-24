Feature: LoginRequest
  Como cliente da EBAC-SHOP
  Quero fazer o login (autenticação) na plataforma
  Para visualizar meus pedidos

  Background:
    Given você acessa o formulário de login

  Scenario Outline: Faço login com dados válidos no <browser
    When você insere dados de registro válidos
    Then você é direcionado para o seu dashboard
    Examples:
      | browser |
      | Chrome  |
      | Firefox |
      | Edge    |

  Scenario Outline: Tento realizar login sem enviar dados no <browser
    When você não insere dados
    Then o sistema traz uma mensagem de erro e não envia os dados para a API
    Examples:
      | browser |
      | Chrome  |
      | Firefox |
      | Edge    |


  Scenario Outline: Tento realizar o login com email inexistente no <browser
    When você insere email incorreto
    Then o sistema traz uma mensagem de erro que te auxilia
    Examples:
      | browser |
      | Chrome  |
      | Firefox |
      | Edge    |


  Scenario Outline: Tento realizar o login com senha incorreta no <browser
    When você insere senha incorreta
    Then o sistema traz mensagem de erro que te orienta
    Examples:
      | browser |
      | Chrome  |
      | Firefox |
      | Edge    |


  Scenario Outline: Tento realizar o login com senha incorreta três(3) vezes seguidas no <browser
    When você insere uma senha incorreta três vezes seguidas
    Then o sistema traz mensagem de erro e bloqueia o login temporariamente
    Examples:
      | browser |
      | Chrome  |
      | Firefox |
      | Edge    |
