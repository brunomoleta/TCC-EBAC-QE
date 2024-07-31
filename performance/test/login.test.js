const { group } = require("k6");
const LoginRequest = require("../requests/login.request.js");
const { successUser, randomUser } = require("../data/login.data.js");

export let options = {
  stages: [
    { duration: "0s", target: 0 },
    { duration: "20s", target: 20 },
    { duration: "120s", target: 20 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  const login = new LoginRequest();
  group("Login com sucesso", () => {
    login.successfulLogin(successUser);
  });

  group("Login não autorizado. Usuário não existe", () => {
    login.unsuccessfulLogin(randomUser);
  });

  group("Login não autorizado. Senha incorreta.", () => {
    login.wrongPassword(successUser.email, successUser.password);
  });
}
