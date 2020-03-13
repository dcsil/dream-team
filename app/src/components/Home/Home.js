import React from 'react';
import './Home.css';

class Home extends React.Component {
    componentDidMount() {
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
    }

    render() {
        return (
            <div>
                <table class="top-right-buttons">
                    <tbody>
                        <tr>
                            <td>
                                <button class="top-right-button">
                                    <text class="button-text">Login</text>
                                </button>
                            </td>
                            <td>
                                <button class="top-right-button">
                                    <text class="button-text">Register</text>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="center">
                    <span class="top">Welcome to</span>
                    <span class="middle">Dreamtune</span>
                    <span class="bottom">Making lead generation so easy, that you can do it in your sleep</span>
                </div>
            </div >
        );
    }
}

export default Home;
