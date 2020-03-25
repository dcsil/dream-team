const functions = require('firebase-functions');
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const rp = require('request-promise');

// const yelp = require('yelp-fusion');
// const client = yelp.client('YOUR_API_KEY');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

function scrapeBBBjs(type) {
    let url = 'https://www.bbb.org/search?find_country=CAN&find_latlng=43.671195%2C-79.394576&find_loc=Toronto%2C%20ON&find_text=' + type + '&page=1';
    //rp('https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States')
    rp(url)
        .then((html) => {
            const $ = cheerio.load(html);
            console.log($('.MuiTypography-root Name-sc-1srnbh5-0 iyPLkp MuiTypography-h4 MuiTypography-gutterBottom').text());
            console.log(typeof (html));
            return $('.MuiTypography-root Name-sc-1srnbh5-0 iyPLkp MuiTypography-h4 MuiTypography-gutterBottom').text();
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
    res.send(scrapeBBBjs('restaurant'));
});