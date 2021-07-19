const jsforce = require('jsforce')
const { getToken } = require('sf-jwt-token')

module.exports.ConnectedAppClient = async () => {
  const conn = new jsforce.Connection()
  const jwtTokenResponse = await getToken({
    iss: process.env.CLIENT_ID,
    sub: process.env.USERNAME,
    aud: process.env.LOGIN_URL,
    privateKey: process.env.PRIVATE_KEY,
  })

  conn.initialize({
    instanceUrl: jwtTokenResponse.instance_url,
    accessToken: jwtTokenResponse.access_token,
  })
  return conn
}
