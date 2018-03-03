const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

//cd into /scripts and run this file to add the templates collection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/orchestradeDB",
    {
        useMongoClient: true
    }
);

//Instrument templates for the user to create their instruments from
const instrumentTemplates = [
    //BRASS
    {
        instrumentName: "Alto/Tenor Horn",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/YAH-203-Series-Eb-Alto-Horn-Silver-Plated/471289000946000-00-500x500.jpg",
    },
    {
        instrumentName: "Baritone Horn",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/ABH-321-Series-Bb-Baritone-Horn-ABH-321-Lacquer/J15564000002000-00-500x500.jpg",
    },
    {
        instrumentName: "Bugle",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/ABG-201II-Series-Bb-Bugle/463164000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Cornet",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/YCR-2310III-Standard-Bb-Cornet-Bb-Cornet/H82867000001000-00-500x500.jpg",
    },
    {
        instrumentName: "French Horn",
        type: "Brass",
        image: "https://media.wwbw.com/is/image/MMGS7/JHR1110-Performance-Series-French-Horn/J40000000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Mellophone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/JMP1100M-Quantum-Series-F-Marching-Mellophone-Silver/J37227000002000-00-500x500.jpg",
    },
    {
        instrumentName: "Saxophone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Prelude-by-Conn-Selmer-AS711-Student-Model-Alto-Saxophone/585558000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Trombone",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/351-Series-Student-Trombone/461322000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Trumpet",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/2055-Silver-Flair-Series-Bb-Trumpet-2055T-Silver-1st-Valve-Thumb-Trigger/483590000999090-00-500x500.jpg",
    },
    {
        instrumentName: "Tuba",
        type: "Brass",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/BE981-Sovereign-Series-Compensating-EEb-Tuba-Silver/468436000921000-00-500x500.jpg",
    },
    //BRASS

    //KEYBOARD
    {
        instrumentName: "Accordion",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Accordion-AL3112-Red-with-Case-GCF/J21333000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Electronic Keyboard",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/E-09-Interactive-Arranger-Electronic-Keyboard--Factory/701860000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Piano",
        type: "Keyboard",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/MDG-330-Mini-Grand-Digital-Piano/J19266000000000-00-500x500.jpg",
    },
    //KEYBOARD

    //PERCUSSION
    {
        instrumentName: "Bass Drum",
        type: "Percussion",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Reference-Bass-Drum-Scarlet-Fade-24-x-18-in./446699000655491-00-500x500.jpg",
    },
    {
        instrumentName: "Bongo Drums",
        type: "Percussion",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Traditional-Wood-Bongos/473444000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Cymbal",
        type: "Percussion",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/A-Series-Crash-Ride-Cymbal-20-in./443832000000089-00-500x500.jpg",
    },
    {
        instrumentName: "Floor Tom",
        type: "Percussion",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Live-Custom-Oak-Floor-Tom-18-x-16-in.-Black-Shadow-Sunburst/J11247000001001-00-500x500.jpg",
    },
    {
        instrumentName: "Hi Hat",
        type: "Percussion",
        image: "http://www.xm-world.com/images/product120802531755779.jpg",
    },
    {
        instrumentName: "Marching Percussion",
        type: "Percussion",
        image: "http://media.guitarcenter.com/is/image/MMGS7/High-Tension-Marching-Snare-Drum-with-Carrier-14-x-12-White/J14944000002001-00-500x500.jpg",
    },
    {
        instrumentName: "Rack Tom",
        type: "Percussion",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Vision-Birch-Tom-Jet-Black-12x9/H71970000001001-00-500x500.jpg",
    },
    {
        instrumentName: "Rainstick",
        type: "Percussion",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Chilean-Rainstick-20-in./449630000000089-00-500x500.jpg",
    },
    {
        instrumentName: "Snare Drum",
        type: "Percussion",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Vision-Birch-Snare-Drum-Black-with-Black-Hardware-14x5.5/583136000001325-00-500x500.jpg",
    },
    {
        instrumentName: "Triangle",
        type: "Percussion",
        image: "http://moziru.com/images/triangle-clipart-music-instrument-8.jpg",
    },
    //PERCUSSION

    //STRING
    {
        instrumentName: "Violin",
        type: "String",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Prelude-Series-Violin-Outfit-1-8-Size/J05662000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Viola",
        type: "String",
        image: "http://www.sharmusic.com/productimages/image.axd/i.kjs70v165/w.500/h.500/karl+joseph+schneider+%23174%3B+premier+viola+-+16.5+inch_.jpg",
    },
    {
        instrumentName: "Cello",
        type: "String",
        image: "https://www.bassbags.co.uk/wp-content/uploads/2015/05/P200-cello-front.jpg",
    },
    {
        instrumentName: "Double Bass",
        type: "String",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Academy-Series-Double-Bass-Outfit-1-2/J31593000002000-00-500x500.jpg",
    },
    {
        instrumentName: "Acoustic Guitar",
        type: "String",
        image: "http://media.guitarcenter.com/is/image/MMGS7/2018-J-15-Walnut-Burst-Acoustic-Electric-Guitar-Walnut-Burst/K45458000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Electric Guitar",
        type: "String",
        image: "http://media.guitarcenter.com/is/image/MMGS7/2017-Les-Paul-Standard-T-Electric-Guitar-Heritage-Cherry-Sunburst/J45014000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Bass Guitar",
        type: "String",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/Standard-Precision-Bass-Guitar-Brown-Sunburst-Gloss-Maple-Fretboard/H76529000005001-00-500x500.jpg",
    },
    {
        instrumentName: "Harp",
        type: "String",
        image: "http://media.guitarcenter.com/is/image/MMGS7/Sharpsicle-Harp-Natural-Maple/475017000914000-00-500x500.jpg",
    },
    //String

    //WOODWIND
    {
        instrumentName: "Bassoon",
        type: "Woodwind",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/ABN-41S-Bassoon-Varnished-Maple/464444000917000-00-500x500.jpg",
    },
    {
        instrumentName: "Clarinet",
        type: "Woodwind",
        image: "https://media.wwbw.com/is/image/MMGS7/Recital-Model-Bb-Clarinet/463106000000000-00-500x500.jpg",
    },
    {
        instrumentName: "Flute",
        type: "Woodwind",
        image: "http://media.musiciansfriend.com/is/image/MMGS7/695-Dolce-Vigore-Professional-Series-Open-Hole-Flute-B-Foot-Split-E-C-Trill-D-Roller/J14681000001000-00-500x500.jpg",
    },
    {
        instrumentName: "Oboe",
        type: "Woodwind",
        image: "https://ae01.alicdn.com/kf/HTB1zxeUQFXXXXa8XpXXq6xXFXXXj/New-semiautomatic-oboe-C-key-full-conservatory.jpg",
    },
    {
        instrumentName: "Piccolo",
        type: "Woodwind",
        image: "https://media.wwbw.com/is/image/MMGS7/JPC1010-Piccolo/460201000000000-00-500x500.jpg",
    },
    //WOODWIND
]
const limit = 1;

function getNewData() {
    db.Templates.find({}).limit(limit).exec(function(err, collection) {
        if (collection.length === 0) {
            // iterate over the set of agents for initialization and create entries
            instrumentTemplates.map(function(user) {
                let newIns = new db.Templates(user)
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