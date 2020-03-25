const functions = require('firebase-functions');
var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
// const yelp = require('yelp-fusion');
// const client = yelp.client('YOUR_API_KEY');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase test 2!");
});
