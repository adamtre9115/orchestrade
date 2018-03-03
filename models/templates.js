//Global Templates Schema
//...

//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const templateSchema = new Schema({
  instrumentName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

const Templates = mongoose.model("Templates", templateSchema);

//Export
module.exports = Templates;