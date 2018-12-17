import React from 'react';

import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <React.Fragment>
      <h2 className="title is-2">Home</h2>
      <Recipes />
    </React.Fragment>
  );
}

export default Home;