# Web3Chat

Chat app that uses some [thirdweb](https://thirdweb.com) modules to add web3 capabilities such as:

- Token minting.
- Token transfer between accounts.
- Connect a crypto wallet.

## How to run

In the project directory, execute the following command to start a development server:

`yarn start`

If you want to serve an optimized production build, run:

`yarn build && yarn serve`

In either case, just open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend

The backend for this app has been developed and deployed using [AWS Amplify](https://aws.amazon.com/es/amplify/). It includes a Graphql API using [AppSync](https://aws.amazon.com/es/appsync/) and [DynamoDB](https://aws.amazon.com/es/dynamodb/) as the database solution.

So to make the project work you will have to create and link all these resources.
