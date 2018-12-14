import React, { Component } from "react";
import { hot } from "react-hot-loader";

require('./mystyles.scss');

import Navigation from './components/navigation';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);