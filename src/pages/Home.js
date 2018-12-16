import React from 'react';

import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <React.Fragment>
      <h3 className="title is-3">Home</h3>
      <Recipes />
    </React.Fragment>
  );
}

export default Home;