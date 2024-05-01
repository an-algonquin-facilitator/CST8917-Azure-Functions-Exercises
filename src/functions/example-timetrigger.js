const { app } = require('@azure/functions');

app.timer('timerTriggerExample', {
    schedule: '0 */5 * * * *', // Runs every 5 minutes
    handler: async (context) => {
        context.log('JavaScript timer trigger function ran!', new Date().toISOString());
    }
});