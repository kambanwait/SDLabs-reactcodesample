import React, { Component } from "react";
import { hot } from "react-hot-loader";

require('./mystyles.scss');

import Navigation from './components/Navigation';
import Recipes from './components/Recipes';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Recipes />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);