Copy of https://github.com/Barton-Computing/Azure-Functions-Exercises just in case

# Azure-Functions-Exercises

Meant as guide to setting up different Azure Functions, Following https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=javascript%2Cwindows%2Cazure-cli&pivots=nodejs-model-v4 can help explain all the details of working with nodejs and azure functions.

Function examples, are meant as skeleton examples or are pulled from varying documentation, they are not meant to be ready to run on their own. You will need to fill out any missing configuration or code to make them run. They are simply example starting points for different function types.

## Setup

For this nodejs style project you can place any Azure functions in their own file unser `src/functions` additional files or code can exist under `src` for example functions related to mongo or redis

Make sure to run

```
npm install
```

To install all dependencies listed in the package.json. Any time you add additional packages you will need to install them as well

## Libraries

When interacting with different Azure services it is important to know that each individual service will likely have it's own package to be installed.
You can see examples of different Azure related npm packages in the package.json file.

Packages like:

- [@azure/functions](https://www.npmjs.com/package/@azure/functions)
- [durable-functions](https://www.npmjs.com/package/durable-functions)
- [@azure/service-bus](https://www.npmjs.com/package/@azure/service-bus)
- [@azure/blob-storage](https://www.npmjs.com/package/@azure/storage-blob)


You can use packages like [@azure/cosmos](https://www.npmjs.com/package/@azure/cosmos) for interacting with your data. Or connect to your data stores directly through their own npm pacakges like mongo and redi
- [redis](https://www.npmjs.com/package/redis)
- [mongodb](https://www.npmjs.com/package/mongodb)

## Deployment

Most common deployment strategies:
- Azure CLI
- CI/CD Pipelines,
- If using tools like VSCode their are Microsoft supported plugins that help to deploy functions directly from your IDE
  - [Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
  - [Azure Resources Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureresourcegroups)
