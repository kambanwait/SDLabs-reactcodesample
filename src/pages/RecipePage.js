import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSingleRecipe } from '../actions/recipeActions';

class RecipePage extends Component {

  componentDidMount() {
    const recipeId = this.props.match.params.recipe;
    this.props.getSingleRecipe(recipeId);
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="content">
          <h1 className="title is-1">
            {this.props.singleRecipe.name}
          </h1>
          <h2 className="subtitle">
            {this.props.singleRecipe.description}
          </h2>
          <img src={this.props.singleRecipe.imageURL} />
          <br />
          <hr />

          <h3 className="title is-3">Ingredients</h3>
          <p>{this.props.singleRecipe.ingredients}</p>
          <br />

          <h3 className="title is-3">Steps</h3>
          <p>{this.props.singleRecipe.steps}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleRecipe: state.recipes.singleRecipe
});

export default connect(mapStateToProps, { getSingleRecipe })(RecipePage);