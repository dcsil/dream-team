# Firebase Functions

Console: https://console.firebase.google.com/u/0/project/dreamtune-cdf8a/functions/list

Logs: https://console.firebase.google.com/u/0/project/dreamtune-cdf8a/functions/logs?search=&severity=DEBUG

### Develop
`cd app/ingest/functions/`

`npm install`

edit `index.js` to add more functions

if you are adding more packages use `npm install --save <package-name>` to save into package.json

`firebase emulators:start` to run the functions locally

wait for the emulator to start and then copy and past the local endpoint in your browser to run the function

view the emulator in the terminal to see the local logs

### Documentation
View the Firebase documentation here: https://firebase.google.com/docs/functions

Please add to this README.md as you learn more and find good resources for documentation

### Deploy
`cd app/ingest/functions/`

`firebase deploy` 

Go to the console and see the list of functions. 

To run a function, you need to visit the endpoint (link is below the title of each function). 

You can then view the logs of the function that is running (triple dot options on the far right of the function has a drop down to filter for that specific function log)

### Billing
The Firebase project is now on a paid Blaze plan because requests to [external APIs are not allowed](https://stackoverflow.com/questions/43415759/use-firebase-cloud-function-to-send-post-request-to-non-google-server) on the free version. 
There is a limit set so no actaul fees are charged to the credit card, which means that we have limits on usage. **Please use the local emulator when possible**.

> The usage limits are 2M invocations/month, 400K GB-second/month, 200K CPU-seconds/month, and 5 GB of outbound networking/month.

From [Blaze Pricing Plan](https://firebase.googleblog.com/2018/03/adding-free-usage-to-blaze-pricing-plan.html)
