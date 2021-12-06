
var nodefetch = require("node-fetch");

/// hello world nosql
class Nosql {
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
        this.url = `https://hexaminate.herokuapp.com/database/nosql/api/${token}`
    }
    
    /// request method

    /// can sasokaskas
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
    async getValue(key, parameters = {}) {
        var getValue = await this.request("getValue", {
            "key": key,
            ...parameters
        });
        return getValue;
    }
    
    async getValues() {
        var getValues = await this.request("getValues", {});
        return getValues;
    }
    
    async pushValue(key, value, parameters = {}) {
        var pushValue = await this.request("pushValue", {
            "key": key,
            "value": value,
            ...parameters
        });
        return pushValue;
    }
    
    async setValue(key, value, parameters = {}) {
        var setValue = await this.request("setValue", {
            "key": key,
            "value": value,
            ...parameters
        });
        return setValue;
    }

    async deleteValue(key, parameters = {}) {
        var deleteValue = await this.request("deleteValue", {
            "key": key,
            ...parameters
        });
        return deleteValue;
    }

    async removeValue(key, searchdata ,value, parameters = {}) {
        var removeValue = await this.request("removeValue", {
            "key": key,
            "searchdata": searchdata,
            "value": value,
            ...parameters
        });
        return removeValue;
    }

    async updateValue(key, searchdata, value, parameters = {}) {
        var updateValue = await this.request("updateValue", {
            "key": key,
            "searchdata": searchdata,
            "value": value,
            ...parameters
        });
        return updateValue;
    }

}

module.exports = {
    Nosql
};