const functions = require('firebase-functions');
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');
const rp = require('request-promise');

const yelp = require('yelp-fusion');
const client = yelp.client('Mq_-ub80ZLwFpMH3oTU8HFZ82Z3-KU2MIkqfkQOOb8EV7IVAEC3Jq0hOfMK7G6XJYzcGcIr8kIGqsgj9vbeHw5B3w0sN0NMT9L4TfROBqS3YyIdjPnX2RLXtJhGBXnYx');


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions