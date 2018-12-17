import React, { Component } from "react";

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipeActions';
const uuidv4 = require('uuid/v4')

const initialState = {
  id: uuidv4(),
  name: '',
  description: '',
  ingredients: '',
  steps: ''
};

class NewRecipe extends Component {

  state = { ...initialState } // set state to empty initialstate with new ID

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createRecipe(this.state);

    // clear state
    this.setState(initialState);
    // generate new UUID for next recipe
    this.setState({
      id: uuidv4()
    });

  };

  render() {
    return (
      <section>
        <h3 className="title is-3">Create your new recipe:</h3>
        <form onSubmit={this.handleSubmit} >
          <div className="field">
            <label className="label">Recipe Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Recipe name" name="name" onChange={this.onChange} value={this.state.name} />
            </div>
          </div>

          <div className="field">
            <label className="label">Description:</label>
            <div className="control">
              <input className="input" type="text" placeholder="Description" name="description" onChange={this.onChange} value={this.state.description} />
            </div>
          </div>

          <div className="field">
            <label className="label">Ingredients:</label>
            <div className="control">
              <textarea className="textarea" placeholder="Ingredients" name="ingredients" onChange={this.onChange} value={this.state.ingredients} ></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">Steps:</label>
            <div className="control">
              <textarea className="textarea" placeholder="Steps" name="steps" onChange={this.onChange} value={this.state.steps} ></textarea>
            </div>
          </div>

          <button disabled={!this.state.steps} type="submit" className="button" >Add new recipe</button>
        </form>
      </section>
    );
  }
}

NewRecipe.propTypes = {
  createRecipe: PropTypes.func.isRequired,
}

export default connect(null, { createRecipe })(NewRecipe);