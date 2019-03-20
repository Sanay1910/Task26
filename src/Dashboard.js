import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>/users</h2>
        <div className = "buttonstotheright"><a href="/registeruser#/registeruser">Register new user</a>
        <a href="/login">Login</a>
        </div>
        <input type="text" name="username" placeholder="Insert username here"></input>
        <td>
        <input type="text" name="password" placeholder="Insert password here"></input>
        </td>
        <div className = "loginregisterbuttons">
          <button onclick="">Login</button>
          <button onclick="">Register</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
