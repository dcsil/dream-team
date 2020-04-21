const functions = require('firebase-functions');

const yelp = require('yelp-fusion');
const client = yelp.client('Mq_-ub80ZLwFpMH3oTU8HFZ82Z3-KU2MIkqfkQOOb8EV7IVAEC3Jq0hOfMK7G6XJYzcGcIr8kIGqsgj9vbeHw5B3w0sN0NMT9L4TfROBqS3YyIdjPnX2RLXtJhGBXnYx');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const searchRequest = {
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
};

exports.yelpme = functions.https.onRequest(async (request, response) => {
    let db = functions.database()
    db.ref("convictions").once("value", function (snapshot) {
        let new_data = [];
        snapshot.forEach(doc => {
            new_data.push(doc.val());
        });
        console.log(new_data)
    });
    const result = await client.search(searchRequest).then(response => {
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