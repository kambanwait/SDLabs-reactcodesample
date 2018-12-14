import React, { Component } from "react";
import { hot } from "react-hot-loader";

require('./mystyles.scss');

class App extends Component {
  render() {
    return (<h1 className="title">SDLabs ReaectJs code test</h1>);
  }
}

export default hot(module)(App);