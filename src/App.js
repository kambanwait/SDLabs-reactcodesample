import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from './store';

require('./mystyles.scss');

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/admin" component={Admin} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);