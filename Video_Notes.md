Our data is scraped automatically using the Better Business Bureau directory. We run the scraping function by cURLing https://us-central1-dreamtune-cdf8a.cloudfunctions.net/scrapeBBB. This runs a scraping function from the Better Business Bureau which looks for restaurants and gyms (places we chose to focus on as they had the highest tariffs). This fills up the most essential fields of the venue.

We also run a different function called getCoords which uses the venue address to locate the coordinates of the place. In addition, we get comments while running this function. The functions talked about till now can be found in ingest/functions/index.js

Once the app is started using 'npm start' or 'https://dreamtune-cdf8a.web.app/'. You may login with any credentials as we have set the credentials to always return True for login. We also always login as Jessica Jones as we set up DB data such as "Managed People" and profile pictures.

All the data in the index page is dynamically loaded and has a live event listener. This means a change is instantly registered on the website without having to reload the page. (See app/live_events.mov for an example).

Our main functionality included:
1) Providing concise information about the companies newest leads
2) Providing graphs which give an overview of the company's current status
3) Easy interfacing to "Manage People" and "Social Traffic"
4) Mapping of the venues
5) Easy means to contact Venues

Each of these are implemented:

1) By providing concise information about the newest leads, we show the power of our application and direct its growth.

2) The graph allows the Manager to see the growth of the company and allows them to focus on pursuing old leads farther or trying to get new leads. It is important for the company to track both metrics to choose the best growth strategy. Our graph easily visualizes this data.

3a) The tables allow the manager to quickly overview her employees and make important decisions regarding their employment with the company. It can be particularly important while choosing the right person to lead "more important" deals. Currently we have no way to track the effectiveness of the employee but hope to use AI to do so in the future.

3b) The social traffic provides information about how many leads are generated from different sources and how useful they are when being used as evidence to prove music use. This can help the manager decide which APIs to keep and which APIs are not worth paying for.

4) The mapping of the venues seen in the Maps tab allows managers to easily see the graphical spread of new leads making it easy to choose which ones to pursue farther.

5) Venue information allows for the user to easily view all the venue information. Contacting the venue is as simple as pressing the contact button. As most places only have a phone number, the default action is to href to a tel:###. We currently only use yelp reviews to decide whether we have information about infringement, but hope to use the other socials seen in 3b. 

Hope You enjoyed our application as much as we enjoyed the course!
-DreamTune