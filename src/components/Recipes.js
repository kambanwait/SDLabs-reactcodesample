import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipeActions';
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
      <section className="columns is-multiline is-mobile">
        {/* Loops through recipes array and pass data to component */}
        {
          this.props.recipes.map((recipe, index) => (
            <Recipe
              recipe={recipe}
              index={index}
              key={index}
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
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(mapStateToProps, { fetchRecipes })(Recipes);