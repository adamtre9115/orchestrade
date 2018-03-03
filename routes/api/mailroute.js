const router = require("express").Router();
// const okta = require('@okta/okta-sdk-nodejs');
const oktaClient = require("../../lib/oktaClient");
var mailgun = require("mailgun-js");
var mailgun = require("mailgun-js")({
  apiKey: process.env.MailKey,
  domain: process.env.MailDomain
});

//mailgun
// matches with "/api/mail"
router.route("/").post(function(req, res) {
  // retrieve information about the current user from okta
  oktaClient.getUser("me").then(user => {
    const userFirstName = user.profile.firstName;
    const userLastName = user.profile.lastName;
    const userEmail = user.profile.email;

    const output = `
        <p>You have a new Orchestrade instrument request!</p>

        <li> Name: ${userFirstName} ${userLastName}</li>
        <li> Email: ${userEmail}</li>
        <li> Phone: Trombone</li>
        <li> Length: 1 Semester</li>
    `;
    console.log(output);

    const data = {
      from:
        "Orchestrade <postmaster@sandbox070c5e1ec6d0415095e68a9742c5a5c0.mailgun.org> ",
      to: "treadam9115@gmail.com",
      subject: "An Instrument Request",
      text: "Testing some Mailgun awesomness!",
      html: output
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
    });
  });
}),
  (module.exports = router);
