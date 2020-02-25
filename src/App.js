import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dashboard from "./containers/DashboardPage";
import Header from "./components/Header/index";
import { theme } from "./containers/common/AppStyle";

import "./App.css";
import "./containers/Header/Header.css";

const iconUser = require("./images/Oval.png");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
