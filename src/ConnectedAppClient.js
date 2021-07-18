const jsforce = require('jsforce');
const {getToken} = require('sf-jwt-token');
const fs = require('fs');

module.exports.ConnectedAppClient = async () => {
    const conn = new jsforce.Connection();
    const privateKey = fs.readFileSync('./server.key').toString('utf8');

    const jwtTokenResponse = await getToken(
        {
            iss: '3MVG9fe4g9fhX0E7T9UDCEjGUAP2mCUyVuoSgjELc0yg1sAcjP_NZ16ecPDVsW04_MkXtWuJiLKo4j9rHhP9b',
            sub: 'me@afrazkhan.com',
            aud: 'https://login.salesforce.com',
            privateKey: privateKey,
        }
    );
    conn.initialize({
        instanceUrl: jwtTokenResponse.instance_url,
        accessToken: jwtTokenResponse.access_token
    })

    return conn;
};