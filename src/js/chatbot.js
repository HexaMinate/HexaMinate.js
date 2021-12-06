var nodefetch = require("node-fetch");
class Chatbot {
    constructor(token = false) {
        if (!token) {
            throw {
                message: `Tolong tambahkan token anda disini\n\n${__dirname}`
            };
        } else {
            if (String(token).split(":").length == 0) {
                throw {
                    message: `Format token salah tolong isi dengan benar ya`
                };
            }
        }
        this.url = `https://hexaminate.herokuapp.com/chatbot/api/${token}`
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

    async ask(text = "hello", parameters = {}) {
        var answer = await this.request("ask", {
            "text": text,
            ...parameters
        });
        return answer;
    }

}

module.exports = {
    Chatbot
};