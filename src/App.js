import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Dashboard from './containers/DashboardPage';
import Header from './components/Header/index';
import { theme } from './containers/common/AppStyle';
import { Provider } from 'react-redux';

import './App.css';
import './containers/Header/Header.css';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
