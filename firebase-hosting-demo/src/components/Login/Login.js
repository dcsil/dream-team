import React from 'react';
import './Login.css';

function Login() {

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

export default Login;
