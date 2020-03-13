import React from 'react';
import './Login.css';

class Login extends React.Component {

  componentDidMount (){
    const log = console.log;
    const buttonTextSize = 25;
    const topBottomTextSize = 35;
    const middleTextSize = 200;

    window.addEventListener("click", clickButton);
    window.addEventListener("submit", submitForm);
    window.addEventListener("animationend", removeAnimations);

    function clickButton(e) {
        if (e.target.classList.contains("top-right-button") || (e.target.parentElement && e.target.parentElement.classList.contains("top-right-button"))) {
            if (e.target.textContent.trim() !== "Login") {
                window.location.href = '/register';
            }
        }
    }

    function submitForm(e) {
        e.preventDefault();
        if (e.type === "submit") {
            const elementsSubmit = document.getElementsByTagName("input");
            handleInputs(elementsSubmit)
        }
    }

    function handleInputs(elementsSubmit) {
        let username = elementsSubmit[0].value ? elementsSubmit[0].value : "";
        let password = elementsSubmit[1].value ? elementsSubmit[1].value : "";
        const userfield = elementsSubmit[0];
        const passwordfield = elementsSubmit[1];
        if (username.trim() != username || username.length < 5) {
            let informativeMessage = "Username may not contain spaces and must be atleast 5 letters";
            shakeField(elementsSubmit[0], informativeMessage);
        } else if (password.trim() != password || password.length < 5) {
            let informativeMessage = "Password must contain atleast 5 letters. No Spaces allowed.";
            shakeField(elementsSubmit[1], informativeMessage);
        } else {
            authenticateUsers(username, password, userfield, passwordfield)
        }
    }

    function authenticateUsers(user, pass, userfield, passwordfield) {    
    }

    function shakeField(field, message) {
        putMessage(field, message);
        field.classList.add("apply-shake");
        field.classList.add("alert-red");
    }

    function putMessage(field, message) {
        if (field.parentElement.parentElement.parentElement.childElementCount !== 4) {
            return null;
        }
        message = createRowTextElement(message);
        const tbody = field.parentElement.parentElement.parentElement;
        tbody.appendChild(message);
        message.classList.add("apply-fade")

    }

    function createRowTextElement(message) {
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


    function removeAnimations(e) {
        const field = e.target;
        if (field.classList.contains("apply-fade")) {
            e.target.parentElement.removeChild(field);
        }
        field.classList.remove("apply-shake");
        field.classList.remove("alert-red");
    }

  }
  render(){
      return (
                <div>
                    <text class="imp-text">Dreamtune</text>
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
                                        <input type="text" name="email/username" placeholder="Email/Username"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="password" name="password" placeholder="Password"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button>
                                            <text class="button-text" type="submit">Login</text>
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
