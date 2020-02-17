import React from "react";
import "./App.css";
import DashboardPage from "./containers/DashboardPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./containers/Header/Header.css";
const iconUser = require("./images/Oval.png");

function App() {
  return (
    <Router>
      <div className="header">
        <div className="wrapper">
          <ul className="menu">
            <li className="logo">
              <Link to="/">
                <img
                  className="test0"
                  src={require("./images/Bitmap.png")}
                  alt="ces-logo"
                />
              </Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/projects">Project</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
          </ul>
          <div className="user">
            <Link to="#" className="active">
              <img className="test1" src={iconUser} />
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
