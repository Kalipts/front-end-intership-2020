import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import "./App.css";
import DashboardPage from "./containers/DashboardPage";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
