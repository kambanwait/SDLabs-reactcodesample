import React, { Component } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRecipe, removeRecipe, editRecipe } from '../actions/recipeActions';

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
        <article className="column is-one-third">
          <h3 className="title is-3">Editing {this.props.recipe.name}</h3>
          <EditRecipe
            recipe={this.props.recipe}
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
          />
        </article>
      )
    }
    return (
      <article className="column is-one-third">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">{this.props.recipe.name}</p>
          </header>

          <div className="card-image">
            <figure className="image">
              <img src={this.props.recipe.imageURL} alt="Placeholder image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p>{this.props.recipe.description}</p>
              <br />
              <h5 className="title is-5">Ingredients</h5>
              <p>{this.props.recipe.ingredients}</p>
              <br />
              <h5 className="title is-5">Steps</h5>
              <p>{this.props.recipe.steps}</p>
            </div>
          </div>
          {/* only show admin controls when we're on admin page */}
          {this.props.showAdmin && <AdminControls index={this.props.index} toggleEdit={this.toggleEdit} recipe={this.props.recipe} removeRecipe={this.props.removeRecipe} editRecipe={this.props.editRecipe} />}
        </div >
      </article>
    );
  }
}

Recipe.propTypes = {
  updateRecipe: PropTypes.func.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  editRecipe: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  recipes: state.recipes.recipes
});

export default connect(mapStateToProps, { updateRecipe, removeRecipe, editRecipe })(Recipe);