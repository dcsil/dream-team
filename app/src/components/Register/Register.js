import React from 'react';
import '../Login/Login.css';

class Register extends React.Component {
    componentDidMount() {
        window.addEventListener("click", clickButton);
        window.addEventListener("submit", submitForm);
        window.addEventListener("animationend", removeAnimations);

        const log = console.log;

        function clickButton(e) {
            if (e.target.classList.contains("top-right-button") || (e.target.parentElement && e.target.parentElement.classList.contains("top-right-button"))) {
                if (e.target.textContent.trim() === "Login") {
                    window.location.href = 'login';
                } else {
                    window.location.href = 'register';
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

        function properValue(element) {
            return element.value ? element.value : "";
        }

        function handleInputs(elementsSubmit) {
            let firstName = properValue(elementsSubmit[0]);
            let lastName = properValue(elementsSubmit[1]);
            let username = properValue(elementsSubmit[2]);
            let password = properValue(elementsSubmit[3]);
            let repassword = properValue(elementsSubmit[4]);
            let birthdate = properValue(elementsSubmit[5]);
            let email = properValue(elementsSubmit[6]);
            let category = document.querySelector("#category").value;
            let informativeMessage = null;
            let elShake = null;

            if (firstName === "") {
                informativeMessage = "Please fill all fields";
                elShake = elementsSubmit[0];
            } else if (lastName === "") {
                informativeMessage = "Please fill all fields";
                elShake = elementsSubmit[1];
            } else if (username.trim() !== username || username.length < 5) {
                informativeMessage = "Username may not contain spaces and must be atleast 5 letters";
                elShake = elementsSubmit[2];
            } else if (password.trim() !== password || password.length < 5) {
                informativeMessage = "Password must contain atleast 5 letters. No Spaces allowed.";
                elShake = elementsSubmit[3];
            } else if (password !== repassword) {
                informativeMessage = "Passwords do not Match.";
                elShake = elementsSubmit[3];
            } else if (birthdate === "") {
                elShake = elementsSubmit[5];
                informativeMessage = "Please fill all fields";
            } else if (isNotLegalAge(birthdate)) {
                elShake = elementsSubmit[5];
                informativeMessage = "You must be atleast 18 to use this platform.";
            } else if (email.indexOf("@") === -1 && email.slice(-4).indexOf(".") === -1) {
                elShake = elementsSubmit[6];
                informativeMessage = "Emails should include an @ sign and should be attached to a domain";
            } else if (category === "") {
                elShake = document.querySelector("#category");
                informativeMessage = "Select a Category";
            }

            if (informativeMessage != null) {
                log(informativeMessage);
                shakeField(elShake, informativeMessage);
                return null;
            }
            log(category);
            createIfUserNameAvailable([firstName, lastName, username, birthdate, email, password, category], elementsSubmit[2]);
        }

        function isNotLegalAge(date) {
            date = new Date(date);
            let curDate = new Date();
            let difference = (curDate - date) / (3600000 * 24 * 365);
            return difference < 18;
        }

        function createIfUserNameAvailable(list, element) {
            const url = document.location.pathname;
            const data = {
                list: list
            };
            const request = new Request(url, {
                method: 'post',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            });
            fetch(request).then(
                (res) => {
                    log(res);
                    log(res.url);
                    if (res.status === 406) {
                        shakeField(element, "It seems the username is unavailable! Or this is not your Email.");
                    } else {
                        if (res.redirected) {
                            window.location.href = res.url;
                        } else {
                            putMessage(element, "Admin User Added!", true)
                        }
                    }
                }
            ).catch((err) => log(err));

        }


        function shakeField(field, message) {
            putMessage(field, message);
            field.classList.add("apply-shake");
            field.classList.add("alert-red");
        }

        function putMessage(field, message, happy = false) {
            if (field.parentElement.parentElement.parentElement.childElementCount !== 10) {
                return null;
            }
            message = createRowTextElement(message, happy);
            const tbody = field.parentElement.parentElement.parentElement;
            tbody.appendChild(message);
            message.classList.add("apply-fade")
        }

        function createRowTextElement(message, happy) {
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


        function removeAnimations(e) {
            const field = e.target;
            if (field.classList.contains("apply-fade")) {
                e.target.parentElement.removeChild(field);
            }
            field.classList.remove("apply-shake");
            field.classList.remove("alert-red");
            return field;
        }
    }
    render() {
        return (
            <div>
                <text class="imp-text">Connct</text>
                <table class="top-right-buttons">
                    <tbody>
                        <tr>
                            <td>
                                <button class="top-right-button">
                                    <text class="button-text">Login</text>
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
                                    <text class="imp-text">Register</text>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="firstname" placeholder="First Name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="lastname" placeholder="Last Name" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="username" placeholder="Username" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="password" name="password" placeholder="Enter Password" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="password" name="againpassword" placeholder="Re-Enter Password" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="date" name="birthday" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="text" name="email" placeholder="Email" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <select id="category">
                                        <option value="Alcohol">Alcohol</option>
                                        <option value="Animals">Animals</option>
                                        <option value="Art">Art</option>
                                        <option value="Automotive">Automotive</option>
                                        <option value="Beauty">Beauty</option>
                                        <option value="Design">Design</option>
                                        <option value="Education">Education</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Fitness">Fitness</option>
                                        <option value="Food">Food</option>
                                        <option value="Humour">Humour</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                        <option value="Media">Media</option>
                                        <option value="Music">Music</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Sport">Sport</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Travel">Travel</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button>
                                        <text class="button-text" type="submit">Sign Up</text>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
};

export default Register;
