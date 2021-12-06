var { Chatbot } = require("../src/index");
var config = require("./config.json");

if (!config.token) {
    return console.log(`Tolong tambahkan token anda disini\n\n${__dirname}`);
}   else    {
    if (String(config.token).split(":").length == 0){
        return console.log(`Format token salah tolong isi dengan benar ya`);
    }
}
var chatbot = new Chatbot(config.token);

async function main() {
    try {
        var answer = await chatbot.request("ask", {
            "text": "hello world"
        });
        console.log(JSON.stringify(answer, null, 2));
    } catch (e) {
        console.log(e);
    }
}

main();