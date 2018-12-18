import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

require('./mystyles.scss');

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <section className="section">
            <Switch>
              <Route path="/" component={Home} exact showAdmin={false} />
              <Route path="/admin" component={props => <Admin {...props} showAdmin="true" />} />
              <Route component={Error} />
            </Switch>
          </section>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);