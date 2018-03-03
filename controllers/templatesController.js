//Require the Schemas in models directory
const db = require("../models");

// Defining methods for the templatesController (exported to routes)
module.exports = {
  findAll: function(req, res) {
    db.Templates
      .find(req.query)
      .sort({ instrumentName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Templates
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};