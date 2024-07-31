const http = require("k6/http");
const { check, sleep } = require("k6");

class LoginRequest {
  constructor() {
    this.url = "http://lojaebac.ebaconline.art.br/public";
  }

  postRequest = (path, body) =>
    http.post(`${this.url}${path}`, JSON.stringify(body), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

  checkResponseStatus = (response, expectedStatus) =>
    check(response, {
      [`status deve ser ${expectedStatus}`]: (response) =>
        response.status === expectedStatus,
    });

  unsuccessfulLogin(user) {
    const response = this.postRequest("/authuser", user);
    this.checkResponseStatus(response, 400);
  }

  successfulLogin(user) {
    const loginResponse = this.postRequest("/authuser", user);
    this.checkResponseStatus(loginResponse, 200);
  }

  wrongPassword(email, password) {
    const loginResponse = this.postRequest("/authuser", {
      email,
      password: password + "a",
    });
    console.log(loginResponse.status)

    this.checkResponseStatus(loginResponse, 400);
  }
}

module.exports = LoginRequest;
