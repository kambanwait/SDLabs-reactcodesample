import React from "react";

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
    </div>
  )
};

export default Recipe;