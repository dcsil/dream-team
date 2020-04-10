const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cheerio = require('cheerio');
const rp = require('request-promise');
const firebase = require("firebase");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

var firebaseConfig = {
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
                    reject(Error("Unknown number of pages"));
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
    for (let i = 0; i < arr.length; i++) {
        let ref = database.ref('Venues/' + type);
        ref.push(arr[i]);
    }
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