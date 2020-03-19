import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as Sentry from '@sentry/browser';

// Initialize Sentry: https://docs.sentry.io/platforms/javascript/react
Sentry.init({ dsn: 'https://6ff9ca5fa0d845f194d15e0d97d7688f@sentry.io/4803343' });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from "./serviceWorker";
// serviceWorker.unregister();
