import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import "./App.css";

import Header from "./components/Header/index";
import Dashboard from "./containers/DashboardPage";
import { theme } from "./containers/common/AppStyle";

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
