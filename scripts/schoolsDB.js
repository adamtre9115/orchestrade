const mongoose = require("mongoose");
const db = require("../models");


//cd into /scripts and run this file to add the schools collection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
    {
        useMongoClient: true
    }
);

//Schools used to verify new users are from legitamite school
const schoolsList = [

    {
        name: "Albemarle Road Elementary",
        number: "980-343-6414"
    },
    {
        name: "Allenbrook Elementary School",
        number: "980-343-6004"
    },
    {
        name: "Ashley Park Pre K-8 School",
        number: "980-343-6018"
    },
    {
        name: "Bain Elementary School",
        number: "980-343-6915"
    },
    {
        name: "Ballantyne Elementary School",
        number: "980-343-0413"
    },
    {
        name: "Barnette Elementary School",
        number: "980-343-0372"
    },
    {
        name: "Barringer Academic Center",
        number: "980-343-5533"
    },
    {
        name: "Berewick Elementary School",
        number: "980-344-1010"
    },
    {
        name: "Berryhill School",
        number: "980-343-6100"
    },
    {
        name: "Beverly Woods Elementary School",
        number: "980-343-3627"
    },
    {
        name: "Billingsville Elementary School",
        number: "980-343-5520"
    },
    {
        name: "Blythe Elementary School",
        number: "980-343-5770"
    },
    {
        name: "Briarwood Academy",
        number: "980-343-6475"
    },
    {
        name: "Bruns Academy",
        number: "980-343-5495"
    },
    {
        name: "Chantilly Montessori School",
        number: "980-343-0692"
    },
    {
        name: "Clear Creek Elementary School",
        number: "980-343-6922"
    },
    {
        name: "Collinswood Language Academy",
        number: "980-343-5820"
    },
    {
        name: "Cornelius Elementary School",
        number: "980-343-3905"
    },
    {
        name: "Cotswold Elementary School",
        number: "980-343-6720"
    },
    {
        name: "Croft Community School",
        number: "980-343-0370"
    },
    {
        name: "Crown Point Elementary School",
        number: "980-343-6535"
    },
    {
        name: "David Cox Road Elementary School",
        number: "980-343-6540"
    },
    {
        name: "Davidson Elementary School",
        number: "980-343-3900"
    },
    {
        name: "Devonshire Elementary School",
        number: "980-343-6445"
    },
    {
        name: "Dilworth Elementary School",
        number: "980-343-2240"
    },
    {
        name: "Dorothy J. Vaughan Academy of Technology",
        number: "980-343-0030"
    },
    {
        name: "Druid Hills Academy",
        number: "980-343-5515"
    },
    {
        name: "E. E. Waddell Language Academy",
        number: "980-343-5815"
    },
    {
        name: "Eastover Elementary School",
        number: "980-343-5505"
    },
    {
        name: "Elizabeth Lane Elementary School",
        number: "980-343-5700"
    },
    {
        name: "Elizabeth Traditional Elementary School",
        number: "980-343-5475"
    },
    {
        name: "Elon Park Elementary School",
        number: "980-343-1440"
    },
    {
        name: "Endhaven Elementary School",
        number: "980-343-5436"
    },
    {
        name: "First Ward Creative Arts Academy",
        number: "980-343-5485"
    },
    {
        name: "Grand Oak Elementary School",
        number: "980-343-2063"
    },
    {
        name: "Greenway Park Elementary School",
        number: "980-343-5060"
    },
    {
        name: "Hawk Ridge Elementary School",
        number: "980-343-5927"
    },
    {
        name: "Hickory Grove Elementary School",
        number: "980-343-6464"
    },
    {
        name: "Hidden Valley Elementary School",
        number: "980-343-6810"
    },
    {
        name: "Highland Creek Elementary School",
        number: "980-343-1065"
    },
    {
        name: "Highland Mill Montessori Elementary School",
        number: "980-343-5525"
    },
    {
        name: "Highland Renaissance Academy",
        number: "980-343-5511"
    },
    {
        name: "Hornets Nest Elementary School",
        number: "980-343-6110"
    },
    {
        name: "Huntersville Elementary School",
        number: "980-343-3835"
    },
    {
        name: "Huntingtowne Farms Elementary School",
        number: "980-343-3625"
    },
    {
        name: "Idlewild Elementary School",
        number: "980-343-6411"
    },
    {
        name: "Irwin Academic Center",
        number: "980-343-5480"
    },
    {
        name: "J.H. Gunn Elementary School",
        number: "980-343-6477"
    },
    {
        name: "J.V. Washam Elementary School",
        number: "980-343-1071"
    },
    {
        name: "John M. Morehead STEM Academy",
        number: "980-343-5775"
    },
    {
        name: "Joseph W. Grier Academy",
        number: "980-343-5671"
    },
    {
        name: "Lake Wylie Elementary School",
        number: "980-343-3680"
    },
    {
        name: "Lansdowne Elementary School",
        number: "980-343-6733"
    },
    {
        name: "Lawrence Orr Elementary School",
        number: "980-343-9919"
    },
    {
        name: "Lebanon Road Elementary School",
        number: "980-343-3640"
    },
    {
        name: "Long Creek Elementary School",
        number: "980-343-6095"
    },
    {
        name: "Mallard Creek Elementary School",
        number: "980-343-3980"
    },
    {
        name: "Marie G. Davis",
        number: "980-343-0006"
    },
    {
        name: "Matthews Elementary School",
        number: "980-343-3940"
    },
    {
        name: "McAlpine Elementary School",
        number: "980-343-3750"
    },
    {
        name: "McKee Road Elementary School",
        number: "980-343-3970"
    },
    {
        name: "Merry Oaks International Academy",
        number: "980-343-6422"
    },
    {
        name: "Montclaire Elementary",
        number: "980-343-3635"
    },
    {
        name: "Mountain Island Lake Academy",
        number: "980-343-6948"
    },
    {
        name: "Myers Park Traditional Elementary School",
        number: "980-343-5522"
    },
    {
        name: "Nathaniel Alexander Elementary School",
        number: "980-343-5268"
    },
    {
        name: "Nations Ford Elementary School",
        number: "980-343-5838"
    },
    {
        name: "Newell Elementary School",
        number: "980-343-6820"
    },
    {
        name: "Oakdale Elementary School",
        number: "980-343-6076"
    },
    {
        name: "Oakhurst STEAM Academy",
        number: "980-343-6482"
    },
    {
        name: "Oaklawn Language Academy",
        number: "980-343-0400"
    },
    {
        name: "Olde Providence Elementary School",
        number: "980-343-3755"
    },
    {
        name: "Palisades Park Elementary",
        number: "980-343-9895"
    },
    {
        name: "Park Road Montessori School",
        number: "980-343-5830"
    },
    {
        name: "Parkside Elementary School",
        number: "980-343-9915"
    },
    {
        name: "Paw Creek Elementary School",
        number: "980-343-6088"
    },
    {
        name: "Pineville Elementary School",
        number: "980-343-3920"
    },
    {
        name: "Pinewood Elementary School",
        number: "980-343-5825"
    },
    {
        name: "Piney Grove Elementary School",
        number: "980-343-6470"
    },
    {
        name: "Polo Ridge Elementary School",
        number: "980-343-0749"
    },
    {
        name: "Providence Spring Elementary School",
        number: "980-343-6935"
    },
    {
        name: "Rama Road Elementary School",
        number: "980-343-6730"
    },
    {
        name: "Reedy Creek Elementary School",
        number: "980-343-6480"
    },
    {
        name: "Reid Park Academy",
        number: "980-343-5035"
    },
    {
        name: "Renaissance West STEAM Academy",
        number: "980-343-0049"
    },
    {
        name: "River Gate Elementary School",
        number: "980-344-1000"
    },
    {
        name: "River Oaks Academy",
        number: "980-344-1020"
    },
    {
        name: "Sedgefield Elementary School",
        number: "980-343-5826"
    },
    {
        name: "Selwyn Elementary School",
        number: "980-343-5835"
    },
    {
        name: "Shamrock Gardens Elementary School",
        number: "980-343-6440"
    },
    {
        name: "Sharon Elementary School",
        number: "980-343-6725"
    },
    {
        name: "Smithfield Elementary School",
        number: "980-343-6550"
    },
    {
        name: "Starmount Academy of Excellence",
        number: "980-343-3630"
    },
    {
        name: "Statesville Road Elementary School",
        number: "980-343-6815"
    },
    {
        name: "Steele Creek Elementary School",
        number: "980-343-3810"
    },
    {
        name: "Sterling Elementary School",
        number: "980-343-3636"
    },
    {
        name: "Stoney Creek Elementary School",
        number: "980-344-1030"
    },
    {
        name: "Thomasboro Academy",
        number: "980-343-6000"
    },
    {
        name: "Torrence Creek Elementary School",
        number: "980-343-0695"
    },
    {
        name: "Trillium Springs Montessori School",
        number: "980-343-9442"
    },
    {
        name: "Tuckaseegee Elementary School",
        number: "980-343-6055"
    },
    {
        name: "University Meadows Elementary School",
        number: "980-343-3685"
    },
    {
        name: "University Park Creative Arts School",
        number: "980-343-5178"
    },
    {
        name: "Walter G. Byers School",
        number: "980-343-6940"
    },
    {
        name: "Westerly Hills Academy",
        number: "980-343-6021"
    },
    {
        name: "Whitewater Academy",
        number: "980-343-0003"
    },
    {
        name: "Winding Springs Elementary School",
        number: "980-343-5140"
    },
    {
        name: "Windsor Park Elementary School",
        number: "980-343-6405"
    },
    {
        name: "Winget Park Elementary School",
        number: "980-343-1063"
    },
    {
        name: "Winterfield Elementary School",
        number: "980-343-6400"
    },
    {
        name: "Albemarle Road Middle School",
        number: "980-343-6420"
    },
    {
        name: "Alexander Graham Middle School",
        number: "980-343-5810"
    },
    {
        name: "Ashley Park Pre K-8 School",
        number: "980-343-6018"
    },
    {
        name: "Bailey Middle School",
        number: "980-343-1068"
    },
    {
        name: "Berryhill School",
        number: "980-343-6100"
    },
    {
        name: "Bruns Academy",
        number: "980-343-5495"
    },
    {
        name: "Carmel Middle School",
        number: "980-343-6705"
    },
    {
        name: "Cochrane Collegiate Academy",
        number: "980-343-6460"
    },
    {
        name: "Collinswood Language Academy",
        number: "980-343-5820"
    },
    {
        name: "Community House Middle School",
        number: "980-343-0689"
    },
    {
        name: "Coulwood STEM Academy",
        number: "980-343-6090"
    },
    {
        name: "Crestdale Middle School",
        number: "980-343-5755"
    },
    {
        name: "Druid Hills Academy",
        number: "980-343-5515"
    },
    {
        name: "E. E. Waddell Language Academy",
        number: "980-343-5815"
    },
    {
        name: "Eastway Middle School",
        number: "980-343-6410"
    },
    {
        name: "Francis Bradley Middle School",
        number: "980-343-5750"
    },
    {
        name: "J.M. Alexander Middle School",
        number: "980-343-3830"
    },
    {
        name: "James Martin Middle School",
        number: "980-343-5382"
    },
    {
        name: "Jay M. Robinson Middle School",
        number: "980-343-6944"
    },
    {
        name: "John M. Morehead STEM Academy",
        number: "980-343-5775"
    },
    {
        name: "John Taylor Williams Secondary Montessori",
        number: "980-343-0040"
    },
    {
        name: "Kennedy Middle School",
        number: "980-343-5540"
    },
    {
        name: "Marie G. Davis",
        number: "980-343-0006"
    },
    {
        name: "Martin Luther King, Jr. Middle School",
        number: "980-343-0698"
    },
    {
        name: "McClintock Middle School",
        number: "980-343-6425"
    },
    {
        name: "Mint Hill Middle School",
        number: "980-343-5439"
    },
    {
        name: "Mountain Island Lake Academy",
        number: "980-343-6948"
    },
    {
        name: "Northeast Middle School",
        number: "980-343-6920"
    },
    {
        name: "Northridge Middle School",
        number: "980-343-5015"
    },
    {
        name: "Northwest School of the Arts",
        number: "980-343-5500"
    },
    {
        name: "Oaklawn Language Academy",
        number: "980-343-0400"
    },
    {
        name: "Piedmont Middle School",
        number: "980-343-5435"
    },
    {
        name: "Quail Hollow Middle School",
        number: "980-343-3620"
    },
    {
        name: "Randolph Middle School",
        number: "980-343-6700"
    },
    {
        name: "Ranson Middle School",
        number: "980-343-6800"
    },
    {
        name: "Reid Park Academy",
        number: "980-343-5035"
    },
    {
        name: "Ridge Road Middle School",
        number: "980-344-3410"
    },
    {
        name: "Sedgefield Middle School",
        number: "980-343-5840"
    },
    {
        name: "South Charlotte Middle School",
        number: "980-343-3670"
    },
    {
        name: "Southwest Middle School",
        number: "980-343-5006"
    },
    {
        name: "Thomasboro Academy",
        number: "Thomasboro Academy"
    },
    {
        name: "Walter G. Byers School",
        number: "980-343-6940"
    },
    {
        name: "Westerly Hills Academy",
        number: "980-343-6021"
    },
    {
        name: "WhiteWater Middle School",
        number: "980-344-3400"
    },
    {
        name: "Ardrey Kell High School",
        number: "980-343-0860"
    },
    {
        name: "Butler High School",
        number: "980-343-6300"
    },
    {
        name: "Cato Middle College High School",
        number: "980-343-1452"
    },
    {
        name: "Charlotte Engineering Early College",
        number: "980-343-9898"
    },
    {
        name: "Charlotte Teacher Early College",
        number: "980-343-9898"
    },
    {
        name: "East Mecklenburg High School",
        number: "980-343-6430"
    },
    {
        name: "eLearning Academy",
        number: "980-343-3666"
    },
    {
        name: "Garinger High School",
        number: "980-343-6450"
    },
    {
        name: "Harding University High School",
        number: "980-343-6007"
    },
    {
        name: "Harper Middle College High School",
        number: "980-343-0012"
    },
    {
        name: "Hawthorne Academy of Health Sciences",
        number: "980-343-6011"
    },
    {
        name: "Hopewell High School",
        number: "980-343-5988"
    },
    {
        name: "iMeck at Cochrane",
        number: "980-343-6460"
    },
    {
        name: "Independence High School",
        number: "980-343-6900"
    },
    {
        name: "John Taylor Williams Secondary Montessori",
        number: "980-343-0040"
    },
    {
        name: "Levine Middle College High",
        number: "980-343-9437"
    },
    {
        name: "Mallard Creek High School",
        number: "980-343-1341"
    },
    {
        name: "Merancas Middle College @ CPCC",
        number: "980-343-0035"
    },
    {
        name: "Military and Global Leadership Academy",
        number: "980-343-6011"
    },
    {
        name: "Myers Park High School",
        number: "980-343-5800"
    },
    {
        name: "North Mecklenburg High School",
        number: "980-343-3840"
    },
    {
        name: "Northwest School of the Arts",
        number: "980-343-5500"
    },
    {
        name: "Olympic, Biotechnology, Health and Public Administration",
        number: "980-343-1110"
    },
    {
        name: "Olympic, Math, Engineering, Technology and Science",
        number: "980-343-1101"
    },
    {
        name: "Olympic, Renaissance School of Arts and Technology",
        number: "980-343-1107"
    },
    {
        name: "Olympic, School of Executive Leadership & Entrepreneurial Development",
        number: "980-343-1104"
    },
    {
        name: "Olympic, School of Technology Entrepreneurship & Advanced Manufacturing",
        number: "980-343-1113"
    },
    {
        name: "Performance Learning Center",
        number: "980-343-1118"
    },
    {
        name: "Phillip O. Berry Academy of Technology",
        number: "980-343-5992"
    },
    {
        name: "Providence High School",
        number: "980-343-5390"
    },
    {
        name: "Rocky River High School",
        number: "980-344-0409"
    },
    {
        name: "South Mecklenburg High School",
        number: "980-343-3600"
    },
    {
        name: "West Charlotte High School",
        number: "980-343-6060"
    },
    {
        name: "West Mecklenburg High School",
        number: "980-343-6080"
    },
    {
        name: "William Amos Hough High School",
        number: "980-344-0514"
    },
    {
        name: "Zebulon B. Vance High School",
        number: "980-343-5284"
    }

]
const limit = 1;

function getNewData() {
    db.Schools.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of schools for initialization and create entries
            schoolsList.map(function(user) {
                let newIns = new db.Schools(user)
                newIns.save(function(err, data) {
                    if (err) {
                        console.log(err);
                    // return res.status(500).json({
                    //     msg: 'internal server error'
                    // });
                    }
                })
            })
            console.log('Schools Initialized in MongoDB')
            return
        } else {
            console.log('Schools Exist in MongoDB')
        }
    })
}

getNewData()