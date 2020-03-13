import React from 'react';
import '../Login/Login.css';

function Register() {

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

export default Register;
