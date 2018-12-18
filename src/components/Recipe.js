import React, { Component } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRecipe } from '../actions/recipeActions';

import AdminControls from './AdminControls';
import EditRecipe from './EditRecipe';

class Recipe extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false,
      recipe: this.props.recipe
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing
    })
  };

  onChange(event) {
    const field = event.target.name;
    const recipe = this.props.recipe;
    recipe[field] = event.target.value;
    return this.setState({ recipe: recipe });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateRecipe(this.state.recipe);
    this.toggleEdit();
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <h2 className="title is-2">Editing {this.props.recipe.name}</h2>
          <EditRecipe
            recipe={this.props.recipe}
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
          />
        </div>
      )
    }
    return (
      <div>
        {/* name */}
        <h3 className="title is-3">{this.props.recipe.name}</h3>
        {/* description */}
        <h5 className="title is-5">Description</h5>
        <p>{this.props.recipe.description}</p>
        <br />
        {/* ingredients */}
        <h5 className="title is-5">Ingredients</h5>
        <p>{this.props.recipe.ingredients}</p>
        <br />
        {/* steps */}
        <h5 className="title is-5">Steps</h5>
        <p>{this.props.recipe.steps}</p>
        {/* only show this if we're on admin page */}
        <br />
        {/* only show admin controls when we're on admin page */}
        {this.props.showAdmin && <AdminControls index={this.props.index} toggleEdit={this.toggleEdit} />}
      </div>
    );
  }
}

Recipe.propTypes = {
  updateRecipe: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(mapStateToProps, { updateRecipe })(Recipe);