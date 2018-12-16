import React, { Component } from "react";

import Recipe from './Recipe'

class Recipes extends Component {
  render() {
    return (
      <section>
        {/* Loops through recipes array and pass data to component */}
        <Recipe name="Recipe title 1" />
        <Recipe name="Recipe title 2" />
        <Recipe name="Recipe title 3" />
      </section>
    );
  }
}

export default Recipes;