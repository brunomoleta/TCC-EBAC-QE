Feature: addToCart
  Como cliente da EBAC-SHOP
  Quero adicionar item(itens) ao carrinho
  Para comprar e receber em casa

  Scenario: Quantidade excessiva de um produto
    Given você está na página de um Produto
    When você preenche para comprar 11 itens dele
    Then aparece uma mensagem de erro dizendo que a quantidade máxima é 10 por compra

  Scenario: Desconto automático de 15%
    Given você tem um carrinho cujo valor total dos produtos é maior que 600 e até 990 reais
    When você vai para a página de Carrinho
    Then o sistema aplica um desconto de 15% no valor final

  Scenario: Desconto automático de 10%
    Given você tem um carrinho cujo valor total dos produtos é maior que 200 e até 600 reais
    When você vai à página de Carrinho
    Then o sistema aplica um desconto de 10% no valor final

  Scenario: Valor total do carrinho maior que o permitido
    Given você tem um carrinho cujo valor dos produtos após a aplicação do desconto é maior que 990 reais
    When você está na página de Carrinho
    Then o sistema traz mensagem de erro informando que o valor total máximo é de 990 reais
