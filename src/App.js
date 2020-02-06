<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardPage from './containers/DashboardPage';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
=======
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
>>>>>>> 3e5c93b310aeea6b4f7d37145a148bf98158bc50
import "./App.css";

function App() {
  return (
    <Router>
<<<<<<< HEAD
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
=======
      <div className="App">
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
      </div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
>>>>>>> 3e5c93b310aeea6b4f7d37145a148bf98158bc50
      </Switch>
    </Router>
  );
}

export default App;
