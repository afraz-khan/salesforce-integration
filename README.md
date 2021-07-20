# salesforce-server-to-server-integration

This project is a sample app for salesforce server-to-server integration using [OAuth2.0 JWT Bearer Flow](https://help.salesforce.com/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm&type=5).

### Features

Two queries are written in the code to represent the integration flow.

- Fetch all ProductItems
- Find stock/quantity of a single ProductItem

### Quick setup

- Setup a connected app in your salesforce org using this method [here](https://www.drupal.org/docs/8/modules/salesforce-suite/create-a-oauth-jwt-bearer-token-flow-connected-app-4x).
- Setup some [ProductItems](https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_productitem.htm) in your salesforce org.
- Set the environment variables given in `src/ConnectAppClient.js` file for your org.
- Deploy the app to the hosting service you have.
- Queries will start fetching data from your org.
- For demonstration use the below section of the web page.
  ![demonstration](/public/images/bottom.png)
- You can extend the code for your usecase easily.

### Main libs

- [jsforce](https://jsforce.github.io/)
  Client for salesforce connected app operations.
- [sf-jwt-token](https://www.npmjs.com/package/sf-jwt-token)
  An implementation of Salesforce OAuth 2.0 JWT bearer token flow.

Demo: https://salesforcejwt.herokuapp.com/
