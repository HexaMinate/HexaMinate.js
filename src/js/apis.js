
var nodefetch = require("node-fetch");

class Apis {
    constructor(token = false) {
        if (!token) {
            throw {
                "message": "Eror token not found"
            };
        }
        this.url = `https://hexaminate.herokuapp.com/apis/${token}`
    }

    async request(method, parameters = {}) {
        var option = {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        };
        if (parameters) {
            option["body"] = JSON.stringify(parameters)
        }
        var api = `${this.url}/${method}`;
        var response = await nodefetch(api, option);
        if (response.status == 200) {
            return await response.json();
        } else {
            var msg = await response.json();
            if (msg.message) {
                throw msg;
            } else {
                throw {
                    "message": msg
                };
            }
        }
    }


}

module.exports = {
    Apis
};