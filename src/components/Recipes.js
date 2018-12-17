import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';

import Recipe from './Recipe'

class Recipes extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  };

  render() {
    return (
      <section>
        {/* Loops through recipes array and pass data to component */}
        {this.props.recipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index} />
        ))}
      </section>
    );
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes.items,
  newRecipe: state.recipes.item
});

export default connect(mapStateToProps, { fetchRecipes })(Recipes);