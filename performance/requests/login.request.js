const http = require('k6/http');
const { check, sleep } = require('k6');

class LoginRequest {
    constructor() {
        this.url = "http://lojaebac.ebaconline.art.br/public";
    }

    postRequest = (path, body) => http.post(`${this.url}${path}`, JSON.stringify(body), {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    checkResponseStatus = (response, expectedStatus) => check(response, {
        [`status deve ser ${expectedStatus}`]: (response) => response.status === expectedStatus
    });

    unsuccessfulLogin(email, password) {
        const response = this.postRequest('/authuser', { email, password });
        this.checkResponseStatus(response, 400);
    }

    successfulLogin(email, password) {
        const registerResponse = this.postRequest('/adduser', { email, password });
        this.checkResponseStatus(registerResponse, 200);

        sleep(2);

        const loginResponse = this.postRequest('/authuser', { email, password });
        this.checkResponseStatus(loginResponse, 200);
    }

    wrongPassword(email, password) {
        const registerResponse = this.postRequest('/adduser', { email, password });
        this.checkResponseStatus(registerResponse, 200);

        sleep(2);

        const loginResponse = this.postRequest('/authuser', { email, password: password + 'a' });
        this.checkResponseStatus(loginResponse, 401);
    }
}

module.exports = LoginRequest;