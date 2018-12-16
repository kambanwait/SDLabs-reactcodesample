import React from "react";

const Recipe = props => {
  return (
    <div>
      <h4 className="title is-4">{props.title}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
};

export default Recipe;