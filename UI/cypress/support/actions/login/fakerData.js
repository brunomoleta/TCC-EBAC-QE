const { faker } = require("@faker-js/faker");

const wrongLogin = {
  email: faker.internet.email(),
  password: faker.internet.password(),
};

const stringToNumber = (string) =>
  Number(string.replace(/[^0-9,]/g, "").replace(",", "."));

module.exports = {
  wrongLogin: wrongLogin,
  stringToNumber: stringToNumber,
};
