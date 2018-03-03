//User Accounts Schema

//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// handle our mongoose connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});

// We will need to create an .env with our new mlab DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB");

// mongoose.connect('mongodb://localhost/orchestradeDB');
//Schema
const usersSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function validatePW(password) {
        if (password.length < 6) {
          return false;
        } else {
          return true;
        }
      },
      message: "Password needs to be longer than 6 Characters!"
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      },
      message: "Please enter a valid email!"
    }
  },
  school: {
    type: String,
    required: true,
    unique: true
  },
  inventory: [{
    type:Schema.Types.ObjectId,
    ref: "inventory",
    required: true, 
    default: 'No Instruments listed'
  }]

});


const Users = mongoose.model("Users", usersSchema);

//Export
module.exports =Users;