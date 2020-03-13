import React from 'react';
import './Home.css';

function Home() {

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
    </div>
  );
}

export default Home;
