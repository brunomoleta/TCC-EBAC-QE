import "dotenv/config";
import request from "supertest";
import {expect} from "chai";
import {
    apiRoute,
    errorMessage,
    existingCoupon,
    newCoupon,
    scenarios,
    valid_discount_types
} from "./postCoupon.data.mjs";

describe("Dado que você está fazendo um POST na rota de cupons da API", function () {
    const apiUrl = process.env.API_URL;
    const token = process.env.API_TOKEN;

    const {invalidName, noToken, wrongBody} = errorMessage
    context(
        "Quando é enviado um corpo de requisição inválido",
        function () {
            let response;
            before(async function () {
                response = await request(apiUrl)
                    .post(apiRoute)
                    .set("Authorization", `Bearer ${token}`)
                    .send({});
            });
            it("Deve retornar mensagem de erro que auxilie o cliente.", function () {
                const jsonData = response.body;

                expect(jsonData).to.have.property("message");
                expect(typeof jsonData.message).to.eql("string");
                expect(jsonData.message).to.include(wrongBody);

                expect(jsonData).to.have.property("data");
                expect(jsonData.data).to.have.property("params");
            });
            it("Deve retornar status 400", function () {
                expect(response.status).to.equal(400);
            });
        },
    );
    context("Quando é enviado um corpo com um nome de código que já existe.", function () {
        let response;
        before(async function () {
            response = await request(apiUrl)
                .post(apiRoute)
                .set("Authorization", `Bearer ${token}`)
                .send(existingCoupon);
        });
        it("Deve retornar mensagem de erro", function () {
            const jsonData = response.body;

            expect(jsonData).to.have.property("message");
            expect(jsonData.message).to.be.a("string");
            expect(jsonData.message).to.contain(invalidName);
        })
        it("Deve retornar status 400", function () {

            expect(response.statusCode).to.equal(400);
        });
    })
    context(
        "Quando são enviados dados válidos com token autenticado",
        function () {
            let response;
            before(async function () {
                response = await request(apiUrl)
                    .post(apiRoute)
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
                expect(response.statusCode).to.equal(201);
            });
        },
    );

    scenarios.forEach((scenario) => {
        context(scenario.name, function () {
            let response;
            before(async function () {
                if (!scenario.auth) {
                    response = await request(apiUrl).get(apiRoute)
                        .send(newCoupon);
                } else {
                    response = await request(apiUrl)
                        .get(apiRoute)
                        .set("Authorization", `Bearer ${scenario.auth}`)
                        .send(newCoupon);
                }
            });
            it("Deve retornar mensagem de erro que orienta o cliente", function () {
                const jsonData = response.body;

                expect(jsonData).to.have.property("message");
                expect(jsonData.message).to.be.a("string");

                expect(jsonData.message).to.contain(noToken);
            })
            it("Deve retornar status 401", function () {
                expect(response.statusCode).to.equal(401);
            });
        })
    });
});
