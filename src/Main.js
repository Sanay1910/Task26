import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import JsonObj from "./JsonObj";
import Restaurants from "./Restaurants";
import RegisterUser from "./RegisterUser";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="title">
            <h1>Happyland restaurant reviews</h1>
          </div>
          <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dashboard">User dashboard</NavLink></li>
          <li><NavLink to="/restaurants">Restaurants</NavLink></li>
          <li><NavLink to="/jsonobj">JSON</NavLink></li>
          <li><NavLink to="/registeruser">Register User</NavLink></li>
          </ul>
          <div className="content">
            <div class = "paddedcontent">
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/restaurants" component={Restaurants}/>
              <Route path="/jsonobj" component={JsonObj}/>
              <Route path="/registeruser" component={RegisterUser}/>
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
