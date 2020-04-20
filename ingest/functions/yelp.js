
const searchRequest = {
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
};

exports.yelpme = functions.https.onRequest(async (request, response) => {
    const result = await client.search(request).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        return firstResult
    }).catch(e => {
        response.send(e);
    });
    const prettyJson = JSON.stringify(result, null, 4);
    response.send(prettyJson);
});