import "dotenv/config";
import request from "supertest";
import { expect } from "chai";

import { faker } from "@faker-js/faker";

export const newCoupon = {
  code: `off${faker.word.noun()}${faker.number}`, // Generates a random number between 1000 and 9999
  amount: `${faker.number.int({ min: 1, max: 5000 })}`,
  discount_type: "fixed_product",
  description: `Cupom de desconto de teste ${faker.color.human()}`,
};

export const valid_discount_types = ["percent", "fixed_cart", "fixed_product"];

describe("Dado que você está usando a rota de cupons da API", function () {
  const apiUrl = process.env.API_URL;
  const token = process.env.API_TOKEN;

  console.log(apiUrl);
  console.log(token);
  context(
    "Quando é feito POST enviando um corpo de requisição inválido",
    function () {
      let response;
      beforeEach(async function () {
        this.timeout(5000);
        response = await request(apiUrl)
          .post("/coupons")
          .set("Authorization", `Bearer ${token}`)
          .send({});
      });
      it("Deve retornar mensagem de erro que auxilie o cliente.", function () {
        const jsonData = response.body;

        expect(jsonData).to.have.property("message");
        expect(typeof jsonData.message).to.eql("string");
        expect(jsonData.message).to.include("Parâmetro(s) ausente(s)");

        expect(jsonData).to.have.property("data");
        expect(jsonData.data).to.have.property("params");
      });
      it("Deve retornar status 400", function () {
        expect(response.status).to.equal(400);
      });
    },
  );

  context(
    "Quando é feito POST enviando dados válidos com token autenticado",
    function () {
      let response;
      beforeEach(async function () {
        this.timeout(5000);
        response = await request(apiUrl)
          .post("/coupons")
          .set("Authorization", `Bearer ${token}`)
          .send(newCoupon);
      });
      it("Deve retornar o objeto com os itens esperados (CONTRATO).", function () {
        const jsonData = response.body;

        expect(jsonData).to.have.property("id");
        expect(jsonData.id).to.be.a("number");
        expect(jsonData).to.have.property("amount");
        expect(jsonData.amount).to.be.a("string");
        expect(jsonData).to.have.property("discount_type");
        expect(valid_discount_types).to.include(jsonData.discount_type);
        expect(jsonData).to.have.property("description");
        expect(jsonData.description).to.be.a("string");
      });
      it("Deve retornar status 201", function () {
        expect(response.status).to.equal(201);
      });
    },
  );
});
