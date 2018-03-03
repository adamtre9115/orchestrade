const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
    {
        useMongoClient: true
    }
);

//Sample data here...
const testInstruments = [
    {
        schoolId: 1,
        instrumentName: "Trombone",
        school: "Garner Magnet High School",
        type: "Brass",
        brand: "Conn",
        image: "https://rettigmusic.com/wp-content/uploads/2016/03/Conn-88HO-Trombone-Header-400x400.jpg",
        isAvailable: "true",
        details: "Information about the instrument."
    },
    {
        schoolId: 1,
        instrumentName: "Violin",
        school: "South View High School",
        type: "String",
        brand: "Cecilo",
        image: "https://pbs.twimg.com/profile_images/525738518258012160/Uzrm1CaT_400x400.jpeg",
        isAvailable: "true",
        details: "Information about the instrument."
    },
    {
        schoolId: 3,
        instrumentName: "Saxophone",
        school: "Seventy-First High School",
        type: "Woodwind",
        brand: "King",
        image: "https://www.matthewsmuziek.nl/media/catalog/product/cache/2/small_image/400x/9df78eab33525d08d6e5fb8d27136e95/k/i/king_-_altosax_-_zephyr_vintage-4.jpg",
        isAvailable: "true",
        details: "Information about the instrument."
    }

]
const limit = 1;

function getNewData() {
    db.Inventory.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of agents for initialization and create entries
            testInstruments.map(function(user) {
                let newIns = new db.Inventory(user)
                newIns.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    // return res.status(500).json({
                    //     msg: 'internal server error'
                    // });
                    }
                })
            })
            console.log('Test Instruments Initialized in MongoDB')
            return
        } else {
            console.log('Instruments Exist in MongoDB')
        }
    })
}

getNewData()