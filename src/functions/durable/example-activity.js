const df = require("durable-functions");

const helloActivityName = "sayHello";

df.app.activity(helloActivityName, {
    handler: function (input) {
        return `Hello ${input}`;
    },
});
