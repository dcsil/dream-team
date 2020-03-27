const functions = require('firebase-functions');
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const rp = require('request-promise');

// const yelp = require('yelp-fusion');
// const client = yelp.client('YOUR_API_KEY');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

function scrapeBBBjs(type, n) {
    let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=' + n;
    rp(url)
        .then((html) => {
            const $ = cheerio.load(html);
            console.log($('.jXAMsJ').text());
            let json = {
                "name": "",
                "phone": "",
                "location": "",
                "address": "",
                "distance": "",
                "estimatedValue": 0,
                "acquired": false
            };

            $('.jXAMsJ').each((index, element) => {
                json.name = $(element).children("h3").text();
                json.phone = $(element).children("p").children("a").text();
                json.address = $(element).children("p").children("strong").text();
                json.distance = $(element).children("p").children("i").text()
                console.log(json);
            })

            // url for next page $(".Next-btcjpv-0").attr("href")

            return $('.jXAMsJ').text();
        })
        .catch((err) => {
            console.log(err);
            return;
        })
}

function getNumberOfPages(type) {
    let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=1';
    rp(url)
        .then((html) => {
            const $ = cheerio.load(html);
            let numberOfPages = parseInt($(".bbb__hideAt-smUp").text().split("/")[1]);
            return numberOfPages;
        })
        .catch((err) => {
            console.log(err);
            return;
        })
}

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase test 2!");
});

exports.scrapeBBB = functions.https.onRequest((req, res) => {
    for (let i = 1; i < getNumberOfPages("gym") + 1; i++) {
        res.send(scrapeBBBjs('gym', i));
    }
});