import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

require('./mystyles.scss');

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default hot(module)(App);