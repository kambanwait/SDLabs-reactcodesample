import React from 'react';

import Recipes from '../components/Recipes';

const Home = () => {
  return (
    <div className="container is-fluid" >
      <h2 className="title is-2">Home</h2>
      <hr />
      <Recipes />
    </div>
  );
}

export default Home;