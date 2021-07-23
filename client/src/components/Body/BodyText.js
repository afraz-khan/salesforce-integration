function BodyText(params) {
  return (
    <p id="bodytext" className="text-xl-left">
      This sample app connects to a salesforce{' '}
      <a
        href={
          'https://help.salesforce.com/articleView?id=sf.remoteaccess_oauth_jwt_flow.htm&type=5'
        }
      >
        Connected App
      </a>{' '}
      (supporting OAuth JWT Flow) behind the scenes which talks with salesforce
      rest api to access salesforce data.
      <br />
      Two queries are written in the code just to represent the integration
      flow.
      <br />
      <span className="bodybullets">
        • Fetch all ProductItems
        <br />• Find stock/quantity of a single ProductItem
      </span>
      <br />
      Run the code for your salesforce org: <br />
      <span className="bodybullets">
        • Setup a connected app for JWT flow using this method{' '}
        <a
          href={
            'https://www.drupal.org/docs/8/modules/salesforce-suite/create-a-oauth-jwt-bearer-token-flow-connected-app-4x'
          }
        >
          here
        </a>
        . <br />• Setup some{' '}
        <a
          href={
            'https://developer.salesforce.com/docs/atlas.en-us.api.meta/api/sforce_api_objects_productitem.htm'
          }
        >
          ProductItems
        </a>{' '}
        (Inventories) in your salesforce org. <br />• Set the environment
        variables given in <code>src/ConnectAppClient.js</code> file for your
        org. <br />• Queries will start fetching data from your org. <br />• You
        can extend the code for your usecase. <br />
      </span>
      <br />
      <mark>
        <i>
          I have setup some dummy ProductItems in my sandbox salesforce org for
          demonstration.
        </i>
        👇
      </mark>
    </p>
  )
}

export default BodyText
