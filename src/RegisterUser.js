import React, { Component } from "react";

class RegisterUser extends Component {
  render() {
    return (
      <div>
        <h2>/register user</h2>
        <p>Please register a new user if you aren't already registered.
        </p>
        <br/>
        <input type="text" name="username" placeholder="username"></input><br/>
        <input type="password" name="password" placeholder="password"></input><br/>
        <input type="email" name="email" placeholder="email-address"></input><br/>
        <input type="text" name="role" placeholder="owner/reviewer"></input><br/><br/>
        <div className = "loginregisterbuttons">
          <button onclick="">Register</button>
        </div>
        <br/>
      </div>
    );
  }
}

export default RegisterUser;
