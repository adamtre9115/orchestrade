const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
  {
    useMongoClient: true
  }
);

//Sample data here...
const testCrowd = [
    {
        userName: "JimmySmart",
        firstName: "Jimmy",
        lastName: "Neutron",
        password: "IamGenius",
        email: "Jimmy@gmail.com",
        phone: '704-555-1212',
        school: "High School High"
    },
    {
        userName: "FairlyOdd",
        firstName: "Timmy",
        lastName: "Turner",
        password: "1234567",
        email: "Timmy@gmail.com",
        phone: '704-555-1212',
        school: "High School 2"
    },
    {
        userName: "IWillWin",
        firstName: "Anakin",
        lastName: "Skywalker",
        password: "passwords",
        email: "anakin@gmail.com",
        phone: '704-555-1212',
        school: "High School 3"
    }

]
const limit = 1;

function getNewData() {
    db.Users.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of agents for initialization and create entries
            testCrowd.map(function(user) {
                let newUser = new db.Users(user)
                newUser.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    // return res.status(500).json({
                    //     msg: 'internal server error'
                    // });
                    }
                })
            })
            console.log('Test Users Initialized in MongoDB')
            return
        } else {
            console.log('Users Exist in MongoDB')
        }
    })
}

getNewData()