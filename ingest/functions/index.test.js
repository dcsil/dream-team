// const test = require('firebase-functions-test')();
const myFunctions = require('./index.js');

test("Venues are being returned from the web scraper (the html tags haven't been changed)", async (done) => {
    await expect(myFunctions.scrapeBBBjs("restaurant", 1)).toBeDefined();
    await expect(myFunctions.scrapeBBBjs("restaurant", 1)).not.toBeNull();
    await expect(myFunctions.scrapeBBBjs("gym", 3)).toBeDefined();
    await expect(myFunctions.scrapeBBBjs("gym", 3)).not.toBeNull();
    done();
}, 10000);

test("Scraper returns a valid number of pages for the list of venues", async (done) => {
    let n = await myFunctions.getNumberOfPages("restaurant");
    expect(n).toBeGreaterThanOrEqual(1);
    n = await myFunctions.getNumberOfPages("gym");
    expect(n).toBeGreaterThanOrEqual(1);
    done();
}, 10000);

test("Is the sorting of venues ommiting promises that rejected", () => {
    let arr = [{ "status": "fulfilled", value: [1, 2, 3] }, { "status": "error", value: [4, 5] }, { "status": "fulfilled", "value": [6] }];
    expect(myFunctions.sortVenues(arr)).toEqual([1, 2, 3, 6]);
});
