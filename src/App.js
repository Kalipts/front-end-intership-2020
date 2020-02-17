import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import "./App.css";
import DashboardPage from "./containers/DashboardPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="header">
        <div className="wrapper">
          <ul className="menu">
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
        </div>
      </div>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
