//Require the Schemas in models directory
const db = require("../models");

// Defining methods for the inventoryController (exported to routes)
module.exports = {
  findAll: function(req, res) {
    db.Inventory
      .find(req.query)
      .sort({ instrumentName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Inventory
      .findById(req.params.id)
      .sort({ instrumentName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Find by school ID (ManagePage)
  findBySchoolId: function(req, res) {
    db.Inventory
      .find({schoolId: req.params.id})
      .sort({ instrumentName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Inventory
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Inventory
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByCat: function(req, res) {
    db.Inventory
      .find({type: req.params.search})
      .sort({ instrumentName: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findByInst: function(req, res){
    db.Inventory
    .find({instrumentName: new RegExp('^'+req.params.instrument+'$', "i")})
    .sort({ instrumentName: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.json(err));
  },
  //Delete
  //Remove a selected instrument (ManagePage)
  remove: function(req, res) {
    db.Inventory
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};