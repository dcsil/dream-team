import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p> 
    //       Hello my name Ryan
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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

export default App;
