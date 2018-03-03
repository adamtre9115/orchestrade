const router = require("express").Router();
const usersController = require("../../controllers/usersController.js");
const oktaClient = require('../../lib/oktaClient');

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)

router.post('/', (req, res, next) => {
  console.log("this is the", req.body)
  if (!req.body) return res.sendStatus(400);
  const newUser = {
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      login: req.body.email,
    },
    credentials: {
      password: {
        value: req.body.password
      }
    }
  };
  
  oktaClient.createUser(newUser)
    .then(user => {
      console.log(user);
      res.status(201);
      res.send(user);
    })
    .catch(err => {
      console.log(err);
      res.status(400);
      res.send(err);
    })
});

module.exports = router;