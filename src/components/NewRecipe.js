import React, { Component } from "react";

class NewRecipe extends Component {
  state = {
    name: '',
    description: '',
    ingredients: '',
    steps: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    const recipe = {
      title: this.state.title,
      description: this.state.body,
      ingredients: this.state.ingredients,
      steps: this.state.steps
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (<section>
      <h3 className="title is-3">Create your new recipe:</h3>
      <form onSubmit={this.handleSubmit} >
        <div className="field">
          <label className="label">Recipe Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Recipe name" name="name" value={this.state.name} onChange={this.onChange} />
          </div>
        </div>

        <div className="field">
          <label className="label">Description:</label>
          <div className="control">
            <input className="input" type="text" placeholder="Description" name="description" onChange={this.onChange} />
          </div>
        </div>

        <div className="field">
          <label className="label">Ingredients:</label>
          <div className="control">
            <textarea className="textarea" placeholder="Ingredients" name="ingredients" onChange={this.onChange}></textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Steps:</label>
          <div className="control">
            <textarea className="textarea" placeholder="Steps" name="steps" onChange={this.onChange}></textarea>
          </div>
        </div>

        <button type="submit" className="button" >Add new recipe</button>
      </form>
    </section>);
  }
}

export default NewRecipe;