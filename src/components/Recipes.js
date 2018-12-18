import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes, removeRecipe, updateRecipe } from '../actions/recipeActions';
import { loadState } from '../localStorage';

import Recipe from './Recipe'

class Recipes extends Component {

  componentDidMount() {
    if (!loadState()) {
      this.props.fetchRecipes();
    } else {
      this.props.loadState;
    }
  }

  render() {
    return (
      <section>
        {/* Loops through recipes array and pass data to component */}
        {
          this.props.recipes.map((recipe, index) => (
            <Recipe
              recipe={recipe}
              index={index}
              key={index}
              removeRecipe={this.props.removeRecipe}
              updateRecipe={this.props.updateRecipe}
              showAdmin={this.props.showAdmin}
            />
          ))
        }
      </section >
    );
  }
}

Recipes.propTypes = {
  fetchRecipes: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(mapStateToProps, { fetchRecipes, removeRecipe, updateRecipe })(Recipes);