const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: process.env.OrgUrl,
  token: process.env.OrgToken
});

module.exports = client;