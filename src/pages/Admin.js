import React from 'react';

import Recipes from '../components/Recipes';
import NewRecipe from '../components/NewRecipe';

const Admin = props => {
  return (
    <React.Fragment >
      <section className="container">
        <h2 className="title is-2">Admin</h2>
        <hr />
        <NewRecipe />
        <hr />
        <h3 className="title is-3">Current Recipes:</h3>
        <Recipes showAdmin={props.showAdmin} />
      </section>
    </React.Fragment >
  );
}

export default Admin;