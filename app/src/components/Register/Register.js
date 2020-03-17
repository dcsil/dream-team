import React from "react";
import "../Login/Login.css";

class Register extends React.Component {
  log = console.log;

  clickButton = (e) => {
    if (
      e.target.classList.contains("top-right-button") ||
      (e.target.parentElement &&
        e.target.parentElement.classList.contains("top-right-button"))
    ) {
      if (e.target.textContent.trim() === "Login") {
        window.location.href = "login";
      } else {
        window.location.href = "register";
      }
    }
  }

  handleInputs = (elementsSubmit) => {
    let firstName = this.properValue(elementsSubmit[0]);
    let lastName = this.properValue(elementsSubmit[1]);
    let username = this.properValue(elementsSubmit[2]);
    let password = this.properValue(elementsSubmit[3]);
    let repassword = this.properValue(elementsSubmit[4]);
    let email = this.properValue(elementsSubmit[6]);
    let informativeMessage = null;
    let elShake = null;

    if (firstName === "") {
      informativeMessage = "Please fill all fields";
      elShake = elementsSubmit[0];
    } else if (lastName === "") {
      informativeMessage = "Please fill all fields";
      elShake = elementsSubmit[1];
    } else if (username.trim() !== username || username.length < 5) {
      informativeMessage =
        "Username may not contain spaces and must be atleast 5 letters";
      elShake = elementsSubmit[2];
    } else if (password.trim() !== password || password.length < 5) {
      informativeMessage =
        "Password must contain atleast 5 letters. No Spaces allowed.";
      elShake = elementsSubmit[3];
    } else if (password !== repassword) {
      informativeMessage = "Passwords do not Match.";
      elShake = elementsSubmit[3];
    } else if (
      email.indexOf("@") === -1 &&
      email.slice(-4).indexOf(".") === -1
    ) {
      elShake = elementsSubmit[6];
      informativeMessage =
        "Emails should include an @ sign and should be attached to a domain";
    }

    if (informativeMessage != null) {
      this.log(informativeMessage);
      this.shakeField(elShake, informativeMessage);
      return null;
    }
    this.createIfUserNameAvailable(
      [firstName, lastName, username, email, password],
      elementsSubmit[2]
    );
  }

  submitForm = (e) => {
    e.preventDefault();
    if (e.type === "submit") {
      const elementsSubmit = document.getElementsByTagName("input");
      this.handleInputs(elementsSubmit);
    }
  }

  properValue = (element) => {
    return element.value ? element.value : "";
  }

  createIfUserNameAvailable = (list, element) => {
    const url = document.location.pathname;
    const data = {
      list: list
    };
    const request = new Request(url, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    });
    fetch(request)
      .then(res => {
        this.log(res);
        this.log(res.url);
        if (res.status === 406) {
          this.shakeField(
            element,
            "It seems the username is unavailable! Or this is not your Email."
          );
        } else {
          if (res.redirected) {
            window.location.href = res.url;
          } else {
            this.putMessage(element, "Admin User Added!", true);
          }
        }
      })
      .catch(err => this.log(err));
  }

  shakeField = (field, message) => {
    this.putMessage(field, message);
    field.classList.add("apply-shake");
    field.classList.add("alert-red");
  }

  putMessage = (field, message, happy = false) => {
    if (
      field.parentElement.parentElement.parentElement.childElementCount !== 10
    ) {
      return null;
    }
    message = this.createRowTextElement(message, happy);
    const tbody = field.parentElement.parentElement.parentElement;
    tbody.appendChild(message);
    message.classList.add("apply-fade");
  }

  createRowTextElement = (message, happy) => {
    const rowElement = document.createElement("tr");
    const cellElement = document.createElement("td");
    const textEl = document.createElement("text");
    const text = document.createTextNode(message);
    textEl.appendChild(text);
    if (happy) {
      textEl.classList.add("happy-message");
    } else {
      textEl.classList.add("warning-message");
    }
    cellElement.appendChild(textEl);
    rowElement.appendChild(cellElement);
    return rowElement;
  }

  removeAnimations = (e) => {
    const field = e.target;
    if (field.classList.contains("apply-fade")) {
      e.target.parentElement.removeChild(field);
    }
    field.classList.remove("apply-shake");
    field.classList.remove("alert-red");
    return field;
  }

  componentDidMount() {
    window.addEventListener("click", this.clickButton);
    window.addEventListener("submit", this.submitForm);
    window.addEventListener("animationend", this.removeAnimations);
  }

  render() {
    return (
      <div>
        ${this.topbar}
        ${this.form}
      </div>
    );
  }

  topbar = <div><a className="imp-text" href="/">DreamTune</a>
    <table className="top-right-buttons">
      <tbody>
        <tr>
          <td>
            <button className="top-right-button">
              <div className="button-text">Login</div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>;

  firstname =
    <tr>
      <td>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
        />
      </td>
    </tr>;

  lastname =
    <tr>
      <td>
        <input type="text" name="lastname" placeholder="Last Name" />
      </td>
    </tr>;

  username =
    <tr>
      <td>
        <input type="text" name="username" placeholder="Username" />
      </td>
    </tr>;

  password =
      <tr>
        <td>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </td>
      </tr>
  passwordAgain = 
      <tr>
        <td>
          <input
            type="password"
            name="againpassword"
            placeholder="Re-Enter Password"
          />
        </td>
      </tr>

  email =
    <tr>
      <td>
        <input type="text" name="email" placeholder="Email" />
      </td>
    </tr>

  form = <form className="center">
    <table>
      <tbody>
        <tr>
          <td>
            <div className="imp-text">Register</div>
          </td>
        </tr>

        {this.firstname}
        {this.lastname}
        {this.username}
        {this.password}
        {this.passwordAgain}
        {this.email}

        <tr>
          <td>
            <button>
              <div className="button-text" type="submit">
                Sign Up
			        </div>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>;
}

export default Register;
