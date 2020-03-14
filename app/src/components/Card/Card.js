import React, { createElement } from "react";
import "./Card.css";
import venues from "../../data/sampleData.json"

class Home extends React.Component {

  createCards = () => {
    var cards_containter = document.getElementById("card_container");
    for (var venue of venues) {
      var card = document.createElement("div");
      card.setAttribute("class", "card");

      var container = document.createElement("div");
      container.setAttribute("class", "container");

      var name = document.createElement("p");
      name.setAttribute("class", "venue");
      name.innerHTML = venue.name;
      container.append(name);
      console.log(venue.name);

      var revenue = document.createElement("p");
      revenue.setAttribute("class", "revenue");
      revenue.innerHTML = venue.estimatedValue;
      container.append(revenue);

      var infographic = document.createElement("img")
      infographic.setAttribute("src", "https://img.icons8.com/android/48/000000/info.png");
      infographic.setAttribute("alt", "https://img.icons8.com/android/48/000000/info.png");

      container.append(infographic);
      card.append(container);
      cards_containter.append(card);
    }
  }

  componentDidMount() {
    window.addEventListener("click", clickedButton);
    console.log("pooasad");
    function clickedButton(e) {
      if (
        e.target.classList.contains("top-right-button") ||
        (e.target.parentElement &&
          e.target.parentElement.classList.contains("top-right-button"))
      ) {
        if (e.target.textContent.trim() === "Login") {
          window.location.href = "/login";
        } else {
          window.location.href = "/register";
        }
      }
    }
    this.createCards();
  }

  render() {
    return (
      <div id="card_container" class="cardsContainer">
      </div>
    );
  }
}

export default Home;
