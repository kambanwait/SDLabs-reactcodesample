import React from "react";

import AdminControls from './AdminControls';

const Recipe = props => {
  return (
    <div>
      {/* name */}
      <h4 className="title is-4">{props.recipe.name}</h4>
      {/* description */}
      <p>{props.recipe.description}</p>
      {/* ingredients */}
      <p>{props.recipe.ingredients}</p>
      {/* steps */}
      <p>{props.recipe.steps}</p>
      {/* only show this if we're on admin page */}
      <br />
      {/* only show admin controls when we're on admin page */}
      {props.showAdmin && <AdminControls />}
    </div>
  )
};

export default Recipe;