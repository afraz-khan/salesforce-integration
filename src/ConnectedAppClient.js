const jsforce = require('jsforce')
const { getToken } = require('sf-jwt-token')
const fs = require('fs')

module.exports.ConnectedAppClient = async () => {
  const conn = new jsforce.Connection()
  // const jwtTokenResponse = await getToken({
  //   iss: process.env.CLIENT_ID,
  //   sub: process.env.USERNAME,
  //   aud: process.env.LOGIN_URL,
  //   privateKey: process.env.PRIVATE_KEY,
  // })
  const jwtTokenResponse = await getToken({
    iss: '3MVG9fe4g9fhX0E7T9UDCEjGUAP2mCUyVuoSgjELc0yg1sAcjP_NZ16ecPDVsW04_MkXtWuJiLKo4j9rHhP9b',
    sub: 'me@afrazkhan.com',
    aud: 'https://login.salesforce.com',
    privateKey: fs
      .readFileSync(
        '/home/afrazkhan/work/salesforce-integration/src/server.key',
      )
      .toString('utf-8'),
  })

  conn.initialize({
    instanceUrl: jwtTokenResponse.instance_url,
    accessToken: jwtTokenResponse.access_token,
  })
  return conn
}
