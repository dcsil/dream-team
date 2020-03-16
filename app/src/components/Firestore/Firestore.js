import React from "react";
import "./Firestore.css";
import Loader from "../Loader/Loader"

class Firestore extends React.Component {
  state = {
    venues: [], 
    hasVenues: false
  };

  example_venues = [
    {
    name: "DJ Khaled",
    phone: "435-346-4920",
    location: "Scarborough",
    address: "Muder Street, Scarborough, Ontario, MDH48D",
    estimatedValue: 48829,
    acquired: false
    },
    {
    name: "Red Lobster",
    phone: "416-495-1930",
    location: "Downtown",
    address: "1045 King Street, Toronto, Ontario, M5S6K9",
    estimatedValue: 1000,
    acquired: false
    },
    {
    name: "Figs and Olives",
    phone: "476-095-1820",
    location: "Downtown",
    address: "420 Bay Street, Toronto, Ontario, M6H92L",
    estimatedValue: 4590,
    acquired: true
    }
  ];

  getFirestoreDatabase() {
    const firebase = require("firebase");
    // Required for side-effects
    require("firebase/firestore");

    // Initialize Cloud Firestore through Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyD7CyGm8hPzSSTI54quyhEcwrS8_xRi1tQ",
      authDomain: "dreamtune-cdf8a.firebaseapp.com",
      projectId: "dreamtune-cdf8a"
    });

    let db = firebase.firestore();
    return db;
  }

  addVenue = (db, venue) => {
    db.collection("venues")
      .add(venue)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  readVenues = db => {
    db.collection("venues")
      .get()
      .then(querySnapshot => {
        let venues = [];
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log(doc.data());
          let data = doc.data();
          venues.push({
            acquired: data.acquired,
            address: data.address,
            estimatedValue: data.estimatedValue,
            location: data.location,
            name: data.name,
            phone: data.phone,
            id: doc.id
          });
        });

        this.setState({ venues: venues });
        this.setState({ hasVenues: true});
        console.log(venues);
        
      });
  };

  componentDidMount() {
    let db = this.getFirestoreDatabase();
    //this.addVenue(this.example_venues[0]);
    this.readVenues(db);
  }

  mappingFunction(venue){
    return(
        <div key={venue.id}>
          <p><b> {venue.name} </b></p>
          <p><i> Address: </i> {venue.address} </p>
          <p><i> Location: </i> {venue.location} </p>
          <p><i> Phone: </i> {venue.phone} </p>
          <p><i> Acquired: </i> {venue.acquired ? <span role="img" aria-label="true">✅</span> : <span role="img" aria-label="false">❌</span>} </p>
          <p><i> Estimated Venue: </i> {venue.estimatedValue} </p>
          <p>----------------</p>
        </div>
    )
  }

  render() {
    return (
      <div>
        <div className="title">Firestore</div>
        <div id="results">
          { this.state.hasVenues ? '' : <Loader /> }
          { this.state.venues.map((venue) => this.mappingFunction(venue)) }
        </div>
      </div>
    );
  }
}

export default Firestore;
