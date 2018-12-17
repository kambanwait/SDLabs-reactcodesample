import React from 'react';

import Recipes from '../components/Recipes';

const Admin = () => {
  return (
    <React.Fragment >
      <section className="container">
        <h2 className="title is-2">Admin</h2>
        <hr />
        <h3 className="title is-3">Current Recipes:</h3>
        <Recipes />
      </section>
    </React.Fragment >
  );
}

export default Admin;