const { stringToNumber } = require("../login/fakerData");

Cypress.Commands.add("getSubtotal", () => {
  return cy.get('[data-title="Subtotal"]').then((element) => {
    const textString = element.text();
    return stringToNumber(textString);
  });
});

Cypress.Commands.add("getTotal", () => {
  return cy
    .get('[data-title="Total"]')
    .last()
    .then((element) => {
      const textString = element.text();
      return stringToNumber(textString);
    });
});

Cypress.Commands.add("checkDiscount", (discount) => {
  cy.getTotal().then((total) => {
    const expectedTotal = total * (1 - discount);
    cy.getSubtotal().then((totalAfterDiscounting) => {
      expect(totalAfterDiscounting).to.be.closeTo(expectedTotal, 0.1);
    });
  });
});
