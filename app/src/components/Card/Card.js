import React from "react";
import "./Card.css";
import venues from "../../data/sampleData.json";
import { uid } from "react-uid";

class Card extends React.Component {

  state = {
    venues: [],
    hasVenues: false
  };

  componentDidMount() {
    this.setState({ venues: venues })
  }


  mappingFunction(venue) {
    return (
      <div className="card" key={uid(venue.name)}>
        <div className="container">
          <p className="venue">{venue.name}</p>
          <p className="revenue">${venue.estimatedValue}</p>
          <img src="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-7bf7c657c51ac80d21a5275f96b4d2c5.png?itok=dySWOkbf" alt="info" />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div id="card_container" className="cardsContainer">
        {this.state.venues.map((venue) => this.mappingFunction(venue))}
      </div>


    );
  }
}

export default Card;
