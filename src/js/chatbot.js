
var nodefetch = require("node-fetch");

class Chatbot {
    constructor(token = false) {
        if (!token) {
            throw {
                "message": "Eror token not found"
            };
        }
        this.url = `https://hexaminate.herokuapp.com/chatbot/api/${token}`
    }

    async request(method, parameters = false) {
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
        var api = `${url}/${method}`;
        var response = await nodefetch(api, option);
        if (response.status == 200) {
            return await response.json();
        } else {
            var msg = await response.json();
            throw {
                message: msg
            };
        }
    }

    async delete() {


    }


}

module.exports = {
    Chatbot
};