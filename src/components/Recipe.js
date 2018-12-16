import React from "react";

const Recipe = props => {
  return (
    <div>
      {/* title */}
      <h4 className="title is-4">{props.name}</h4>
      {/* description */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      {/* ingredients */}
      <ul>
        <li></li>
      </ul>
      {/* steps */}
      <ol>
        <li></li>
      </ol>
    </div>
  )
};

export default Recipe;