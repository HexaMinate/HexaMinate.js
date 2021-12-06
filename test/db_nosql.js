var { Database } = require("../src/index");

var config = require("./config.json");

if (!config.token) {
    return console.log(`Tolong tambahkan token anda disini\n\n${__dirname}`);
}   else    {
    if (String(config.token).split(":").length == 0){
        return console.log(`Format token salah tolong isi dengan benar ya`);
    }
}

var db = new Database.Nosql(config.token);

async function main() {
    try {
        var getValues = await db.request("getValues", {});
        console.log(JSON.stringify(getValues.result, null, 2));
        var setValue = await db.request("setValue", {
            "key": "newKey",
            "value": {
                "password": "azkagantengt",
                "username": "azkadev",
                "first_name": "gibran"

            }
        });
        console.log(JSON.stringify(setValue.result, null, 2));
        var getValue = await db.request("getValue", {
            "key": "newKey"
        });
        console.log(`getValue\n${JSON.stringify(getValue.result, null, 2)}`);
        var setValue = await db.request("pushValue", {
            "key": "newKey",
            "value": {
                "first_name": "Gibran",
                "last_name": "Alazka"
            }
        });

        var getValue = await db.request("getValue", {
            "key": "newKey"
        });
        console.log(`last getValue\n${JSON.stringify(getValue.result, null, 2)}`);
    } catch (e) {
        console.log(e);
    }
}

main();