const df = require("durable-functions");

const helloActivityName = "sayHello"; //name of your activity function

df.app.orchestration("helloSequence", function* (context) {
    context.log("Starting chain sample");

    //get the input sent from the client function
    const input = context.df.getInput()
    const output = [];

    //Fan out all your activity functions
    input.forEach(element => {
        output.push(context.df.callActivity(helloActivityName, element))
    });

    //Fan in by aggregating the results
    const results = yield context.df.Task.all(output)

    return results;
});
