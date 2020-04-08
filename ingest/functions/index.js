const functions = require('firebase-functions');
const admin = require('firebase-admin');
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const rp = require('request-promise');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

function scrapeBBBjs(type, n) {
    // url for next page $(".Next-btcjpv-0").attr("href")
    return new Promise((resolve, reject) => {
        let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=' + n;
        rp(url)
            .then((html) => {
                const $ = cheerio.load(html);

                let venues = [];

                $('.Details-sc-1vh1927-0').each((index, element) => {
                    let json = {
                        "name": "",
                        "phone": "",
                        "location": "",
                        "address": "",
                        "distance": "",
                        "estimatedValue": 0,
                        "acquired": false
                    };
                    json.name = $(element).children("h3").text();
                    json.phone = $(element).children("p").children("a").text();
                    json.address = $(element).children("p").children("strong").text();
                    json.distance = $(element).children("p").children("i").text()
                    venues.push(json);
                })

                if (venues) {
                    resolve(venues);
                } else {
                    reject(Error("No venues found"));
                }
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

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase test 2!");
});

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

    await Promise.all(allPromises).then((values) => {
        for (let j = 0; j < values.length; j++) {
            venues.push(values[j]);
            console.log("running" + j);
        }
    })
    res.send(venues);
    console.log(venues);
});