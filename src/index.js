var { Chatbot } = require("./js/chatbot");
var { Nosql } =require("./js/nosql");
module.exports = {
    Chatbot,
    Database: {
        Nosql
    }
};