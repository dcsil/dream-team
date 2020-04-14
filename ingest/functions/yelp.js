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

function dist(coord1, coord2, R = 5017483) {
    lon1, lat1 = coord1
    lon2, lat2 = coord2
    phi_1 = lat1 * Math.PI / 180
    phi_2 = lat2 * Math.PI / 180
    delta_phi = (lat2 - lat1) * Math.PI / 180
    delta_lambda = (lon2 - lon1) * Math.PI / 180
    a = Math.sin(delta_phi / 2.0) ** 2 + Math.cos(phi_1) * Math.cos(phi_2) * Math.sin(delta_lambda / 2.0) ** 2
    c = 2 * Math.atan2(math.sqrt(a), Math.sqrt(1 - a))
    return R * c
}

dist((43.6649984, -79.3899023), (43.6651353, -79.3892989)) = 52.88679113688812
dist((43.6647047, -79.3891190), (43.6649984, -79.3899023), 5017483) = 68.75812013866546