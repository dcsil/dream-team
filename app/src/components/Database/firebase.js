export const getFirebaseDatabase = function () {
  const firebase = require("firebase");
  // Required for side-effects
  require("firebase/database");
  // Initialize Cloud Firestore through Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp({
      apiKey: "AIzaSyD7CyGm8hPzSSTI54quyhEcwrS8_xRi1tQ",
      authDomain: "dreamtune-cdf8a.firebaseapp.com",
      databaseURL: "https://dreamtune-cdf8a.firebaseio.com",
      projectId: "dreamtune-cdf8a",
      storageBucket: "dreamtune-cdf8a.appspot.com",
      messagingSenderId: "342835886078",
      appId: "1:342835886078:web:3d9381525d1aea0332b2af",
      measurementId: "G-KM6586Z5PP"
    });
  }

  let db = firebase.database();
  return db;
}

export const getFirebaseAuth = function () {
  const firebase = require("firebase");
  // Required for side-effects
  require("firebase/database");
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyD7CyGm8hPzSSTI54quyhEcwrS8_xRi1tQ",
    authDomain: "dreamtune-cdf8a.firebaseapp.com",
    databaseURL: "https://dreamtune-cdf8a.firebaseio.com",
    projectId: "dreamtune-cdf8a",
    storageBucket: "dreamtune-cdf8a.appspot.com",
    messagingSenderId: "342835886078",
    appId: "1:342835886078:web:3d9381525d1aea0332b2af",
    measurementId: "G-KM6586Z5PP"
  });

  let auth = firebase.auth();
  return auth;
}