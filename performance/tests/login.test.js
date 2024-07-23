const { group } = require("k6");
const LoginRequest = require("../requests/login.request.js");
const { user } = require("../data/login.data.js");

export let options = {
  stages: [
    { duration: "0s", target: 0 },
    { duration: "20s", target: 20 },
    { duration: "2m", target: 20 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  const login = new LoginRequest();

  group("Login não autorizado. Usuário não existe", () => {
    login.unsuccessfulLogin(user);
  });
  group("Login com sucesso", () => {
    login.successfulLogin(user);
  });
  group("Login não autorizado. Senha incorreta.", () => {
    login.wrongPassword(user);
  });
}
