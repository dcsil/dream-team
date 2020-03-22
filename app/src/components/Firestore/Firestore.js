import React from "react";
import "./Firestore.css";
import Loader from "../Loader/Loader"
import { uid } from "react-uid";
//import example_venues from "../../data/sampleData.json";

class Firestore extends React.Component {
  state = {
    venues: [], 
    hasVenues: false
  };

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

  // addVenue = (db, venue) => {
  //   db.collection("venues")
  //     .add(venue)
  //     .then(function(docRef) {
  //       console.log("Document written with ID: ", docRef.id);
  //     })
  //     .catch(function(error) {
  //       console.error("Error adding document: ", error);
  //     });
  // }

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
            id: uid(doc.id)
          });
        });

        this.setState({ venues: venues });
        this.setState({ hasVenues: true});
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
          <p><i> Acquired: </i> {venue.acquired ? <span role="img" aria-label="checkmark">✅</span> : <span role="img" aria-label="xmark">❌</span>} </p>
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