import React from "react";
import "./Home.css";

class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <table className="top-right-buttons">
          <tbody>
            <tr>
              <td>
                <button className="top-right-button"><a href="/admin">
                  <div id="button"  className="button-text">Enter</div></a>
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
