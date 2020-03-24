import React from "react";
import ReactDOM from "react-dom";
import Firestore from "./Firestore";
import { commonRenderTest } from "App.test";

const { mockFirebase } = require("firestore-jest-mock");
// Create a fake firestore with a `venues' collection
mockFirebase({
  database: {
    venues: [
      {
        id: "abc123",
        data: {
          name: "DJ Khaled",
          phone: "435-346-4920",
          location: "Scarborough",
          address: "Muder Street, Scarborough, Ontario, MDH48D",
          estimatedValue: 48829,
          acquired: false
        }
      },
      {
        id: "abc456",
        data: {
          name: "Red Lobster",
          phone: "416-495-1930",
          location: "Downtown",
          address: "1045 King Street, Toronto, Ontario, M5S6K9",
          estimatedValue: 1000,
          acquired: false
        }
      },
      {
        id: "abc678",
        data: {
          name: "Figs and Olives",
          phone: "476-095-1820",
          location: "Downtown",
          address: "420 Bay Street, Toronto, Ontario, M6H92L",
          estimatedValue: 4590,
          acquired: true
        }
      }
    ]
  }
});

commonRenderTest.bind(this)(Firestore);
