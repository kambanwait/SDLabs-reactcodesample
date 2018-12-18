import React from "react";

import PropTypes from 'prop-types';

const EditRecipe = props => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div className="field">
        <label className="label">Recipe Name</label>
        <div className="control">
          <input className="input" type="text" name="name" onChange={props.onChange} value={props.recipe.name} />
        </div>
      </div>

      <div className="field">
        <label className="label">Description:</label>
        <div className="control">
          <input className="input" type="text" placeholder="Description" name="description" onChange={props.onChange} value={props.recipe.description} />
        </div>
      </div>

      <div className="field">
        <label className="label">Ingredients:</label>
        <div className="control">
          <textarea className="textarea" placeholder="Ingredients" name="ingredients" onChange={props.onChange} value={props.recipe.ingredients} ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Steps:</label>
        <div className="control">
          <textarea className="textarea" placeholder="Steps" name="steps" onChange={props.onChange} value={props.recipe.steps} ></textarea>
        </div>
      </div>

      <button disabled={!props.recipe.steps} type="submit" className="button is-dark" >Update recipe</button>
    </form>
  );
}

EditRecipe.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
}

export default EditRecipe;