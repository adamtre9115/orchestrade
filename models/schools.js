//Global Templates Schema
//...

//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const schoolsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
});

const Schools = mongoose.model("Schools", schoolsSchema);

//Export
module.exports = Schools;