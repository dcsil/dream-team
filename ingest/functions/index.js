const functions = require('firebase-functions');
const cheerio = require('cheerio');
const rp = require('request-promise');
const firebase = require("firebase");

const yelp = require('yelp-fusion');
const client = yelp.client('Mq_-ub80ZLwFpMH3oTU8HFZ82Z3-KU2MIkqfkQOOb8EV7IVAEC3Jq0hOfMK7G6XJYzcGcIr8kIGqsgj9vbeHw5B3w0sN0NMT9L4TfROBqS3YyIdjPnX2RLXtJhGBXnYx');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

let firebaseConfig = {
    apiKey: "AIzaSyD7CyGm8hPzSSTI54quyhEcwrS8_xRi1tQ",
    authDomain: "dreamtune-cdf8a.firebaseapp.com",
    databaseURL: "https://dreamtune-cdf8a.firebaseio.com",
    projectId: "dreamtune-cdf8a",
    storageBucket: "dreamtune-cdf8a.appspot.com",
    messagingSenderId: "342835886078",
    appId: "1:342835886078:web:3d9381525d1aea0332b2af",
    measurementId: "G-KM6586Z5PP"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
let database = firebase.database();

function scrapeBBBjs(type, n) {
    return new Promise((resolve, reject) => {
        let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=' + n;
        rp(url)
            .then((html) => {
                const $ = cheerio.load(html);
                let venues = [];
                $('.Details-sc-1vh1927-0').each((index, element) => {
                    let json = { "name": "", "phone": "", "location": "", "address": "", "distance": "", "estimatedValue": 0, "acquired": false };
                    json.name = $(element).children("h3").text();
                    json.phone = $(element).children("p").children("a").text();
                    json.address = $(element).children("p").children("strong").text();
                    json.distance = $(element).children("p").children("i").text()
                    venues.push(json);
                })
                resolve(venues);
            })
            .catch((err) => {
                console.log(err);
                return;
            })
    })
}

function getNumberOfPages(type) {
    return new Promise((resolve, reject) => {
        let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=1';
        rp(url)
            .then((html) => {
                const $ = cheerio.load(html);
                let numberOfPages = parseInt($(".bbb__hideAt-smUp").text().split("/")[1]);
                if (numberOfPages) {
                    resolve(numberOfPages);
                } else {
                    reject(new Error("Unknown number of pages"));
                }
            })
            .catch((err) => {
                console.log(err);
                return;
            })
    })
}

function sortVenues(allVenues) {
    final = []
    for (let i = 0; i < allVenues.length; i++) {
        if (allVenues[i].status == 'fulfilled') {
            final = final.concat(allVenues[i].value);
        }
    }
    return final;
}

function addToDatabase(arr, type) {
    let ref = database.ref('Venues/' + type);
    for (let i = 0; i < arr.length; i++) {
        let place = arr[i];
        ref.orderByChild("address").equalTo(arr[i].address).once("value", snapshot => {
            if (snapshot.exists()) {
                console.log(place.name + " already in database")
            }
            else {
                ref.push(arr[i]);
            }
        })

    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function send_to_db(place, result) {
    database.ref("Venues/restaurant/" + place.key).update({ coordinates: result });
}

function updatePlace(place) {
    console.log(place.val().address);
    let addr = place.val().address;
    client.search({ location: addr }).then(response => {
        const firstResult = response.jsonBody.businesses[0].coordinates;
        send_to_db(place, firstResult);
    }).catch(e => {
        console.log(e);
    });

}

exports.scrapeBBB = functions.https.onRequest(async (req, res) => {
    let venues = []
    let allPromises = []
    let type = "restaurant"
    await getNumberOfPages(type)
        .then((n) => {
            for (let i = 1; i < n + 1; i++) {
                allPromises.push(scrapeBBBjs(type, i))
            }
        })
        .catch((err) => {
            console.log(err);
        })

    await Promise.allSettled(allPromises).then((values) => {
        for (let j = 0; j < values.length; j++) {
            venues.push(values[j]);
        }
    })

    allVenues = venues.flat(Infinity);
    final = sortVenues(allVenues);
    addToDatabase(final, type);
    res.send(final);
    console.log(final);
});

const searchRequest = {
    // Example request body
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
};

exports.yelpme = functions.https.onRequest(async (request, response) => {
    const result = await client.search(request.body).then(response => {
        console.log("I Print here");
        const firstResult = response.jsonBody.businesses[0];
        console.log(firstResult);
        return firstResult
    }).catch(e => {
        response.send(e);
    });
    const prettyJson = JSON.stringify(result, null, 4);
    response.send(prettyJson);
});

exports.makeCoords = functions.https.onRequest(async (req, res) => {
    let i = 0;
    database.ref("Venues/restaurant").once("value", function (snapshot) {
        snapshot.forEach(doc => {
            if (!doc.val().coordinates) {
                sleep(i).then(() => { updatePlace(doc); console.log("H"); });
                i += 1000;
            }
        });
    });
});

module.exports = {
    scrapeBBBjs: scrapeBBBjs,
    getNumberOfPages: getNumberOfPages,
    sortVenues: sortVenues,
    yelpme: this.yelpme,
    makeCoords: this.makeCoords
}