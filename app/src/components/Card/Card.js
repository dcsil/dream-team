import React from "react";
import "./Card.css";

class Home extends React.Component {
  componentDidMount() {
    window.addEventListener("click", clickedButton);

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
  }

  createCard() {

  }

  render() {
    return (
      <div class="cardsContainer">
        <div class="card">
          <div class="container">
            <p class="venue">Crab Chack</p>
            <p class="revenue">$434</p>
            <img src="https://img.icons8.com/android/48/000000/info.png" />
          </div>
        </div>
        <div class="card">
          <div class="container">
            <p class="venue">Crab Chack</p>
            <p class="revenue">$434</p>
            <img src="https://img.icons8.com/android/48/000000/info.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
