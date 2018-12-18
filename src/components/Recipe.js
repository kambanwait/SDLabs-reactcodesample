import React, { Component } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateRecipe, removeRecipe, editRecipe } from '../actions/recipeActions';
import { Link } from 'react-router-dom';

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
        <React.Fragment>
          <h4 className="title is-4">Editing {this.props.recipe.name}</h4>
          <EditRecipe
            recipe={this.props.recipe}
            handleSubmit={this.handleSubmit}
            onChange={this.onChange}
          />
        </React.Fragment>
      )
    }
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">{this.props.recipe.name}</p>
        </header>

        <div className="card-image">
          <figure className="image">
            <img src={this.props.recipe.imageURL || 'https://bulma.io/images/placeholders/128x128.png'} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <p>{this.props.recipe.description.substring(0, 90) + '...'}</p>
          </div>
        </div>

        {!this.props.showAdmin && (
          <footer className="card-footer">
            <Link to={`/recipe/${this.props.recipe.id}`} >
              <p className="card-footer-item">Read more</p>
            </Link>
          </footer>
        )}
        {/* only show admin controls when we're on admin page */}
        {this.props.showAdmin && <AdminControls index={this.props.index} toggleEdit={this.toggleEdit} recipe={this.props.recipe} removeRecipe={this.props.removeRecipe} editRecipe={this.props.editRecipe} />}
      </div >
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