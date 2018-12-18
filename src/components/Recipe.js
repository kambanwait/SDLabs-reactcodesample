import React from "react";

import AdminControls from './AdminControls';

const Recipe = props => {
  return (
    <div>
      {/* name */}
      <h3 className="title is-3">{props.recipe.name}</h3>
      {/* description */}
      <h5 className="title is-5">Description</h5>
      <p>{props.recipe.description}</p>
      <br />
      {/* ingredients */}
      <h5 className="title is-5">Ingredients</h5>
      <p>{props.recipe.ingredients}</p>
      <br />
      {/* steps */}
      <h5 className="title is-5">Steps</h5>
      <p>{props.recipe.steps}</p>
      {/* only show this if we're on admin page */}
      <br />
      {/* only show admin controls when we're on admin page */}
      {props.showAdmin && <AdminControls />}
    </div>
  )
};

export default Recipe;