var { Apis } = require("./js/apis");
var { Chatbot } = require("./js/chatbot");
var { Nosql } = require("./js/nosql");
module.exports = {
    Apis,
    Chatbot,
    Database: {
        Nosql
    }
};