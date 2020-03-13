import React from "react";
import "./Login.css";

class Login extends React.Component {

	log = console.log;
    buttonTextSize = 25;
    topBottomTextSize = 35;
    middleTextSize = 200;

	clickButton = (e) => {
    if (
      e.target.classList.contains("top-right-button") ||
      (e.target.parentElement &&
        e.target.parentElement.classList.contains("top-right-button"))
    ) {
      if (e.target.textContent.trim() !== "Login") {
        window.location.href = "/register";
      }
    }
  }

   removeAnimations = (e) => {
	const field = e.target;
	if (field.classList.contains("apply-fade")) {
	  e.target.parentElement.removeChild(field);
	}
	field.classList.remove("apply-shake");
	field.classList.remove("alert-red");
  }

  submitForm = (e) => {
	e.preventDefault();
	if (e.type === "submit") {
	  const elementsSubmit = document.getElementsByTagName("input");
	  this.handleInputs(elementsSubmit);
	}
  }

  handleInputs(elementsSubmit) {
	let username = elementsSubmit[0].value ? elementsSubmit[0].value : "";
	let password = elementsSubmit[1].value ? elementsSubmit[1].value : "";
	const userfield = elementsSubmit[0];
	const passwordfield = elementsSubmit[1];
	if (username.trim() !== username || username.length < 5) {
	  let informativeMessage =
		"Username may not contain spaces and must be atleast 5 letters";
	  this.shakeField(elementsSubmit[0], informativeMessage);
	} else if (password.trim() !== password || password.length < 5) {
	  let informativeMessage =
		"Password must contain atleast 5 letters. No Spaces allowed.";
	  this.shakeField(elementsSubmit[1], informativeMessage);
	} else {
	  this.authenticateUsers(username, password, userfield, passwordfield);
	}
  }

  authenticateUsers = (user, pass, userfield, passwordfield) => {}

  shakeField = (field, message) => {
	this.putMessage(field, message);
	field.classList.add("apply-shake");
	field.classList.add("alert-red");
  }

  putMessage = (field, message) => {
	if (
	  field.parentElement.parentElement.parentElement.childElementCount !== 4
	) {
	  return null;
	}
	message = this.createRowTextElement(message);
	const tbody = field.parentElement.parentElement.parentElement;
	tbody.appendChild(message);
	message.classList.add("apply-fade");
  }

  createRowTextElement = (message) => {
	const rowElement = document.createElement("tr");
	const cellElement = document.createElement("td");
	const textEl = document.createElement("text");
	const text = document.createTextNode(message);
	textEl.appendChild(text);
	textEl.classList.add("warning-message");
	cellElement.appendChild(textEl);
	rowElement.appendChild(cellElement);
	return rowElement;
  }

  componentDidMount() {
    window.addEventListener("click", this.clickButton);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("animationend", this.removeAnimations);
  }

  render() {
    return (
      <div>
        <a class="imp-text" href="/">DreamTune</a>
        <table class="top-right-buttons">
          <tbody>
            <tr>
              <td>
                <button class="top-right-button">
                  <text class="button-text">Register</text>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <form class="center">
          <table>
            <tbody>
              <tr>
                <td>
                  <text class="imp-text">Login</text>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="email/username"
                    placeholder="Email/Username"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  ></input>
                </td>
              </tr>
              <tr>
                <td>
                  <button>
                    <text class="button-text" type="submit">
                      Login
                    </text>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default Login;
