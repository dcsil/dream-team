import React from "react";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
    "use strict";
    const log = console.log;

    const buttonTextSize = 25;
    const topBottomTextSize = 35;
    const middleTextSize = 200;

    window.addEventListener("click", clickButton);

    function clickButton(e) {
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

  render() {
    return (
      <div>
        <table className="top-right-buttons">
          <tbody>
            <tr>
              <td>
                <button className="top-right-button">
                  <div className="button-text">Login</div>
                </button>
              </td>
              <td>
                <button className="top-right-button">
                  <div className="button-text">Register</div>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="center">
          <span className="top">Welcome to</span>
          <span className="middle">Dreamtune</span>
          <span className="bottom">
            Making lead generation so easy, that you can do it in your sleep
          </span>
        </div>
      </div>
    );
  }
}

export default Home;
