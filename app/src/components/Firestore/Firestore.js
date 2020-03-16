import React from "react";
import "./Firestore.css";

class Firestore extends React.Component {
  state = {
    venues: []
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

  addRedLobster = db => {
    db.collection("venues")
      .add({
        name: "Red Lobster",
        phone: "416-495-1930",
        location: "Downtown",
        address: "1045 King Street, Toronto, Ontario, M5S6K9",
        estimatedValue: 1000,
        acquired: false
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  readVenues = db => {
    db.collection("venues")
      .get()
      .then(querySnapshot => {
        let venues = [];
        let id = 0;
        querySnapshot.forEach(doc => {
          console.log(`${doc.id} => ${doc.data()}`);
          console.log(doc.data());
          venues.push({
            acquired: doc.acquired,
            address: doc.address,
            estimatedValue: doc.estimatedValue,
            location: doc.location,
            name: doc.name,
            phone: doc.phone,
            id: id
          });
          id += 1;
        });

        this.setState({ venues: venues });
      });
  };

  componentDidMount() {
    let db = this.getFirestoreDatabase();
    //this.addRedLobster(db);
    this.readVenues(db);
  }

  render() {
    return (
      <div>
        <div className="title">Firestore</div>
        <div id="results">
          {/* {this.state.venues.map((venue) => (
            <div key={venue.id}>
              <b> {venue.name} </b>
              <i> Address: {venue.address} </i>
              <i> Location: {venue.location} </i>
              <i> Phone: {venue.phone} </i>
              <i> Acquired: {venue.acquired} </i>
              <i> Estimated Venue: {venue.estimatedValue} </i>
            </div>
          ))} */}
        </div>
        <div className="filter-ctrl">
          <input
            id="filter-input"
            type="text"
            name="filter"
            placeholder="Filter by name"
          />
        </div>
      </div>
    );
  }
}

export default Firestore;
