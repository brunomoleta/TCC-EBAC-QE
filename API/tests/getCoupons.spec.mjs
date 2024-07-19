import "dotenv/config";
import request from "supertest";
import {expect} from "chai";
import {errorMessage, scenarios} from "./getCoupons.data.mjs";
import {apiRoute} from "./postCoupon.data.mjs";

describe("Dado que você está fazendo um GET na rota de cupons da API", function () {
    const apiUrl = process.env.API_URL;
    const token = process.env.API_TOKEN;

    context(
        "Quando é feita uma requisição com autenticação e autorização",
        function () {
            let response;
            before(async function () {
                response = await request(apiUrl)
                    .get(apiRoute)
                    .set("Authorization", `Bearer ${token}`)
            });
            it("Deve retornar a lista dos cupons ativos.", function () {
                const jsonData = response.body;

                expect(jsonData).to.be.an('array').that.is.not.empty;
                jsonData.forEach(item => {
                    expect(item).to.be.an('object');

                    expect(item).to.have.property('id');
                    expect(item.id).to.be.a('number');

                    expect(item).to.have.property('code');
                    expect(item.code).to.be.a('string');

                    expect(item).to.have.property('amount');
                    expect(item.amount).to.be.a('string');

                    expect(item).to.have.property('description');
                    expect(item.description).to.be.a('string');

                    expect(item).to.have.property('discount_type');
                    expect(item.discount_type).to.be.a('string');
                });
            });

            it("Deve retornar status 200", function () {
                expect(response.status).to.equal(200);
            });
        });

    scenarios.forEach(scenario => {
        context(scenario.name, function () {
            let response;
            before(async function () {
                if (!scenario.auth) {
                    response = await request(apiUrl).get(apiRoute);
                } else {
                    response = await request(apiUrl)
                        .get(apiRoute)
                        .set("Authorization", `Bearer ${scenario.auth}`);
                }
            });

            it("Deve retornar uma mensagem de erro.", function () {
                const jsonData = response.body;

                expect(jsonData).to.have.property('message');
                expect(jsonData.message).to.be.a('string');
                expect(jsonData.message).to.eql(errorMessage);
            });

            it(`Deve retornar status ${scenario.errorCode}`, function () {
                expect(response.status).to.equal(scenario.errorCode);
            });
        });
    });
});