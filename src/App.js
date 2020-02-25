import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

>>>>>>> 2cdbc787d54ed7f4e17c3fec34aca8c61d1e7a6d
import "./App.css";
import "./containers/Header/Header.css";
const iconUser = require("./images/Oval.png");
=======
import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";
>>>>>>> 2a772b1... Fix person sidebar and Structure Redux, Call API for resource

import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";
import { theme } from "./containers/common/AppStyle";

function App() {
  return (
<<<<<<< HEAD
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
=======
import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";
import { theme } from "./containers/common/AppStyle";

function App() {
  return (
=======
>>>>>>> 2cdbc787d54ed7f4e17c3fec34aca8c61d1e7a6d
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
<<<<<<< HEAD
>>>>>>> 08e5284... Refactor Header and add common directory
=======
>>>>>>> 2cdbc787d54ed7f4e17c3fec34aca8c61d1e7a6d
  );
}

export default App;
