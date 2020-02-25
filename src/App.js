import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import "./App.css";
import DashboardPage from "./containers/DashboardPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
<<<<<<< HEAD
import "./App.css";
import "./containers/Header/Header.css";
const iconUser = require("./images/Oval.png");
=======
import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";
>>>>>>> 2a772b1... Fix person sidebar and Structure Redux, Call API for resource

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <Header />
>>>>>>> 2a772b1... Fix person sidebar and Structure Redux, Call API for resource
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
