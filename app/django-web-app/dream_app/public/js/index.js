'use strict';
const log = console.log;

const buttonTextSize = 25;
const topBottomTextSize = 35;
const middleTextSize = 200;

window.addEventListener("click", clickButton);

function clickButton(e) {
    if (e.target.classList.contains("top-right-button") ||
        (e.target.parentElement &&
            e.target.parentElement.classList.contains("top-right-button"))) {
        if (e.target.textContent.trim() === "Login") {
            window.location.href = '/login';
        } else {
            window.location.href = '/register';
        }
    }
}
