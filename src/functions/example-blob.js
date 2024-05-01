const { app } = require('@azure/functions');

app.storageBlob('blobTriggerExample', {
    connection: 'AzureWebJobsStorage', // The name of the app setting that contains the Storage Account connection string
    path: 'samples-workitems/{name}', // Replace 'samples-workitems' with your container name. {name} is a placeholder for the blob name
    handler: async (context, blob) => {
        context.log('Blob trigger function processed blob\n Name:', context.bindingData.name, '\n Blob Size:', blob.length, 'Bytes');

        // Your blob processing logic here
    }
});
