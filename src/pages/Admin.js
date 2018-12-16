import React from 'react';

import Recipes from '../components/Recipes';

const Admin = () => {
  return (
    <React.Fragment >
      <h3 className="title is-3">Admin</h3>
      <Recipes />
    </React.Fragment >
  );
}

export default Admin;