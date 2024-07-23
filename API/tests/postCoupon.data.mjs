import { faker } from "@faker-js/faker";
import "dotenv/config";
const token = process.env.API_TOKEN;

export const apiRoute = "/coupons";

export const newCoupon = {
  code: `off${faker.word.noun()}${faker.number}`,
  amount: `${faker.number.int({ min: 1, max: 5000 })}`,
  discount_type: "fixed_product",
  description: `Cupom de desconto de teste ${faker.color.human()}`,
};
export const existingCoupon = {
  code: `20off`,
  amount: `20`,
  discount_type: "fixed_product",
  description: `Cupom de desconto de teste`,
};

export const valid_discount_types = ["percent", "fixed_cart", "fixed_product"];

export const errorMessage = {
  noToken: "Sem permissão para listar recursos.",
  wrongBody: "Parâmetro(s) ausente(s)",
  invalidName: "O código de cupom já existe",
};
export const scenarios = [
  {
    name: "Quando é feita uma requisição sem token de autenticação",
    auth: false,
    errorCode: 401,
  },
  {
    name: "Quando é feita uma requisição com token autenticado porém sem autorização",
    auth: `${token}asdas`,
    errorCode: 401,
  },
];
