const { app } = require('@azure/functions');

app.serviceBusQueue('serviceBusQueueTrigger', {
    connection: 'ServiceBusConnection', // The name of the app setting that contains the Service Bus connection string
    queueName: 'myqueue', // Replace with your queue name
    handler: async (context, message) => {
        context.log('ServiceBus queue trigger function processed message', message);

        // Process the message here

        // If the function successfully processes the message, it is automatically completed (deleted from the queue).
        // If an error is thrown, the message is abandoned and requeued.
    }
});
