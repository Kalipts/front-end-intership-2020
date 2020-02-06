import React from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardPage from './containers/DashboardPage';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

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
