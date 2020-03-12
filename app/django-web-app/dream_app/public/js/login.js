'use strict';
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
    const url = '/login';
    let data = {
        username: user,
        password: pass
    };

    const request = new Request(url, {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
    });

    fetch(request).then((res) => {
        if (res.status === 401) {
            shakeField(passwordfield, "Incorrect Password or Username/Email");
            passwordfield.value = "";
        } else {
            FB.getLoginStatus(function (response) {
                if (response) {
                    if (response.status === "connected") {
                        window.location.href = res.url;
                    } else {
                        window.location.href = "linkInstagram";
                    }
                } else {
                    window.location.href = "linkInstagram";
                }
            })
        }
    }).catch((err) => {
        log(err)
    });
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
        e.target.parentElement;
    }
    field.classList.remove("apply-shake");
    field.classList.remove("alert-red");
}
